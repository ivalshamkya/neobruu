import Tooltip from "@/components/neobruu/Tooltip";
import Button from "@/components/neobruu/Button";


export default function TooltipExample() {
  return (
    <div className="flex gap-3">
      <Tooltip position="top">
        <Tooltip.Hover>
          <Button variant="primary" rounded="md">Hover</Button>
        </Tooltip.Hover>
        <Tooltip.Content rounded="md" variant="red">Hello World!</Tooltip.Content>
      </Tooltip>

    </div>
  )
}