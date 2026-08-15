import TrackToolVisit from "@/components/TrackToolVisit";

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TrackToolVisit />
      {children}
    </>
  );
}
