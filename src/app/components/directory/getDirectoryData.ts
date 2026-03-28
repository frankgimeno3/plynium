import companiesData from "./companies.json";
import productsData from "./products.json";
import type { Company, Product } from "./types";

export const companies = companiesData as Company[];
export const products = productsData as Product[];

export function getCompanyById(id: string): Company | undefined {
  return companies.find((c) => c.id === id);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsForCompany(companyId: string): Product[] {
  const co = getCompanyById(companyId);
  if (!co) return [];
  const set = new Set(co.products_array);
  return products.filter((p) => set.has(p.id));
}
