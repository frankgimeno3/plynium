"use client";

import DirectoryListingClient, {
  type DirectoryColumn,
} from "@/app/components/directory/DirectoryListingClient";
import type { Product } from "@/app/components/directory/types";

const columns: DirectoryColumn<Product>[] = [
  { label: "Name", accessor: (r) => r.name },
  { label: "SKU", accessor: (r) => r.sku },
  { label: "Category", accessor: (r) => r.category },
  { label: "Price (€)", accessor: (r) => (r.priceEur > 0 ? r.priceEur.toFixed(2) : "Quote") },
  { label: "Unit", accessor: (r) => r.unit },
  { label: "Company", accessor: (r) => r.companyName },
];

export default function ProductsDirectoryClient({ rows }: { rows: Product[] }) {
  return (
    <DirectoryListingClient<Product>
      title="Products directory"
      basePath="/home/products"
      rows={rows}
      columns={columns}
      filterPlaceholder="Filter by name, SKU, company, category, standard…"
    />
  );
}
