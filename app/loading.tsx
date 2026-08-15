export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 animate-pulse">
      <div className="max-w-2xl">
        <div className="h-3 w-24 bg-raised rounded" />
        <div className="mt-4 h-9 w-3/4 bg-raised rounded" />
        <div className="mt-4 h-4 w-full bg-raised rounded" />
        <div className="mt-2 h-4 w-2/3 bg-raised rounded" />
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="h-64 bg-surface border border-line rounded-lg" />
        <div className="h-64 bg-surface border border-line rounded-lg" />
      </div>
    </div>
  );
}
