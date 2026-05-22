export type FilterType = 'all' | 'active' | 'completed';

export type Priority = 'low' | 'medium' | 'high';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: number;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  features: string[];
};

export type Stat = {
  id: string;
  label: string;
  value: string | number;
};

export type Testimonial = {
  id: string;
  author: string;
  content: string;
  rating?: number;
};
