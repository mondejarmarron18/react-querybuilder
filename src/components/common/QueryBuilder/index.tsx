"use client";

import queryBuilderOperators from "@/constants/queryBuilderOperators";
import useSearchQuery from "@/hooks/useSearchQuery";
import useUsers from "@/hooks/useUsers";
import React, { useEffect, useState } from "react";
import ReactQueryBuilder, { Field, RuleGroupType } from "react-querybuilder";

type Props = {
  fields: Field[];
};

const QueryBuilder = ({ fields }: Props) => {
  const [query, setQuery] = useState<RuleGroupType>({
    combinator: "and",
    rules: [],
  });

  const searchQuery = useSearchQuery(query);
  const { data, error, mutate } = useUsers();

  useEffect(() => {
    //Fetch users on mount
    mutate("");
  }, []);

  const handleOnSearch = () => mutate(searchQuery);

  return (
    <div>
      <ReactQueryBuilder
        fields={fields}
        query={query}
        onQueryChange={setQuery}
        operators={queryBuilderOperators}
        showCombinatorsBetweenRules
      />
      <div>
        {!!data?.length && (
          <div>
            {data.map((user: any) => (
              <div key={user.email}>{user.email}</div>
            ))}
          </div>
        )}
      </div>
      <button onClick={handleOnSearch}>Search</button>
    </div>
  );
};

export default QueryBuilder;
