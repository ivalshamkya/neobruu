import components from "@/data/components";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import Component from "@/components/Components";
import { redirect } from "next/navigation";
import Pagination from "@/components/Pagination";

const readFilePath = async (filePath: string) => {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8",
  );
  return fileContent;
};

const getCode = async (filePath: string) => {
  const code = await readFilePath(filePath);

  if (code.includes("'use client'")) {
    return code.slice(13);
  }

  return code;
};

export async function generateStaticParams() {
  const componentSlugs = components.map((component) => ({
    name: component.name,
  }));

  return componentSlugs;
}

export const dynamicParams = false;

export default async function Installation({
  params,
}: {
  params: { name: string };
}) {
  const currentComponent = components.find(
    (component) => component.name === params.name,
  );

  if (!currentComponent) {
    redirect("/docs");
  }

  const filePath = `./src/components/neobruu/${params.name}.tsx`;

  const code = await getCode(filePath);

  return (
    <>
      <Component
        name={params.name}
        sub={currentComponent.sub}
        isNew={currentComponent.isNew}
        component={code}
        exampleComponent={<currentComponent.exampleComponent />}
      />

      <Pagination
        prev={
          currentComponent.prevComponent
            ? {
                name: `${currentComponent.prevComponent}`,
                path: `/docs/components/${currentComponent.prevComponent}`,
              }
            : undefined
        }
        next={
          currentComponent.nextComponent
            ? {
                name: `${currentComponent.nextComponent}`,
                path: `/docs/components/${currentComponent.nextComponent}`,
              }
            : undefined
        }
      />

      <div className="flex items-center gap-1 text-sm pt-20 pb-14 font-medium text-neutral-900">
        <span>©</span>
        <span>{new Date().getFullYear()}</span>
        <span>with</span>
        <div className="relative inline-flex justify-center items-center">
          <div className="text-red-500 rounded-full">❤️</div>
          <div className="text-red-500 absolute top-0 left-0 animate-ping">
            ❤️
          </div>
          <div className="text-red-500 absolute top-0 left-0 animate-pulse">
            ❤️
          </div>
        </div>
        <span>by</span>
        <span className="hover:dark:text-neutral-400 cursor-pointer">
          Ival Shamkya
        </span>
      </div>
    </>
  );
}
