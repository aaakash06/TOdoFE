"use client";
import { getUserByClerkId } from "@/db/actions.db";
import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { createContext, useContext } from "react";

const RoleContext = createContext<{ userRole: string | null }>({
  userRole: "",
});

export const RoleContextProvider = async ({
  children,
  userRole,
}: {
  children: React.ReactNode;
  userRole: string | null;
}) => {
  return (
    <RoleContext.Provider value={{ userRole }}>{children}</RoleContext.Provider>
  );
};

export const useRole = (): { userRole: string | null } => {
  const { userRole } = useContext(RoleContext);
  return { userRole };
};
