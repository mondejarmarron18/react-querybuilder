import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RuleGroupType } from "react-querybuilder";

type Props = {
  queries: (RuleGroupType & { title: string })[];
};

const useQueryBuilderConfig = ({ queries }: Props) => {
  return useEffect(() => {
    const rulesRemove = document.querySelectorAll(".rule-remove");
    const rulesAdd = document.querySelectorAll(".ruleGroup-addRule");

    const removeRoots: any[] = [];
    const addRoots: any[] = [];

    rulesRemove.forEach((ruleRemove) => {
      ruleRemove.innerHTML = "";
      const root = createRoot(ruleRemove);
      removeRoots.push(root);
      root.render(<MdOutlineDeleteOutline size={20} />);
    });

    rulesAdd.forEach((ruleAdd) => {
      ruleAdd.innerHTML = "";
      const root = createRoot(ruleAdd);
      addRoots.push(root);
      root.render(
        <div className="flex gap-1 items-center">
          <IoMdAdd /> Filter
        </div>
      );
    });
  }, [queries]);
};

export default useQueryBuilderConfig;
