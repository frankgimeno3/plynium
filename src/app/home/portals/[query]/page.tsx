import SearchClient from "../../search/[query]/SearchClient";

interface PageProps {
  params: {
    query: string;
  };
}

export default function Page({ params }: PageProps) {
  return <SearchClient query={params.query} pathPrefix="/home/portals" />;
}
