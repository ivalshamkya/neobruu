'use client'
import { useState } from "react";
import { HiExclamation } from  "react-icons/hi"

import Toast from "@/components/neobruu/Toast";
import {Button} from "@/components/neobruu/Button";

export default function ToastExample() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  return (
    <div>
      <Button onClick={handleShowToast}>Show Toast</Button>
      {showToast && (
        <Toast variant="primary" duration={4000} active={showToast} setActive={setShowToast}>
          <div className="flex justify-between gap-3 p-1">
            <div>
              <h1 className="text-lg">Hi, I`m Toast</h1>
              <p className="text-sm">Nice to meet you.</p>
            </div>
          </div>
        </Toast>
      )}
    </div>
  );
}