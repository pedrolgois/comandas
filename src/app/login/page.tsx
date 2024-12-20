"use client";
import { useState } from "react";
import Image from "next/image";

// Components
import { Button } from "@/components/Button";
import { Select } from "@/components/Form/Select";
import { TextInput } from "@/components/Form/TextInput";

// Logo
import Logo from "../../../public/imgs/Logo.png";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState({
    operador: "caixa",
    senha: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/");
  }

  return (
    <main className="bg-red-pattern bg-contain">
      <div className="bg-system-white w-full max-w-[400px] flex flex-col items-center justify-center h-screen shadow-2xl">
        <Image
          src={Logo}
          alt="Logotipo bar do pedrinho"
          className="w-[200px] mb-6"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[300px] flex flex-col gap-6 items-center"
        >
          <Select
            id="operador-select"
            title="Operador"
            options={[
              { value: "caixa", label: "Caixa" },
              { value: "garcom", label: "Garçom" },
              { value: "gerente", label: "Gerente" },
            ]}
            selectedOption={loginForm.operador}
            setSelectedOption={(value) =>
              setLoginForm({ ...loginForm, operador: value })
            }
          />
          <TextInput
            id="senha"
            title="Senha"
            type="password"
            placeholder="********"
            value={loginForm.senha}
            onChange={(event) =>
              setLoginForm({ ...loginForm, senha: event.target.value })
            }
          />
          <Button type="submit" disabled={!loginForm.senha}>
            Acessar
          </Button>
        </form>
      </div>
    </main>
  );
}
