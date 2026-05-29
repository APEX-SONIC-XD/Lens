// Shared widget bootstrap for the local "review rounds" fixture pages.
//
// Each demo/rounds/rN/index.html includes this module. It mounts the widget
// exactly like demo/index.html does (same localStorage-based dev config), so
// the only thing that differs between rounds is the page markup — which is the
// whole point: it simulates a build that changes significantly between rounds.
const PROJECT_ID = window.localStorage.getItem('CW_PROJECT_ID') || 'demo';
const SUPABASE_URL = window.localStorage.getItem('CW_SUPABASE_URL') || '';
const SUPABASE_ANON_KEY = window.localStorage.getItem('CW_SUPABASE_ANON_KEY') || '';

const { mount } = await import('/src/index.ts');
mount({
  projectId: PROJECT_ID,
  supabaseUrl: SUPABASE_URL || 'https://placeholder.supabase.co',
  supabaseAnonKey: SUPABASE_ANON_KEY || 'placeholder',
});
