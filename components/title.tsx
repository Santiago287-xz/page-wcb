import { Divider } from "@nextui-org/react";

export default function CategoryTitle({
  text,
  description,
}: {
  text: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="text-5xl text-foreground text-center p-3 pt-8 font-light">
        {text}
      </h1>
      <h4 className="text-md text-foreground/80 text-center pb-4 font-light">
        {description}
      </h4>
      <Divider />
    </div>
  );
}
