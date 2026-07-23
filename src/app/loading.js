export default function Loading() {
  return (
    <div className="flex flex-col gap-6 p-6 animate-pulse">
      <div className="h-96 rounded-3xl bg-border" />
      <div className="h-64 rounded-3xl bg-border" />
      <div className="h-64 rounded-3xl bg-border" />
    </div>
  );
}
