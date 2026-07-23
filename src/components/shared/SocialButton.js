export default function SocialButton({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-secondary hover:text-black"
    >
      <Icon className="text-base" />
    </a>
  );
}
