import Link from "next/link";
import { notFound } from "next/navigation";
import { getCompanyById, getProductById } from "@/app/components/directory/getDirectoryData";

interface PageProps {
  params: Promise<{ id_product: string }> | { id_product: string };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const product = getProductById(resolved.id_product);
  if (!product) notFound();

  const company = getCompanyById(product.companyId);

  const priceLabel =
    product.priceEur > 0 ? `€${product.priceEur.toFixed(2)} / ${product.unit}` : "Price on request";

  return (
    <div className="min-h-screen w-full bg-gray-100 pt-28 pb-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-200 shadow p-8">
        <p className="text-sm text-gray-600 mb-1">{product.sku}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#DA6D00] mb-6">{product.name}</h1>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <dt className="text-gray-600">Category</dt>
            <dd className="font-medium text-gray-900">
              {product.category} · {product.subcategory}
            </dd>
          </div>
          <div>
            <dt className="text-gray-600">Price</dt>
            <dd className="font-medium text-gray-900">{priceLabel}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Lead time</dt>
            <dd className="font-medium text-gray-900">{product.leadTimeDays} days</dd>
          </div>
          <div>
            <dt className="text-gray-600">Standard</dt>
            <dd className="font-medium text-gray-900">{product.standard}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Stock</dt>
            <dd className="font-medium text-gray-900">{product.inStock ? "In stock" : "Made to order"}</dd>
          </div>
          <div>
            <dt className="text-gray-600">Rating</dt>
            <dd className="font-medium text-gray-900">{product.rating.toFixed(1)} / 5</dd>
          </div>
        </dl>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Supplier</h2>
          {company ? (
            <Link
              href={`/home/companies/${encodeURIComponent(company.id)}`}
              className="inline-flex items-center text-[#DA6D00] font-medium hover:text-[#c25f00] underline-offset-2 hover:underline"
            >
              {product.companyName}
            </Link>
          ) : (
            <span className="text-gray-700">{product.companyName}</span>
          )}
        </div>

        <p className="mt-8">
          <Link href="/home/products" className="text-sm font-medium text-gray-700 hover:text-[#DA6D00]">
            ← Back to products directory
          </Link>
        </p>
      </div>
    </div>
  );
}
