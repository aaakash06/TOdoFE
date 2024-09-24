import { Button } from "@/components/ui/button";
import { getRoleByClerkId } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import Buttonn from "./button";

const Experiement = async () => {
  const { userId } = auth();
  const random = async () => {
    "use server";
    console.log("random");
  };
  return (
    <div>
      <Button onClick={random}>Rn</Button>
      <Buttonn></Buttonn>
    </div>
  );
};

export default Experiement;
