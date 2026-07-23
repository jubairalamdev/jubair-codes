export default function Badge({ children, icon: Icon, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-subtle px-3.5 py-1.5 text-xs text-secondary font-heading ${className}`}
    >
      {Icon && <Icon className="text-sm text-accent" />}
      {children}
    </span>
  );
}
