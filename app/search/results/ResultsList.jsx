"use client";
import React from "react";
import InfoCard from "../components/InfoCard";
import { useSearchStore } from "@/store";

export const ResultsList = ({ data }) => {
  const searchLocation = useSearchStore((state) => state.location);

  const filteredListings =
    searchLocation === ""
      ? data
      : data.filter((listing) =>
          listing.name.toLowerCase().includes(searchLocation)
        );

  return (
    <div className="flex max-width-full justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 mt-4 place-items-center">
        {filteredListings.map((listing) => (
          <InfoCard listing={listing} key={listing.id} />
        ))}
      </div>
    </div>
  );
};
