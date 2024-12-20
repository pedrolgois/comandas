interface FieldBaseProps {
  id: string;
  children: React.ReactNode;
  title?: string;
}

export function FieldBase({ id, children, title }: FieldBaseProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="text-lg font-bold text-black">
        {title}
      </label>
      {children}
    </div>
  );
}
