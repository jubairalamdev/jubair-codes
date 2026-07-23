export default function Button({
  children,
  variant = "primary",
  href,
  icon: Icon,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-accent text-white hover:bg-accent-hover",
    outline:
      "border border-border text-secondary hover:border-secondary hover:text-black",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {Icon && <Icon className="text-base" />}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {Icon && <Icon className="text-base" />}
      {children}
    </button>
  );
}
