"use client";
import type { ChangeEvent } from "react";
interface ImageCheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  imgClassName?: string;
  className?: string;
}
export default function ImageCheckbox({
  checked = false,
  onChange = () => { },
  name,
  imgClassName = "w-[25px] h-[25px]",
  className = "",
}: ImageCheckboxProps) {
  return (
    <label className={`cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        name={name}
        className="hidden"
      />

      {checked ? (
        <img
          src="/imge/checkBox.svg"
          alt="checked"
          className={imgClassName}
        />
      ) : (
        <div
          className={`${imgClassName} border border-gray-400 rounded-[3px]`}
        />
      )}
    </label>
  );
}