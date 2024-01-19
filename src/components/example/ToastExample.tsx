'use client'

import Toast from "@/components/neobruu/Toast";
import Button from "../neobruu/Button";
import { useState } from "react";

export default function ToastExample() {
  const [visible, setVisible] =  useState<boolean>(false);


  const handleToast = () => {
    console.log("aaaa")
    setVisible(true);
  }

  return (
    <div className="flex gap-3">
      <Toast open={visible} title="Success!" type="success">Hello world!</Toast>
    </div>
  )
}