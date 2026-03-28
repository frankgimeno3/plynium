"use client";

import DirectoryListingClient, {
  type DirectoryColumn,
} from "@/app/components/directory/DirectoryListingClient";
import type { Company } from "@/app/components/directory/types";

const columns: DirectoryColumn<Company>[] = [
  { label: "Name", accessor: (r) => r.name },
  { label: "Country", accessor: (r) => r.country },
  { label: "City", accessor: (r) => r.city },
  { label: "Industry", accessor: (r) => r.industry },
  { label: "Employees", accessor: (r) => String(r.employeeCount) },
  { label: "Products", accessor: (r) => String(r.products_array.length) },
  { label: "Revenue (M€)", accessor: (r) => r.annualRevenueMeur.toFixed(1) },
];

export default function CompaniesDirectoryClient({ rows }: { rows: Company[] }) {
  return (
    <DirectoryListingClient<Company>
      title="Companies directory"
      basePath="/home/companies"
      rows={rows}
      columns={columns}
      filterPlaceholder="Filter by name, country, industry, certifications…"
    />
  );
}
