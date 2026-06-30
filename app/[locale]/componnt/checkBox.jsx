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
          className="md:w-[60px] md:h-[60px] w-[70px] h-[70px] "
        />
      ) : (
        <div className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] md:mx-[18px] mx-[10px] border border-gray-400 rounded-md" />
      )}
    </label>
  );
}