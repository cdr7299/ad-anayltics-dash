import Button from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full gap-8 flex-col">
        <h1 className="text-4xl text-center font-bold">
          {`Welcome to`}
          <span className="text-primary ml-2">Advertiser Analytics</span>
        </h1>
        <Button>Go to Analytics Home</Button>
      </div>
    </div>
  );
}
