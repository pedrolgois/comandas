import { FieldBase } from "./FieldBase";

interface InputProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  type?: "text" | "password";
  placeholder?: string;
}

export function TextInput(props: InputProps) {
  return (
    <FieldBase id={props.id} title={props.title}>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={(event) => props.onChange(event)}
        placeholder={props.placeholder}
        className="w-full bg-white rounded-lg border border-gray text-black text-lg font-medium py-2 px-4"
      />
    </FieldBase>
  );
}
