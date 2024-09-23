import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { getUserByClerkId } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import ResponsiveSidebar from "@/components/custom/MobileNav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  let userRole: null | string = null;
  if (userId) {
    const user = await getUserByClerkId(userId);
    userRole = user.role;
  }
  return (
    <>
      <ResponsiveSidebar role={userRole}></ResponsiveSidebar>
      <Header role={userRole}></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
