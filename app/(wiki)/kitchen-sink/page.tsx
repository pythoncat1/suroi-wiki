"use client";
// A component testing page

import Gallery from "@/components/articles/gallery/Gallery";
import DevWeapon from "@/components/articles/notices/DevWeapon";
import Empty from "@/components/articles/notices/Empty";
import Event from "@/components/articles/notices/Event";
import Removed from "@/components/articles/notices/Removed";
import Stub from "@/components/articles/notices/Stub";
import PlayerWearingEquipment from "@/components/svg/special/PlayerWearingEquipment";
import MatrixTable from "@/components/tables/MatrixTable";
import TableWithHeader from "@/components/tables/TableWithHeader";
import { getSuroiImageLink, getSuroiItem } from "@/lib/util/suroi";
import { Guns } from "@/vendor/suroi/common/src/definitions/guns";
import Collapsible from "@/components/interactive/Collapsible";

export default function Kitchen() {
  return (
    <div className="block col-span-full">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/0tOXxuLcaog"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <TableWithHeader
        header={["silly", "cat", "bleh"]}
        content={[
          ["milly", "cat", "uwu"],
          ["bleh", ":3", "silly"],
        ]}
      />
      <MatrixTable
        tHeader={["1", "2", "3"]}
        lHeader={["4", "5", "6"]}
        content={[
          ["1", "2", "3"],
          ["1", "2", "3"],
          ["1", "2", "3"],
        ]}
      />
      <PlayerWearingEquipment />
      <DevWeapon />
      <Empty />
      <Event />
      <Removed />
      <Stub />
      <Gallery
        images={[
          ...Guns.map((gun) => ({
            url: getSuroiImageLink(gun),
            caption: gun.name,
            author: gun.idString,
          })),
        ]}
      />
      <Collapsible label={"Collapsible block"}>
        <p>Hello! You can show or hide me!</p>
      </Collapsible>
    </div>
  );
}
