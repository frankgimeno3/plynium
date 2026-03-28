import DirectoryListingClient from "@/app/components/directory/DirectoryListingClient";
import { companies } from "@/app/components/directory/getDirectoryData";

export default function CompaniesDirectoryPage() {
  return (
    <DirectoryListingClient
      variant="companies"
      title="Companies directory"
      basePath="/home/companies"
      rows={companies}
    />
  );
}
