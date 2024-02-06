"use client";
import React, { useEffect, useMemo, useState } from "react";
import { cva } from "class-variance-authority";
import { FiChevronDown } from "react-icons/fi";

type AccordionProps = {
  children: React.ReactNode;
};

type AccordionTriggerProps = {
  children: React.ReactNode;
  showContent?: boolean;
  setShowContent?: React.Dispatch<React.SetStateAction<boolean>>;
};

type AccordionContentProps = {
  children: React.ReactNode;
  showContent?: boolean;
  contentHeight?: string;
  contentRef?: React.RefObject<HTMLDivElement>;
};

type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
};

const accordionVariants = cva("border-black bg-orange-500/80 p-5 font-bold", {
  variants: {
    variant: {
      primary: "bg-orange-500/80",
      secondary: "bg-pink-500/80",
      light: "bg-slate-50/80",
      dark: "bg-zinc-900/80",
      blue: "bg-blue-500/80",
      yellow: "bg-[#f7cb46]/80",
      green: "bg-green-500/80",
      red: "bg-red-500/80",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<
    AccordionItemProps & AccordionContentProps & AccordionTriggerProps
  >;
  Trigger: React.FC<AccordionTriggerProps>;
  Content: React.FC<AccordionContentProps>;
} = ({ children }) => {
  const [contentStates, setContentStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [contentHeights, setContentHeights] = useState<{
    [key: string]: string;
  }>({});
  const contentRefs: { [key: string]: React.RefObject<HTMLDivElement> } =
    useMemo(() => ({}), []);

  useEffect(() => {
    const updatedContentStates: { [key: string]: boolean } = {};
    const updatedContentHeights: { [key: string]: string } = {};

    Object.keys(contentRefs).forEach((key) => {
      if (contentRefs[key]?.current) {
        updatedContentHeights[key] =
          (contentRefs[key]?.current?.scrollHeight || 0) + "px";
        updatedContentStates[key] = contentStates[key] || false;
      }
    });

    setContentHeights(updatedContentHeights);
    setContentStates(updatedContentStates);
  }, [contentRefs]);

  const handleToggleContent = (key: string) => {
    setContentStates((prevContentStates) => {
      const newContentStates: { [key: string]: boolean } = {};
      Object.keys(prevContentStates).forEach((contentKey) => {
        if (contentKey === key) {
          newContentStates[contentKey] = !prevContentStates[contentKey];
        } else {
          newContentStates[contentKey] = false;
        }
      });

      return newContentStates;
    });
  };

  return (
    <div className="w-full max-w-[500px] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Accordion.Item) {
            const { children, value } = child.props as AccordionItemProps;
            contentRefs[value] = React.createRef<HTMLDivElement>();

            return React.cloneElement(
              child as React.ReactElement<
                AccordionItemProps &
                  AccordionContentProps &
                  AccordionTriggerProps
              >,
              {
                key: value,
                contentRef: contentRefs[value],
                showContent: contentStates[value] || false,
                contentHeight: contentHeights[value] || "0px",
                setShowContent: () => handleToggleContent(value),
              },
            );
          }
        }
        return null;
      })}
    </div>
  );
};

Accordion.Item = function AccordionItem({
  children,
  value,
  showContent,
  contentHeight,
  contentRef,
  setShowContent,
}) {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Accordion.Trigger) {
            return React.cloneElement(
              child as React.ReactElement<AccordionTriggerProps>,
              {
                showContent,
                setShowContent,
              },
            );
          } else if (child.type === Accordion.Content) {
            return React.cloneElement(
              child as React.ReactElement<AccordionContentProps>,
              {
                showContent,
                contentHeight,
                contentRef,
              },
            );
          }
        }
        return null;
      })}
    </div>
  );
};

Accordion.Trigger = function AccordionTrigger({
  children,
  showContent,
  setShowContent,
}) {
  return (
    <button
      role="button"
      aria-expanded={showContent}
      className={`flex w-full items-center justify-between border-b border-black ${accordionVariants()}`}
      onClick={() => {
        if (setShowContent) {
          setShowContent(!showContent);
        }
      }}
    >
      {children}
      <FiChevronDown
        style={{ transform: `rotate(${showContent ? "180deg" : "0"})` }}
        className="ml-4 min-h-[24px] min-w-[24px] transition-transform ease-in-out"
      />
    </button>
  );
};

Accordion.Content = function AccordionContent({
  children,
  showContent,
  contentHeight,
  contentRef,
}) {
  return (
    <div
      ref={contentRef}
      style={{
        height: showContent ? contentHeight : "0px",
        transition: "height 0.3s ease-in-out",
      }}
      className="max-h-[500px] overflow-x-hidden overflow-y-auto rounded-[5px] bg-white font-bold"
    >
      <div className="p-5">{children}</div>
    </div>
  );
};

Accordion.displayName = "Accordion";

export default Accordion;
