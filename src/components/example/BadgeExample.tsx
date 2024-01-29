import Badge from "@/components/neobruu/Badge";

export default function BadgeExample() {
    return (
      <div className="flex flex-wrap gap-3">
        <Badge text="Hello World" variant="default" rounded="none" />
        <Badge text="Hello World" variant="pink" rounded="sm" />
        <Badge text="Hello World" variant="blue" rounded="md" />
        <Badge text="Hello World" variant="green" rounded="lg" />
        <Badge text="Hello World" variant="red" rounded="xl" />
        <Badge text="Hello World" variant="yellow" rounded="full" />
      </div>
    )
  }