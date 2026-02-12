
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
