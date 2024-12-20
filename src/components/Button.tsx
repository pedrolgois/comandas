interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  color?: string;
}

export function Button({
  children,
  type = "button",
  disabled = false,
  color = "green",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-system-${color} text-system-white text-lg font-bold py-2 px-8 rounded-3xl transition-all duration-200 cursor-pointer hover:bg-system-dark${
        color.charAt(0).toUpperCase() + color.slice(1)
      } disabled:bg-system-grey3 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
