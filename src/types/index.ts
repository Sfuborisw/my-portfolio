export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'frontend' | 'fullstack' | 'ai';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}