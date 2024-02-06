"use client";
import React, { useState } from "react";
import Button from "./neobruu/Button";
import { IoCheckmark, IoCopy } from "react-icons/io5";

export default function CopyCode({ code }: { code: string }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 2500);
      })
      .catch(() => {
        alert(
          "Your device doesn't support navigator api, so you'll have to manually select and copy the code.",
        );
      });
  };

  return (
    <Button rounded="md" variant="yellow" onClick={handleClick}>
      {isClicked ? <IoCheckmark /> : <IoCopy />}
    </Button>
  );
}
