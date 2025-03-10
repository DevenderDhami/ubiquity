"use client";
import React from "react";
import Image from "next/image";
import PageLinks from "@/components/common/pageLink";
import { ourTeamData } from "@/data/ourTeamData";

const OurTeamPage = () => {
  return (
    <>
      <PageLinks
        title="Our Team"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Our Team", link: "/our-team" },
        ]}
      />
      <div className="container mx-auto px-4 py-5">
        <h4 className="theme-clr text-4xl font-bold text-start pl-6 pb-5">
          Our Team
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {ourTeamData?.map((member, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-2xl shadow-lg overflow-hidden text-center flex flex-col"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>

              <div className="py-4 flex-grow flex flex-col justify-center">
                <h3 className="text-md font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeamPage;
