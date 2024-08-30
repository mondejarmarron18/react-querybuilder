import { useEffect, useState } from "react";
import { formatQuery, RuleGroupType } from "react-querybuilder";

//Get search query from json query
const useSearchQuery = (query: RuleGroupType): string => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    //Convert json query to javascript object
    const rules = JSON.parse(formatQuery(query)).rules;
    //Create search query
    const searchQuery = rules
      .map((rule: any) => {
        //Check if operator is like or ilike
        const isLike = ["like", "ilike"].includes(rule.operator);
        //If operator is like or ilike, add wildcard to value
        const value = isLike ? `*${rule.value}*` : rule.value;

        return `${rule.field}=${rule.operator}.${value}`;
      })
      .join("&");

    setSearchQuery(searchQuery);
  }, [query]);

  return searchQuery;
};

export default useSearchQuery;
