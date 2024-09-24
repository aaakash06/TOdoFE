"use client";
import { Button } from "@/components/ui/button";
import { deleteUserByClerkId } from "@/db/actions.db";
import React from "react";

const Buttonn = () => {
  return (
    <div
      onClick={async () => {
        await deleteUserByClerkId("one");
      }}
    >
      <Button>Randome</Button>
    </div>
  );
};

export default Buttonn;
