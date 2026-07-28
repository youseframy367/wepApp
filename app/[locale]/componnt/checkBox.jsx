"use client";

export default function ImageCheckbox({
  checked = false,
  onChange = () => {},
  name,
  imgClassName = "w-[25px] h-[25px]", 
  className = "",
}) {
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