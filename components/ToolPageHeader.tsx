import Breadcrumbs from "@/components/Breadcrumbs";

export default function ToolPageHeader({
  category,
  categoryHref,
  title,
  children,
}: {
  category: string;
  categoryHref: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <Breadcrumbs items={[{ label: category, href: categoryHref }, { label: title }]} />
      <span className="eyebrow">{category}</span>
      <h1 className="h1-page mt-3">{title}</h1>
      <p className="mt-4 text-muted leading-relaxed">{children}</p>
    </div>
  );
}
