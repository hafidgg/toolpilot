export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="mt-8 flex items-center justify-center h-48 px-6 text-center">
      <p className="text-sm text-faint max-w-[240px] leading-relaxed">{message}</p>
    </div>
  );
}
