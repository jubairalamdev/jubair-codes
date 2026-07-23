export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  rows,
  error,
  ...props
}) {
  const base =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-black placeholder:text-secondary/50 transition-colors focus:border-primary focus:outline-none";
  const errorStyles = error ? "border-error" : "";

  if (type === "textarea") {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={name} className="text-sm font-medium text-black">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
        <textarea
          id={name}
          name={name}
          rows={rows || 4}
          placeholder={placeholder}
          required={required}
          className={`${base} ${errorStyles} resize-none`}
          {...props}
        />
        {error && <span className="text-xs text-error">{error}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-black">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`${base} ${errorStyles}`}
        {...props}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
}
