import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { auth as Auth } from "@clerk/nextjs/server";
import { getRoleByClerkId } from "./db/actions.db";
import { redirect } from "next/navigation";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/api(.*)",
  "role",
]);

// const isRole = async () => {
//   "use server";
//   const { userId } = Auth();
//   console.log(userId);
//   const userRole = await getRoleByClerkId(userId!);
//   if (userRole == "null") {
//     redirect("/role");
//   }
// };

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
  // isRole();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
