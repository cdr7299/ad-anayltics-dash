import Image from "next/image";
import advertiser_data from "./_data/advertiser_data.json";
import country_data from "./_data/country_data.json";
import Sidebar from "./_components/sidebar/sidebar";
import Navbar from "./_components/navbar/navbar";
import Charts from "./_components/charts/charts";

export default async function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow ml-64 relative">
        <Navbar />
        <Charts />
      </main>
    </div>
  );
}
