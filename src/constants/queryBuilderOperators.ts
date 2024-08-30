export type QueryBuilderOperator = {
  name: string;
  label: string;
};

// Operators based on postgREST documentation
// Reference: https://docs.postgrest.org/en/v12/references/api/tables_views.html#operators
const queryBuilderOperators = [
  { name: "eq", label: "is equal to" },
  { name: "gt", label: "greater than" },
  { name: "gte", label: "higher than or equal" },
  { name: "lt", label: "higher than" },
  { name: "lte", label: "lower than or equal" },
  { name: "neq", label: "is not" },
  { name: "like", label: "contains (case sensitive)" },
  { name: "ilike", label: "contains" },
] as const;

export default queryBuilderOperators;
