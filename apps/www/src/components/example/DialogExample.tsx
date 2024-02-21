'use client';
import { useState } from "react";

import Dialog from "@/components/neobruu/Dialog";
import Button from "@/components/neobruu/Button";

export default function DialogExample() {
  const [showDialog, setShowDialog] = useState(false);

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  return (
    <div>
      <Button onClick={handleShowDialog}>Show Dialog</Button>
      {showDialog && (
        <Dialog
          title="Hello There 👋"
          variant="light"
          active={showDialog}
          setActive={setShowDialog}
        >
          <Dialog.Content>
            <div className="flex justify-between gap-3 p-1">
              <div>
                <h1 className="text-lg">Dialog</h1>
                <p className="text-sm mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellendus hic inventore obcaecati fuga qui id corrupti
                  perferendis, totam aliquam incidunt? Voluptas omnis pariatur
                  inventore tenetur rerum aperiam? Excepturi, dolor quo!
                </p>
              </div>
            </div>
          </Dialog.Content>
          <Dialog.Footer>
            <div className="flex gap-3">
              <Button variant={"default"}>Okay</Button>
            </div>
          </Dialog.Footer>
        </Dialog>
      )}
    </div>
  );
}
