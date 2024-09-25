import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { getRoleByClerkId } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import ResponsiveSidebar from "@/components/custom/MobileNav";
import { RoleContextProvider } from "@/context/RoleProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  let userRole: null | string = null;
  if (userId) {
    const role = await getRoleByClerkId(userId);
    console.log("called from layout");
    userRole = role;
  }
  return (
    <RoleContextProvider userRole={userRole}>
      <ResponsiveSidebar></ResponsiveSidebar>
      <Header></Header>
      {children}
      <Footer></Footer>
    </RoleContextProvider>
  );
}
