import Button from "@/components/neobruu/Button";

export default function ButtonExample() {
    return (
      <div className="flex gap-3">
        <Button variant="primary" rounded="none">Button</Button>
        <Button variant="secondary" rounded="lg">Button</Button>
        <Button variant="blue" rounded="full">Button</Button>
      </div>
    )
  }