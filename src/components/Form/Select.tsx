import { useEffect, useRef, useState } from "react";

// Icon
import { ArrowDownIcon } from "../../../public/icons";

// Components
import { FieldBase } from "./FieldBase";

interface SelectProps {
  id: string;
  title: string;
  options: {
    value: string;
    label: string;
  }[];
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  placeholder?: string;
}

export function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOptionLabel = props.options.find(
    (option) => option.value === props.selectedOption
  )?.label;

  return (
    <FieldBase id={props.id} title={props.title}>
      <div className="relative" ref={dropdownRef}>
        <button
          className="w-full bg-white rounded-lg border border-gray text-black text-left text-lg font-medium py-2 px-4 flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOptionLabel || props.placeholder}</span>
          <ArrowDownIcon
            width={16}
            height={9}
            fill="black"
            className={`${
              isOpen ? "rotate-180" : ""
            } transition-all duration-200`}
          />
        </button>
        {isOpen && (
          <div className="absolute w-full bg-white rounded-lg border border-gray text-black text-lg font-medium mt-1 shadow-lg">
            {props.options.map((option) => (
              <button
                key={option.value}
                className="w-full text-left hover:bg-lightGrey p-2"
                onClick={() => {
                  props.setSelectedOption(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </FieldBase>
  );
}
