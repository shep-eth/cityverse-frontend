import Head from "next/head";
import Image from "next/image";
import venice from "../public/venice.svg";
import tokyo from "../public/tokyo.svg";
import more from "../public/more.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cityverse</title>
        <meta
          name="description"
          content="10,000 cities permanently stored on the blockchain. Connecting people across the globe, bridging the gap between geography and epidemics. Feel free to travel between cities, building the Cityverse."
        />
      </Head>

      <main className="max-w-6xl mx-auto">
        <nav className="p-6">
          <div className="text-3xl font-bold">Cityverse</div>
        </nav>

        <section className="text-center p-6">
          <div className="p-6">
            <h2 className="text-6xl font-bold">Cityverse</h2>
          </div>

          <ul className="flex space-x-6 max-w-min mx-auto p-6">
            <li className="flex-1">
              <a href="#" target="_blank" className="hover:underline">
                Opensea
              </a>
            </li>
            <li className="flex-1">
              <a href="#" target="_blank" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="flex-1">
              <a href="#" target="_blank" className="hover:underline">
                Contract
              </a>
            </li>
          </ul>

          <p className="p-6 text-gray-500">
            10,000 cities permanently stored on the blockchain.
            <br />
            Connecting people across the globe, bridging the gap between
            geography and epidemics.
            <br />
            Feel free to travel between cities, building the Cityverse.
          </p>

          <p className="mt-10 text-gray-500">Example Cities</p>

          <ul className="p-6 md:flex md:justify-center md:space-x-4">
            <li className="p-2">
              <Image
                width={280}
                height={280}
                src={venice}
                alt="Cityverse Venice"
              />
            </li>
            <li className="p-2">
              <Image
                width={280}
                height={280}
                src={tokyo}
                alt="Cityverse Tokyo"
              />
            </li>
            <li className="p-2">
              <Image
                width={280}
                height={280}
                src={more}
                alt="You can go to Opensea to view more Cityverse NFTs"
              />
            </li>
          </ul>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto text-center p-12 text-gray-500">
        <p>Built by a global team with ❤️</p>
      </footer>
    </>
  );
}
