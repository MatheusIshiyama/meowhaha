export interface ThreadMessage {
  content: string;
}

export interface Thread {
  name: string;
  message: ThreadMessage;
  appliedTags?: string[];
}
