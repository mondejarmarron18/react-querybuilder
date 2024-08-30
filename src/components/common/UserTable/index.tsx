"use client";

import { User } from "@prisma/client";
import React, { ComponentProps } from "react";
import Table from "../Table";

type UserTableProps = {
  data: User[];
};

const tableHeader: (ComponentProps<typeof Table> & {
  key: keyof User;
})["header"] = [
  {
    label: "First Name",
    key: "firstName",
  },
  {
    label: "Last Name",
    key: "lastName",
  },

  {
    label: "Email",
    key: "email",
  },

  {
    label: "Active",
    key: "isActive",
  },

  {
    label: "Age",
    key: "age",
  },
  {
    label: "Sex",
    key: "sex",
  },
  {
    label: "Date Created",
    key: "createdAt",
  },
];
const UserTable = ({ data }: UserTableProps) => {
  const userData = data.map(({ id, updatedAt, ...user }) => {
    const createdAt = new Date(user.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });

    return {
      ...user,
      isActive: user.isActive ? "Active" : "Inactive",
      createdAt,
    };
  });

  return <Table header={tableHeader} data={userData} />;
};

export default UserTable;
