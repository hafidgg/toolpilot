import Link from "next/link";

export default function RelatedGuide({
  href,
  title,
  type = "article",
}: {
  href: string;
  title: string;
  type?: "article" | "guide";
}) {
  return (
    <Link
      href={href}
      className="panel panel-interactive flex items-center justify-between p-4"
    >
      <div>
        <div className="text-[11px] uppercase tracking-wider text-faint mb-1">
          {type === "article" ? "Related article" : "Related guide"}
        </div>
        <div className="text-sm font-semibold text-ink">{title}</div>
      </div>
      <span className="text-faint">→</span>
    </Link>
  );
}
