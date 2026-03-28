import { companies } from "@/app/components/directory/getDirectoryData";
import CompaniesDirectoryClient from "./CompaniesDirectoryClient";

export default function CompaniesDirectoryPage() {
  return <CompaniesDirectoryClient rows={companies} />;
}
