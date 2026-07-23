export default function ContactCard({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl border border-border px-5 py-4 transition-colors hover:border-secondary">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-accent">
        <Icon className="text-lg" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-medium text-secondary uppercase tracking-wider">
          {label}
        </span>
        <span className="text-sm text-black">{value}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
