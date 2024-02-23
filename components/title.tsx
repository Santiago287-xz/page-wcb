import { Divider } from "@nextui-org/react";

export default function CategoryTitle({ text }: { text: string }) {
  return (
    <div className="w-4/5 mb-8">
      <h1 className="text-6xl text-center p-4 pt-8 font-light">{text}</h1> <Divider />
    </div>
  );
}
