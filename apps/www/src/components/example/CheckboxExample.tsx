import Checkbox from "@/components/neobruu/Checkbox";

export default function CheckboxExample() {
  return (
    <div className="flex gap-3">
      <Checkbox />
      <Checkbox rounded="sm" variant="red" />
      <Checkbox rounded="md" variant="yellow" />
      <Checkbox rounded="lg" variant="blue" />
    </div>
  );
}
