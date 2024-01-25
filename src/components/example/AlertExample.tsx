import Alert from "@/components/neobruu/Alert";
import { BsInfoCircleFill, BsExclamationTriangleFill } from "react-icons/bs";

export default function AlertExample() {
    return (
      <div className="w-full flex flex-col gap-3">
        <Alert icon={<BsExclamationTriangleFill/>} variant="primary" rounded="none">Warning Alert</Alert>
        <Alert icon={<BsExclamationTriangleFill/>} variant="secondary" rounded="lg">Danger Alert</Alert>
        <Alert icon={<BsInfoCircleFill/>} variant="blue" rounded="full">Information Alert</Alert>
      </div>
    )
  }