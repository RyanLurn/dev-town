import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <h1 className="bg-red-500 text-white p-4">Welcome to Dev Town</h1>;
}
