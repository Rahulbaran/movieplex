import useMeta from "../hooks/useMeta";

export default function NotFound() {
  useMeta({ title: "Not Found | Movieplex", description: "" });

  return (
    <main className="container not-found-container">
      <h1>Page Not Found</h1>
    </main>
  );
}
