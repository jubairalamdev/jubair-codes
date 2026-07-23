export default function Badge({ children, icon: Icon, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-secondary ${className}`}
    >
      {Icon && <Icon className="text-xs" />}
      {children}
    </span>
  );
}
