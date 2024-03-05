'use client'
import React, { useState } from "react";
import Button from "./neobruu/Button";
import { IoCopy } from "react-icons/io5";
import { IoMdCheckmark, IoMdCheckmarkCircle } from "react-icons/io";
import Toast from "./neobruu/Toast";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  code: string,
}


const CopyCode = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, code, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
      setShowToast(true);
    };

    const handleClick = () => {
      handleShowToast();
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
      <>
        <Button rounded="md" variant="yellow" onClick={handleClick}>
          {isClicked ? <IoMdCheckmark className="w-5 h-5" /> : <IoCopy />}
        </Button>

        {showToast && (
        <Toast
          variant="primary"
          duration={3000}
          active={showToast}
          setActive={setShowToast}
        >
          <div className="flex items-center gap-3 p-1">
              <IoMdCheckmarkCircle className="w-6 h-6"/>
              <p className="text-sm">Copied to clipboard</p>
          </div>
        </Toast>
      )}
      </>
    );
  }
)

CopyCode.displayName = "Copy Code";

export default CopyCode