import { products } from "@/app/components/directory/getDirectoryData";
import ProductsDirectoryClient from "./ProductsDirectoryClient";

export default function ProductsDirectoryPage() {
  return <ProductsDirectoryClient rows={products} />;
}
