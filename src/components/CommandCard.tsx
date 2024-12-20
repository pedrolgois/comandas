import { OrderIcon, UserIcon } from "../../public/icons";

interface CommandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  status: "active" | "available";
  title: string;
  client?: string;
}

export function CommandCard(props: CommandCardProps) {
  const bgColor = props.status === "active" ? "red" : "lightGrey";
  const textColor = props.status === "active" ? "white" : "black";
  return (
    <div
      className={`cursor-pointer rounded-lg border border-system-grey shadow-md bg-system-${bgColor} overflow-hidden hover:scale-95 transition-all duration-200 min-w-[240px] max-w-[260px]`}
      {...props}
    >
      <div className="flex gap-4 p-4 items-start">
        <div
          className={`rounded-full p-1 h-16 w-16 grid place-items-center ${
            props.status === "active" ? "bg-system-darkRed" : "bg-system-grey2"
          }`}
        >
          <OrderIcon />
        </div>
        <div>
          <span className={`text-2xl font-bold text-system-${textColor}`}>
            {props.title}
          </span>
          {props.client && (
            <div className="flex gap-1 text-white">
              <UserIcon className={`fill-transparent`} />
              <span>{props.client}</span>
            </div>
          )}
        </div>
      </div>
      <div
        className={`h-8 flex items-center justify-center ${
          props.status == "active" ? "bg-system-darkRed" : "bg-system-grey2"
        }`}
      />
    </div>
  );
}
