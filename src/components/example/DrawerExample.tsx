'use client'
import Drawer from "@/components/neobruu/Drawer";
import { useState } from "react";
import { Button } from "@/components/neobruu/Button";

export default function DrawerExample() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prevIsDrawerOpen) => !prevIsDrawerOpen);
  };

  return (
    <div className="flex gap-3">
      <Button onClick={handleToggleDrawer}>Toggle Drawer</Button>
      {isDrawerOpen && (
        <Drawer variant="pink" active={isDrawerOpen} setActive={setIsDrawerOpen}>
          <h2 className="text-xl">Hello There</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
      )}
    </div>
  );
}