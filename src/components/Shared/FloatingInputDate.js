import { useEffect, useState } from "react";

const FloatingInputDate = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  onFocus,
  max,
  min,
}) => {
  const [isFocused, setIsFocused] = useState(true);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur(e) {
    if (e.target.value.length === 0) {
      setIsFocused(true);
    }
  }


  return (
    <div className="floating-input-view">
      {label && <label htmlFor="input">{label}</label>}
      <p className="placeholder slide-up">
        {placeholder}
      </p>
      <input
        className="floating-input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value || ""}
        type={type || "text"}
        name={name}
        min={min}
        max={max}
      ></input>
    </div>
  );
};

export default FloatingInputDate;
