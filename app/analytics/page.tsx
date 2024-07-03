import Charts from "./_components/charts/charts";

export default async function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="relative flex-grow">
        <Charts />
      </main>
    </div>
  );
}
