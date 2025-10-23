import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-screen w-screen flex-col gap-4 items-center justify-center">
      <h1>Welcome to Dev Town</h1>
      <Button>Click me</Button>
    </div>
  );
}
