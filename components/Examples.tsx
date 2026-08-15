export interface ExampleItem {
  title: string;
  description?: string;
  input?: string;
  output?: string;
}

export default function Examples({ items }: { items: ExampleItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div key={i} className="bg-raised border border-line-soft rounded-md p-4">
          <div className="text-sm font-semibold text-ink mb-1.5">{item.title}</div>
          {item.description && (
            <p className="text-xs text-muted leading-relaxed">{item.description}</p>
          )}
          {item.input && (
            <div className="mt-3 space-y-2">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-faint mb-1">Input</div>
                <div className="font-mono text-xs text-muted bg-base border border-line-soft rounded px-2 py-1.5 break-all">
                  {item.input}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-faint mb-1">Output</div>
                <div className="font-mono text-xs text-accent bg-base border border-line-soft rounded px-2 py-1.5 break-all">
                  {item.output}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
