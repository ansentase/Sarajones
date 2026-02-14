
export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  theme: 'pink' | 'gold';
  highlights: string[];
  cta: string;
  footerText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  saving: string;
  avatar: string;
}

export interface RoadmapStep {
  id: number;
  title: string;
  subtitle: string;
  details: string[];
  theme: 'pink' | 'gold';
}
