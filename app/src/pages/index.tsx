import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Water Monster</title>
        <meta name="description" content="Generated by Water Monster" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-7xl mx-auto px-4">
        <Header />
        <Hero />
      </main>
    </>
  );
}
