import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompanyById, getProductsForCompany } from "@/app/components/directory/getDirectoryData";

interface PageProps {
  params: Promise<{ id_company: string }> | { id_company: string };
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const company = getCompanyById(resolved.id_company);
  if (!company) notFound();

  const companyProducts = getProductsForCompany(company.id);

  return (
    <div className="min-h-screen w-full bg-gray-100 pt-28 pb-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 shadow p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#DA6D00] mb-2">{company.name}</h1>
        <p className="mb-6 text-gray-700">
          {company.city}, {company.country} · {company.industry}
        </p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm mb-8">
          <div>
            <dt className="text-gray-600">Founded</dt>
            <dd className="font-medium text-gray-900">{company.foundedYear}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Employees</dt>
            <dd className="font-medium text-gray-900">{company.employeeCount}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Website</dt>
            <dd className="font-medium text-gray-900">
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DA6D00] hover:underline"
              >
                {company.website}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-gray-600">Contact</dt>
            <dd className="font-medium text-gray-900">{company.contactEmail}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-gray-600">Annual revenue</dt>
            <dd className="font-medium text-gray-900">€{company.annualRevenueMeur.toFixed(1)}M</dd>
          </div>
        </dl>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">About</h2>
          <p className="text-gray-700 leading-relaxed">{company.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Certifications</h2>
          <ul className="flex flex-wrap gap-2">
            {company.certifications.map((c) => (
              <li
                key={c}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm border border-gray-200"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Products in directory</h2>
          <ul className="space-y-2">
            {companyProducts.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/home/products/${encodeURIComponent(p.id)}`}
                  className="text-[#DA6D00] font-medium hover:text-[#c25f00] hover:underline"
                >
                  {p.name}
                </Link>
                <span className="text-gray-600 text-sm ml-2">({p.sku})</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10">
          <Link href="/home/companies" className="text-sm font-medium text-gray-700 hover:text-[#DA6D00]">
            ← Back to companies directory
          </Link>
        </p>
      </div>
    </div>
  );
}
