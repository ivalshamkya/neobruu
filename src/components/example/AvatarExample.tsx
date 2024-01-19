import Avatar from "@/components/neobruu/Avatar";

export default function AvatarExample() {
    return (
      <div className="flex gap-3">
        <Avatar src="https://picsum.photos/200" alt="avatar" rounded="none" />
        <Avatar src="https://picsum.photos/200" alt="avatar" rounded="lg" />
        <Avatar src="https://picsum.photos/200" alt="avatar" rounded="full" />
      </div>
    )
  }