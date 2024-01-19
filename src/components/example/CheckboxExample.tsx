import Checkbox from "@/components/neobruu/Checkbox";

export default function CheckboxExample() {
    return (
      <div className="flex gap-3">
        <Checkbox />
        <Checkbox rounded="sm" variant="red"/>
        <Checkbox rounded="lg" variant="yellow"/>
        <Checkbox rounded="full" variant="blue"/>
      </div>
    )
  }