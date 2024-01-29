import Tooltip from "@/components/neobruu/Tooltip";
import { Button } from "@/components/neobruu/Button";


export default function TooltipExample() {
  return (
    <div className="flex gap-3">
      <Tooltip position="top">
        <Tooltip.Hover>
          <Button variant="default" rounded="md">Top</Button>
        </Tooltip.Hover>
        <Tooltip.Content rounded="md" variant="red">Hello World!</Tooltip.Content>
      </Tooltip>
      <Tooltip position="bottom">
        <Tooltip.Hover>
          <Button variant="default" rounded="md">Bottom</Button>
        </Tooltip.Hover>
        <Tooltip.Content rounded="md" variant="red">Hello World!</Tooltip.Content>
      </Tooltip>

    </div>
  )
}