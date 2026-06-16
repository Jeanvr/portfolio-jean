import type { Metadata } from "next";
import TerminalSection from "@/components/TerminalSection";

export const metadata: Metadata = {
  title: "Jean OS Terminal",
  description:
    "Interactive Jean OS terminal for Jean Carlo Vega's portfolio, focused on automation, Linux, databases and real projects.",
};

export default function TerminalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.14),transparent_22%),linear-gradient(180deg,#f8fafc_0%,#eef8ff_55%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.18),transparent_22%),linear-gradient(180deg,#07111f_0%,#0b1729_55%,#08111d_100%)]" />
      <TerminalSection />
    </main>
  );
}
