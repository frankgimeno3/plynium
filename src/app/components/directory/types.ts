export type Product = {
  id: string;
  companyId: string;
  companyName: string;
  name: string;
  sku: string;
  category: string;
  subcategory: string;
  priceEur: number;
  unit: string;
  leadTimeDays: number;
  description: string;
  standard: string;
  inStock: boolean;
  rating: number;
};

export type Company = {
  id: string;
  name: string;
  country: string;
  city: string;
  industry: string;
  foundedYear: number;
  employeeCount: number;
  website: string;
  contactEmail: string;
  description: string;
  certifications: string[];
  annualRevenueMeur: number;
  products_array: string[];
};
