export function AdPlaceholder({ title }: { title: string }) {
  return (
    <div className="card border-dashed border-accent/40 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">AdSense / Banner Slot</p>
      <p className="mt-2 text-sm text-muted">{title}</p>
    </div>
  );
}
