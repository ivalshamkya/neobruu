'use client';
import Accordion from "@/components/neobruu/Accordion";

export default function AccordionExample() {
  return (
    <div className="flex gap-3">
      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Trigger>Question 1</Accordion.Trigger>
          <Accordion.Content>
            <h1 className="text-xl">Lorem</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              atque error aperiam consectetur excepturi. Quod, eaque. Libero,
              non illo vero accusantium consectetur, iure tempora commodi quo
              quibusdam, fuga dolore in?
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="2">
          <Accordion.Trigger>Question 2</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            accusantium impedit corporis magnam esse pariatur libero sint
            mollitia veniam, sed quos hic voluptatibus molestias porro ab.
            Possimus ratione commodi dolorem. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Doloribus corporis ipsam aperiam
            assumenda molestiae minima, ipsum dolore adipisci, quod doloremque
            nam deserunt porro nostrum ut iste tenetur placeat nulla numquam!
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="3">
          <Accordion.Trigger>Question 3</Accordion.Trigger>
          <Accordion.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            accusantium impedit corporis magnam esse pariatur libero sint
            mollitia veniam, sed quos hic voluptatibus molestias porro ab.
            Possimus ratione commodi dolorem. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Doloribus corporis ipsam aperiam
            assumenda molestiae minima, ipsum dolore adipisci, quod doloremque
            nam deserunt porro nostrum ut iste tenetur placeat nulla numquam!
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
