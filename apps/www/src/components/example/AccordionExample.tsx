'use client';
import Accordion from "@/components/neobruu/Accordion";

export default function AccordionExample() {
  return (
    <div className="flex gap-3">
      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Trigger>Question 1</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            accusantium impedit corporis magnam esse pariatur libero sint
            mollitia veniam, sed quos hic voluptatibus molestias porro ab.
            Possimus ratione commodi dolorem.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger>Question 2</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            accusantium impedit corporis magnam esse pariatur libero sint
            mollitia veniam, sed quos hic voluptatibus molestias porro ab.
            Possimus ratione commodi dolorem.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="3">
          <Accordion.Trigger>Question 3</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            accusantium impedit corporis magnam esse pariatur libero sint
            mollitia veniam, sed quos hic voluptatibus molestias porro ab.
            Possimus ratione commodi dolorem.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
