import Avatar from "@/components/neobruu/Avatar";

export default function AvatarExample() {
  return (
    <div className="flex gap-3">
      <Avatar src="/aiko.jpeg" alt="avatar" rounded="none" />
      <Avatar src="/aiko.jpeg" alt="avatar" rounded="lg" />
      <Avatar src="/aiko.jpeg" alt="avatar" rounded="full" />
    </div>
  );
}
