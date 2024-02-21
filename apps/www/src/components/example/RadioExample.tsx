import Radio from "@/components/neobruu/Radio";

export default function RadioExample() {
  return (
    <div className="flex gap-3">
      <Radio name="example" />
      <Radio name="example" variant="red" />
      <Radio name="example" variant="yellow" />
      <Radio name="example" variant="blue" />
    </div>
  );
}
