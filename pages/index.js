import Head from "next/head";
import Image from "next/image";
import lucerne from "../public/lucerne.svg";
import mamoudzou from "../public/mamoudzou.svg";
import more from "../public/more.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cityverse</title>
        <meta
          name="description"
          content="10,000 cities permanently stored on the blockchain. Connecting people across the globe, bridging the gap caused by geography and epidemics. Feel free to travel between cities, building the Cityverse."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <nav className="p-6">
          <div className="text-3xl font-bold md:pl-24 md:ml-1">Cityverse</div>
        </nav>

        <section className="text-center p-6">
          <div className="p-6">
            <h2 className="text-6xl font-bold">Cityverse</h2>
          </div>

          <ul className="flex space-x-6 max-w-min mx-auto p-6">
            <li className="flex-1">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Opensea
              </a>
            </li>
            <li className="flex-1">
              <a
                href="https://discord.gg/GyuhvscffE"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
            <li className="flex-1">
              <a
                href="https://twitter.com/CityverseHQ"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li className="flex-1">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Contract
              </a>
            </li>
          </ul>

          <p className="p-6 text-gray-500">
            10,000 cities permanently stored on the blockchain.
            <br />
            Connecting people across the globe, bridging the gap caused by
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
                src={lucerne}
                alt="Cityverse Lucerne"
              />
            </li>
            <li className="p-2">
              <Image
                width={280}
                height={280}
                src={mamoudzou}
                alt="Cityverse Mamoudzou"
              />
            </li>
            <li className="p-2">
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  width={280}
                  height={280}
                  src={more}
                  alt="You can go to Opensea to view more Cityverse NFTs"
                />
              </a>
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
