import queryBuilderOperators from "@/constants/queryBuilderOperators";

const getQueryBuilderOperators = (
  operators: (typeof queryBuilderOperators)[number]["name"][]
) => {
  return queryBuilderOperators.filter((operator) =>
    operators.includes(operator.name)
  );
};

export default getQueryBuilderOperators;
