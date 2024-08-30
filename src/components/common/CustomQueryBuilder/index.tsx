"use client";

import queryBuilderOperators, {
  QueryBuilderOperator,
} from "@/constants/queryBuilderOperators";
import React, { useState } from "react";
import QueryBuilder, { Field, RuleGroupType } from "react-querybuilder";

type Props = {
  fields: Field[];
  queries: RuleGroupType[];
};

const CustomQueryBuilder = ({ fields, queries: initialQueries }: Props) => {
  const [queries, setQueries] = useState<RuleGroupType[]>(initialQueries);

  const handleAddQuery = (index: number, query: RuleGroupType) => {
    setQueries((queries) => {
      const newQueries = [...queries];

      newQueries[index] = query;

      return newQueries;
    });
  };

  return (
    <div>
      <div>Queries: {queries.length}</div>
      {queries.map((query, index) => {
        return (
          <div key={index} className="p-6 border">
            <QueryBuilder
              fields={fields}
              query={query}
              onQueryChange={(query) => handleAddQuery(index, query)}
              operators={queryBuilderOperators as any}
              showCombinatorsBetweenRules
            />

            <div className="flex justify-center relative -mb-3">
              {queries.length > 1 && index !== queries.length - 1 && (
                <div className="uppercase absolute py-1 px-2 text-sm rounded-md bg-green-600 text-white font-semibold top-full">
                  AND
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomQueryBuilder;
