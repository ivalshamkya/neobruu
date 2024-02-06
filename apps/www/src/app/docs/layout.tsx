import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neobruu Components",
  description: "Documentation for neobrutalism components.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="docs md:ml-[300px] min-h-[100vh] w-auto md:w-[full-250px] bg-[#00EB90] px-5 pt-[80px] border-l">
        <div className="mx-auto w-full max-w-[700px] pt-20">{children}</div>
      </div>
    </>
  );
}
