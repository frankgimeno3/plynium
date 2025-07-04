import SearchClient from "./SearchClient";

interface PageProps {
  params: {
    query: string;
  };
}

export default function Page({ params }: PageProps) {
  return <SearchClient query={params.query} />;
}
