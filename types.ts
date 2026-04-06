
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  specs: string[];
}

export interface Testimonial {
  id: string;
  client: string;
  location: string;
  quote: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}
