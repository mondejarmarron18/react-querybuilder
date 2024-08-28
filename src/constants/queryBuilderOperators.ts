import { FullOperator } from "react-querybuilder";

type QueryBuilderOperator = {
  name: string;
  label: string;
  inputType?: string;
};

const queryBuilderOperators: QueryBuilderOperator[] = [
  { name: "eq", label: "= (equals)" },
  { name: "gt", label: "> (greater than)" },
  { name: "gte", label: ">= (greater than or equal to)" },
  { name: "lt", label: "< (less than)" },
  { name: "lte", label: "<= (less than or equal to)" },
  { name: "neq", label: "!= (not equals)" },
  { name: "ilike", label: "contains" },
];

export default queryBuilderOperators;
