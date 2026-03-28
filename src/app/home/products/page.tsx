import DirectoryListingClient from "@/app/components/directory/DirectoryListingClient";
import { products } from "@/app/components/directory/getDirectoryData";

export default function ProductsDirectoryPage() {
  return (
    <DirectoryListingClient
      variant="products"
      title="Products directory"
      basePath="/home/products"
      rows={products}
    />
  );
}
