"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Company, Product } from "./types";

const PAGE_SIZE = 10;

export type DirectoryColumn<T> = {
  label: string;
  accessor: (row: T) => string;
};

const PRODUCT_COLUMNS: DirectoryColumn<Product>[] = [
  { label: "Name", accessor: (r) => r.name },
  { label: "SKU", accessor: (r) => r.sku },
  { label: "Category", accessor: (r) => r.category },
  { label: "Price (€)", accessor: (r) => (r.priceEur > 0 ? r.priceEur.toFixed(2) : "Quote") },
  { label: "Unit", accessor: (r) => r.unit },
  { label: "Company", accessor: (r) => r.companyName },
];

const COMPANY_COLUMNS: DirectoryColumn<Company>[] = [
  { label: "Name", accessor: (r) => r.name },
  { label: "Country", accessor: (r) => r.country },
  { label: "City", accessor: (r) => r.city },
  { label: "Industry", accessor: (r) => r.industry },
  { label: "Employees", accessor: (r) => String(r.employeeCount) },
  { label: "Products", accessor: (r) => String(r.products_array.length) },
  { label: "Revenue (M€)", accessor: (r) => r.annualRevenueMeur.toFixed(1) },
];

export type DirectoryListingClientProps =
  | {
      variant: "products";
      title: string;
      basePath: string;
      rows: Product[];
      filterPlaceholder?: string;
    }
  | {
      variant: "companies";
      title: string;
      basePath: string;
      rows: Company[];
      filterPlaceholder?: string;
    };

function matchesFilter<T extends object>(row: T, q: string): boolean {
  if (!q.trim()) return true;
  const s = q.trim().toLowerCase();
  for (const v of Object.values(row)) {
    if (v == null) continue;
    if (Array.isArray(v)) {
      if (v.join(" ").toLowerCase().includes(s)) return true;
    } else if (String(v).toLowerCase().includes(s)) return true;
  }
  return false;
}

function DirectoryListingInner<T extends { id: string }>({
  title,
  basePath,
  rows,
  columns,
  filterPlaceholder = "Filter table…",
}: {
  title: string;
  basePath: string;
  rows: T[];
  columns: DirectoryColumn<T>[];
  filterPlaceholder?: string;
}) {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => rows.filter((row) => matchesFilter(row, filter)),
    [rows, filter]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages));
  }, [totalPages]);

  const pageSafe = Math.min(page, totalPages);
  const pageSlice = useMemo(() => {
    const p = Math.min(page, totalPages);
    const start = (p - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page, totalPages]);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="min-h-screen w-full bg-gray-100 pt-28 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl text-[#DA6D00] font-bold mb-6">{title}</h1>

        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <input
            type="search"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setPage(1);
            }}
            placeholder={filterPlaceholder}
            className="w-full sm:max-w-md rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:ring-2 focus:ring-[#DA6D00] focus:border-[#DA6D00] outline-none"
          />
          <p className="text-sm text-gray-700">
            Showing {pageSlice.length === 0 ? 0 : (pageSafe - 1) * PAGE_SIZE + 1}–
            {(pageSafe - 1) * PAGE_SIZE + pageSlice.length} of {filtered.length}
            {filter.trim() ? ` (filtered from ${rows.length})` : ""}
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-800">
              <thead className="bg-zinc-800 text-white">
                <tr>
                  {columns.map((col) => (
                    <th key={col.label} className="px-4 py-3 font-semibold whitespace-nowrap">
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pageSlice.map((row) => {
                  const href = `${basePath}/${encodeURIComponent(row.id)}`;
                  return (
                    <tr key={row.id} className="border-t border-gray-200 transition-colors hover:bg-orange-50">
                      <td colSpan={columns.length} className="p-0">
                        <Link
                          href={href}
                          prefetch={false}
                          className="grid w-full min-w-0 text-inherit no-underline hover:bg-orange-50"
                          style={{
                            gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
                          }}
                        >
                          {columns.map((col) => (
                            <span
                              key={col.label}
                              className="block max-w-[220px] truncate whitespace-nowrap px-4 py-3 text-sm text-gray-800"
                            >
                              {col.accessor(row)}
                            </span>
                          ))}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {pageSlice.length === 0 && (
            <p className="px-4 py-8 text-center text-gray-600">No rows match this filter.</p>
          )}
        </div>

        <div className="mt-6 flex flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={pageSafe <= 1}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none"
            aria-label="Previous page"
          >
            ←
          </button>
          <span className="text-sm text-gray-700">
            Page {pageSafe} / {totalPages}
          </span>
          <button
            type="button"
            onClick={goNext}
            disabled={pageSafe >= totalPages}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none"
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DirectoryListingClient(props: DirectoryListingClientProps) {
  if (props.variant === "products") {
    return (
      <DirectoryListingInner<Product>
        title={props.title}
        basePath={props.basePath}
        rows={props.rows}
        columns={PRODUCT_COLUMNS}
        filterPlaceholder={
          props.filterPlaceholder ?? "Filter by name, SKU, company, category, standard…"
        }
      />
    );
  }
  return (
    <DirectoryListingInner<Company>
      title={props.title}
      basePath={props.basePath}
      rows={props.rows}
      columns={COMPANY_COLUMNS}
      filterPlaceholder={
        props.filterPlaceholder ?? "Filter by name, country, industry, certifications…"
      }
    />
  );
}
