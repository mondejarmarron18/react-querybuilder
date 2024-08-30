"use client";

import queryBuilderFields from "@/constants/queryBuilderFields";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { Field, RuleGroupType } from "react-querybuilder";
import PopUp from "../PopUp";

type RuleGroupTypes = (RuleGroupType & { title: string })[];

type GroupFilterPopUpProps = {
  queries: RuleGroupTypes;
  onAddQuery: (query: RuleGroupTypes) => void;
};

type Category = {
  name: string;
  fields: Field[];
};

const categories: Category[] = [
  {
    name: "Users",
    fields: queryBuilderFields,
  },
  {
    name: "Products",
    fields: [],
  },
];

const GroupFilterPopUp = ({ onAddQuery, queries }: GroupFilterPopUpProps) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

  return (
    <PopUp
      showPopUp={showPopUp}
      trigger={{
        children: (
          <>
            <IoMdAdd /> Group
          </>
        ),
        className: "w-fit flex items-center gap-1",
        onClick: () => setShowPopUp((prevShowPopUp) => !prevShowPopUp),
      }}
      popUp={{
        onMouseLeave: () => setShowPopUp(false),
        children: (
          <div className="w-[400px] h-[400px] border rounded-lg bg-white flex flex-col overflow-hidden">
            <div className="relative w-full h-fit flex items-center border-b">
              <FiSearch
                size={20}
                className="absolute ml-3 pointer-events-none"
              />
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="p-3 pl-10 w-full rounded-md outline-none"
                autoFocus
              />
            </div>
            <div className="flex flex-1">
              <div className="flex flex-col border-r p-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="px-4 text-start py-2 rounded hover:bg-gray-100"
                    onMouseOver={() => setActiveCategory(category)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="flex flex-col p-2 w-full h-[350px] flex-1 overflow-y-auto">
                {activeCategory.fields.map((field) => (
                  <button
                    key={field.name}
                    className="w-full px-4 py-2 rounded-md text-start hover:bg-gray-100"
                    onClick={() => {
                      onAddQuery([
                        ...queries,
                        {
                          title: activeCategory.name,
                          combinator: "and",

                          rules: [
                            {
                              field: field.name,
                              operator: "eq",
                              value: "",
                            },
                          ],
                        },
                      ]);

                      setShowPopUp(false);
                    }}
                  >
                    {field.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ),
      }}
    />
  );
};

export default GroupFilterPopUp;
