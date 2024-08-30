"use client";

import queryBuilderFields from "@/constants/queryBuilderFields";
import { useEffect, useState } from "react";
import QueryBuilder, { RuleGroupType } from "react-querybuilder";
import useSearchQueries from "@/hooks/useSearchQueries";
import useUsers from "@/hooks/useUsers";
import queryBuilderOperators from "@/constants/queryBuilderOperators";
import UserTable from "@/components/common/UserTable";
import GroupFilterPopUp from "@/components/common/GroupFilterPopUp";
import useQueryBuilderConfig from "@/hooks/useQueryBuilderConfig";

export default function Home() {
  const [queries, setQueries] = useState<(RuleGroupType & { title: string })[]>(
    []
  );
  const searchQueries = useSearchQueries(queries);
  const { data, mutate } = useUsers();

  useQueryBuilderConfig({ queries });

  //Generate search query and call API to fetch users
  useEffect(() => {
    mutate(searchQueries);
  }, [searchQueries]);

  const handleAddQuery = (
    index: number,
    title: string,
    query: RuleGroupType
  ) => {
    setQueries((queries) => {
      const newQueries = [...queries];
      newQueries[index] = { ...query, title };
      return newQueries.filter((_) => _.rules.length > 0);
    });
  };

  const Combinator = ({ index }: { index: number }) => {
    if (!(queries.length > 1 && index !== queries.length - 1)) return null;

    return (
      <div className="flex justify-center relative -mb-3">
        <div className="uppercase absolute py-1 px-2 text-sm rounded-md bg-green-600 text-white font-semibold top-full">
          AND
        </div>
      </div>
    );
  };

  return (
    <main className="flex flex-col gap-2 p-2">
      <div className="flex flex-col gap-2 border rounded-md p-4">
        <div className="font-medium">Filter</div>
        {!!queries.length && (
          <div className="border rounded-md">
            {queries.map((query, index) => {
              if (!query.rules.length) return null;

              return (
                <div
                  key={index}
                  className={`p-4 pb-6 ${index !== 0 && "border-t"}`}
                >
                  <div className="font-medium mb-2">{query.title}</div>
                  <QueryBuilder
                    fields={queryBuilderFields}
                    query={query}
                    onQueryChange={(query) =>
                      handleAddQuery(index, query.title, query)
                    }
                    operators={queryBuilderOperators as any}
                    showCombinatorsBetweenRules
                  />
                  <Combinator index={index} />
                </div>
              );
            })}
          </div>
        )}

        <GroupFilterPopUp
          queries={queries}
          onAddQuery={(query) => setQueries(query)}
        />
      </div>
      <UserTable data={data?.length ? data : []} />
    </main>
  );
}
