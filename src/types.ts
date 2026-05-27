export interface Thread {
  id: string;
  project_id: string;
  page_url: string;
  selector_path: string;
  anchor_x_pct: number;
  anchor_y_pct: number;
  status: 'open' | 'resolved';
  created_at: string;
  created_by_name: string;
  created_by_email: string;
}

export interface Comment {
  id: string;
  thread_id: string;
  body: string;
  author_name: string;
  author_email: string;
  created_at: string;
}

export interface AnchorData {
  selector: string;
  x_pct: number;
  y_pct: number;
}

export interface ResolvedAnchor {
  x: number;
  y: number;
  approximate: boolean;
  element: Element;
}

export interface Identity {
  name: string;
  email: string;
}

export interface Mentionable {
  id: string;
  project_id: string;
  email: string;
  name: string;
  added_at: string;
  added_by_email: string | null;
}

export interface CommentMention {
  id: string;
  comment_id: string;
  mentioned_email: string;
  mentioned_name: string;
  created_at: string;
}

// Lightweight view of a mention captured by the composer / reply input.
// Persisted into comment_mentions on submit.
export interface MentionDraft {
  email: string;
  name: string;
}

export interface WidgetConfig {
  projectId: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
}
