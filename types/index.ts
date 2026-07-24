export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'admin' | 'moderator' | 'editor' | 'user';
  membership: 'free' | 'premium' | 'lifetime';
  watchHistory?: string[]; // videoIds
  watchLater?: string[];
  favorites?: string[];
  createdAt: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
  category: string;
  publishDate: string;
  views: number;
  isPremium?: boolean;
}

export interface Short {
  id: string;
  title: string;
  youtubeUrl: string;
  publishDate: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  lessonsCount: number;
  duration: string;
  membershipRequired: 'free' | 'premium' | 'lifetime';
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  youtubeUrl: string;
  isLocked: boolean;
}

export interface Strategy {
  id: string;
  title: string;
  description: string;
  category: 'indicators' | 'risk-management' | 'price-action' | 'psychology' | 'breakout';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rules: string[];
  winRate: string;
}

export interface CommunityPost {
  id: string;
  authorId: string;
  authorName: string;
  authorPhoto?: string;
  content: string;
  likes: string[]; // userIds
  comments: Comment[];
  pinned?: boolean;
  createdAt: string;
}

export interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
}

export interface JournalEntry {
  id: string;
  userId: string;
  date: string;
  pair: string;
  type: 'BUY' | 'SELL';
  entryPrice: number;
  exitPrice: number;
  size: number; // lots/units
  pnl: number;
  notes: string;
}
