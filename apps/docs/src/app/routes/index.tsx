import { HeroSection } from "@features/home";
import { generatedMetadata } from "@shared/libs/shared-metadata";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: generatedMetadata({
      title: "Beautifully Crafted React Email Templates & Blocks | Mailo",
      description:
        "Open source project that crafted beautiful predesign react email templates & blocks to ship email feature faster",
    }),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col">
      <HeroSection />
    </main>
  );
}
