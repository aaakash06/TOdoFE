import { FocusCards } from "@/components/ui/focus-cards";

import { setRole } from "@/db/actions.db";
import { redirect } from "next/navigation";

const cards = [
  {
    title: "Student/seeker",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Facilitator/provider",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Role() {
  const setrole = async (userId: string, role: string) => {
    "use server";
    await setRole(
      userId,
      role.includes("provider") ? "facilitator" : "student"
    );
    redirect("/");
  };
  return (
    <section className="w-screen bg-light-700  pt-40 h-screen flex flex-col gap-10">
      <h1 className="text-black text-center text-3xl font-spaceGrotesk font-extrabold">
        Pick Your Role
      </h1>

      <FocusCards cards={cards} setrole={setrole} />
    </section>
  );
}
