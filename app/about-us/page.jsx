"use client";
import React from "react";
import PageLinks from "@/components/common/pageLink";

const AboutUsPage = () => {
  // const { images, loading, error } = useRandomImages(ourExpertiesImages);
  return (
    <>
      <PageLinks
        title="About Ubiquity"
        // imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "About Ubiquity", link: "/about-us" },
        ]}
      />
      <div className="container mx-auto py-8 px-4 md:px-8">
        <h3 className="theme-clr  font-bold text-4xl"> About Ubiquity</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center py-5">
          <div className="indent-10 flex flex-col gap-2 h-full text-gray-700  ">
            <p>
              {`
      Ubiquity is dedicated to empowering individuals in rural areas by
      bridging the gap between education and industry needs. Our mission
      is to provide aspiring professionals in underserved communities
      with practical, job-ready skills that align with the demands of
      today's job market. Through comprehensive training programs,
      industry collaborations, and innovative learning solutions, we aim
      to create pathways to employment and entrepreneurship in rural
      regions.
    `}
            </p>
            <p>
              {`
      With a strong commitment to excellence, we focus on transforming
      careers, fostering entrepreneurship, and driving economic growth
      in rural communities through skill-based education.
    `}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
