export type Thought = {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  category: 'tech' | 'career' | 'learning' | 'opinion';
}; 