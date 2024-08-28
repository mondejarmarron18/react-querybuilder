import { Field } from "react-querybuilder";

const queryBuilderFields: Field[] = [
  {
    name: "firstName",
    label: "First Name",
  },
  { name: "lastName", label: "Last Name" },
  { name: "age", label: "Age", inputType: "number" },
  { name: "address", label: "Address" },
  { name: "phone", label: "Phone" },
  {
    name: "email",
    label: "Email",
    validator: ({ value }) => /^[^@]+@[^@]+/.test(value),
  },
  { name: "twitter", label: "Twitter" },
  {
    name: "isDev",
    label: "Is a Developer?",
    valueEditorType: "checkbox",
    defaultValue: false,
  },
];

export default queryBuilderFields;
