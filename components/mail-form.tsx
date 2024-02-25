import { Input, Button, Textarea } from "@nextui-org/react";
import { useState, FormEvent } from "react";

export default function MailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const user = {
      email,
      name,
      text,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(user),
    });
    const data = await response.json();
    setIsLoading(false);
    setIsSubscribed(true);
  }

  return (
    <form
      className="flex flex-col items-center gap-4 md:gap-8 justify-center p-4 py-12"
      id="contact"
      onSubmit={onSubmit}
    >
      <div className="w-3/5">
        <h1 className="md:text-xl lg:text-4xl font-light text-foreground-800">
          Let's Work Together
        </h1>
        <p className="text-md pl-4 font-light">
          Looking for someone who can deliver fast, effective programming
          services? Look no further. You can pick me with an assurance of honest
          and practical solutions
        </p>
      </div>
      <div className="flex flex-wrap gap-2 w-full max-w-lg">
        <div className="flex gap-4 w-full">
          <Input
            isRequired
            type="email"
            variant="faded"
            className="w-full max-w-lg"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            isRequired
            type="text"
            variant="faded"
            className="w-full max-w-lg"
            label="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Textarea
          isRequired
          label="Pregunta"
          variant="faded"
          placeholder="Ingrese pregunta"
          className="w-full max-w-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          className="w-full"
          type="submit"
          variant="faded"
          isLoading={isLoading}
          disabled={isLoading || isSubscribed}
        >
          {isSubscribed ? "Enviado !" : "Enviar"}
        </Button>
      </div>
    </form>
  );
}
