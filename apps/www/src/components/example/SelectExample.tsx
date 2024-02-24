'use client';
import Select from "@/components/neobruu/Select";
import { ChangeEvent, useState } from "react";

export default function SelectExample() {
  const [value1, setValue1] = useState<string>("");

  const handleInput1 = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue1(e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Select
        onChange={handleInput1}
        variant="light"
        rounded="md"
      >
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    </div>
  );
}