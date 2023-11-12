import PageCard from "@/components/cards/PageCard";
import CommitLink from "@/components/links/CommitLink";
import fs from "fs/promises";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const HEAD = await fs.readFile(".git/modules/vendor/suroi/HEAD", "utf8");

  return (
    <main>
      <div className="prose prose-invert">
        <h1>Suroi Autogenerated Wiki</h1>
        <div className="flex justify-center">
          <Image
            src="/img/suroi.svg"
            alt="Suroi Battle Royale"
            width={750 / 2}
            height={300 / 2}
          />
        </div>
        <div className="p-2 rounded-lg bg-secondary">
          <p>
            <b>Note:</b> This wiki is unofficial and community run!
          </p>
        </div>
        <p>
          Welcome to the Suroi Autogenerated Wiki! This wiki provides basic
          statistics about items{" "}
          <a href="https://suroi.io" target="_blank">
            suroi.io
          </a>
          . This wiki is open-source and community run. Feel free to contribute
          at{" "}
          <a href="https://github.com/Compositr/suroiautowiki" target="_blank">
            the GitHub repo
          </a>
          .
        </p>
        <p>
          Based off <span className="font-mono">vendor/suroi</span> commit{" "}
          <CommitLink sha={HEAD} />.
        </p>
        <h2>Notable Pages</h2>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 mt-8">
        <PageCard
          title="Weapons"
          url="/weapons"
          image="https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/weapons/ak47.svg"
          description="List of all weapons in the game"
        />
        <PageCard
          title="Healing Items"
          url="/healing"
          image="https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/medikit.svg"
          description="List of healing items"
        />
        <PageCard
          title="Loot Tables"
          url="/loot"
          image="https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/obstacles/flint_crate.svg"
          description="Loot drop rates"
        />
        <PageCard
          title="Armor"
          url="/loot"
          image="https://raw.githubusercontent.com/HasangerGames/suroi/master/client/public/img/game/loot/vest_2.svg"
          description="List of armor in the game including helmets and vests"
        />
      </div>
    </main>
  );
}
