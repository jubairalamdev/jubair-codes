export default function Badge({ children, icon: Icon, iconColor, className = "" }) {
  return (
    <span
      className={`group inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-subtle px-3 py-1 text-xs font-heading text-secondary transition-all duration-200 hover:scale-105 hover:bg-black hover:text-white ${className}`}
    >
      {Icon && (
        <span
          className="[&>svg]:text-[var(--icon-color)] group-hover:[&>svg]:text-white"
          style={{ "--icon-color": iconColor || "var(--color-accent)" }}
        >
          <Icon className="text-lg transition-colors duration-200" />
        </span>
      )}
      {children}
    </span>
  );
}
