export interface HowToStep {
  text: string;
}

export default function HowToUse({ steps }: { steps: HowToStep[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft border border-accent-dim font-mono text-[11px] text-accent">
            {i + 1}
          </span>
          <span className="text-sm text-muted leading-relaxed pt-0.5">{step.text}</span>
        </li>
      ))}
    </ol>
  );
}
