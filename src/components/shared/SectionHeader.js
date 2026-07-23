export default function SectionHeader({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      {Icon ? (
        <Icon className="text-lg text-black" />
      ) : (
        <span className="h-2 w-2 rounded-full bg-black" />
      )}
      <h2 className="text-sm font-medium text-black uppercase tracking-wider font-heading">
        {title}
      </h2>
      <div className="flex-1 border-t border-dashed border-black/70" />
    </div>
  );
}
