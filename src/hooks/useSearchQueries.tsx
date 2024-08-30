import { useEffect, useState } from "react";
import { formatQuery, RuleGroupType } from "react-querybuilder";

//Get search query from json query
const useSearchQueries = (queries: RuleGroupType[]): string => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const _queries = queries.map((query) => {
      //Convert json query to javascript object
      const rules = JSON.parse(formatQuery(query)).rules;
      //Create search query
      const searchQuery: string = rules
        .map((rule: any) => {
          //Check if operator is like or ilike
          const isLike = ["like", "ilike"].includes(rule.operator);
          //If operator is like or ilike, add wildcard to value
          const value = isLike ? `*${rule.value}*` : rule.value;

          return `${rule.field}.${rule.operator}.${value}`;
        })
        .join(",");

      return searchQuery;
    });

    const searchQueries = _queries.length ? `and=(${_queries.join(",")})` : "";

    setSearchQuery(searchQueries);
  }, [queries]);

  return searchQuery;
};

export default useSearchQueries;
