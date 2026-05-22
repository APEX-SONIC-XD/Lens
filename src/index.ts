import { createApp } from 'vue';
import CommentOverlay from './components/CommentOverlay.vue';
import type { WidgetConfig } from './types';

declare global {
  interface Window {
    __commentWidgetMounted__?: boolean;
    CommentWidget?: { mount: (config: WidgetConfig) => void };
  }
}

const WIDGET_ROOT_ID = '__comment-widget-root';

function readConfigFromScriptTag(): WidgetConfig | null {
  // `document.currentScript` is the running <script> in classic-script context.
  // For ES bundles loaded as modules, currentScript is null — in that case the
  // caller can invoke `window.CommentWidget.mount(config)` manually.
  const script = document.currentScript as HTMLScriptElement | null;
  if (!script) return null;

  const projectId = script.dataset.projectId;
  const supabaseUrl = script.dataset.supabaseUrl;
  const supabaseAnonKey = script.dataset.supabaseAnonKey;

  if (!projectId || !supabaseUrl || !supabaseAnonKey) {
    // eslint-disable-next-line no-console
    console.error(
      '[comment-widget] missing required data attributes. ' +
        'Need data-project-id, data-supabase-url, data-supabase-anon-key.',
    );
    return null;
  }

  return { projectId, supabaseUrl, supabaseAnonKey };
}

function mount(config: WidgetConfig): void {
  if (window.__commentWidgetMounted__) {
    // eslint-disable-next-line no-console
    console.warn('[comment-widget] already mounted; ignoring duplicate mount call.');
    return;
  }

  const existing = document.getElementById(WIDGET_ROOT_ID);
  if (existing) existing.remove();

  const host = document.createElement('div');
  host.id = WIDGET_ROOT_ID;
  document.body.appendChild(host);

  const app = createApp(CommentOverlay, { config });
  app.mount(host);

  window.__commentWidgetMounted__ = true;
}

function autoMount(): void {
  const config = readConfigFromScriptTag();
  if (!config) return;

  if (document.body) {
    mount(config);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => mount(config), { once: true });
  } else {
    // Edge case: HTML parsed but body somehow null — defer to next tick.
    queueMicrotask(() => mount(config));
  }
}

// Expose imperative API for module consumers.
window.CommentWidget = { mount };

autoMount();

export { mount };
export type { WidgetConfig };
