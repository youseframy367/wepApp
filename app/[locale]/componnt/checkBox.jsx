"use client";

export default function ImageCheckbox({
  checked,
  onChange,
  name,
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
          className="w-[40px] h-[40px]"
        />
      ) : (
        <div className="w-[30px] h-[30px] min-w-[30px] min-h-[30px] border border-gray-400 rounded-md" />
      )}
    </label>
  );
}