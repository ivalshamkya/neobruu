import { Button } from "@/components/neobruu/Button";

export default function ButtonExample() {
    return (
      <div className="flex gap-3">
        <Button variant="default" rounded="none">Button</Button>
        <Button variant="pink" rounded="lg">Button</Button>
        <Button variant="blue" rounded="full">Button</Button>
      </div>
    )
  }