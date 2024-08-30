import { Field } from "react-querybuilder";
import getQueryBuilderOperators from "@/utils/getQueryOperators";
import { User } from "@prisma/client";

const queryBuilderFields: (Field & { name: keyof User })[] = [
  {
    name: "firstName",
    label: "First Name",
    inputType: "text",
    operators: getQueryBuilderOperators(["eq", "neq", "like", "ilike"]),
  },
  {
    name: "lastName",
    label: "Last Name",
    inputType: "text",
    operators: getQueryBuilderOperators(["eq", "neq", "like", "ilike"]),
  },
  {
    name: "email",
    label: "Email",
    inputType: "email",
    operators: getQueryBuilderOperators(["ilike", "like", "eq", "neq"]),
    validator: ({ value }) => /^[^@]+@[^@]+/.test(value),
  },
  {
    name: "age",
    label: "Age",
    defaultValue: 18,
    inputType: "number",
    operators: [
      {
        name: "eq",
        label: "is",
      },
      {
        name: "neq",
        label: "is not",
      },
      {
        name: "gt",
        label: "older than",
      },
      {
        name: "gte",
        label: "older than or equal to",
      },
      {
        name: "lt",
        label: "younger than",
      },
      {
        name: "lte",
        label: "younger than or equal to",
      },
    ],
    validator: ({ value }) => /^[0-9]+$/.test(value),
  },
  {
    name: "sex",
    label: "Sex",
    operators: getQueryBuilderOperators(["eq", "neq"]),
    valueEditorType: "select",

    values: [
      {
        label: "male",
        value: "male",
      },
      {
        label: "female",
        value: "female",
      },
    ],
    defaultValue: "male",
  },
  {
    name: "isActive",
    label: "Active Status",
    valueEditorType: "checkbox",
    operators: [
      {
        name: "eq",
        label: "is",
      },
      {
        name: "neq",
        label: "is not",
      },
    ],
    defaultValue: false,
  },
  {
    name: "createdAt",
    label: "Date Created",
    inputType: "date",
    operators: [
      {
        name: "eq",
        label: "on",
      },
      {
        name: "gt",
        label: "after",
      },
      {
        name: "lt",
        label: "before",
      },
    ],
  },
];

export default queryBuilderFields;
