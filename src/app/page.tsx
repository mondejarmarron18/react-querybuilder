"use client";

import QueryBuilder from "@/components/common/QueryBuilder";
import queryBuilderFields from "@/constants/queryBuilderFields";

export default function Home() {
  return (
    <main>
      <QueryBuilder fields={queryBuilderFields} />
    </main>
  );
}
