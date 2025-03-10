"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AchievementsSection from "@/components/common/AchievementsSection";
import PageLinks from "@/components/common/pageLink";
import useRandomImages from "@/lib/hooks/useRandomImages";
import { ourExpertiesImages } from "@/lib/constants";

const AboutUsPage = () => {
  const { images, loading, error } = useRandomImages(ourExpertiesImages);

  return (
    <>
      <PageLinks
        title="About Ubiquity"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "About Ubiquity", link: "/about-us" },
        ]}
      />
      <div className="container mx-auto py-8 px-4 md:px-8">
        <h3 className="theme-clr font-bold text-4xl">About Ubiquity</h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center py-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="indent-10 flex flex-col gap-2 h-full text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              {`
     Ubiquity is committed to empowering individuals in rural areas by bridging the gap between education and industry requirements. Our mission is to equip aspiring professionals in underserved communities with practical, job-ready skills that align with the evolving job market. Through comprehensive training programs, strategic industry partnerships, and innovative learning solutions, we strive to create opportunities for employment and entrepreneurship in rural regions.
    `}
            </p>
            <p>
              {`
     Driven by a commitment to excellence, we strive to transform careers, nurture entrepreneurship, and stimulate economic growth in rural communities through skill-based education.
    `}
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center w-full order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {loading ? (
              <></>
            ) : (
              <Image
                src={images?.firstImage}
                width={800}
                height={450}
                alt="About Us"
                className="w-full max-h-[300px] h-auto rounded-lg object-cover"
              />
            )}
          </motion.div>

          <motion.div
            className="flex flex-col gap-2 indent-10 h-full text-gray-700 order-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              {`By collaborating with local industries and experts, we provide real-world insights that empower learners to stay competitive in an ever-evolving economy. Whether individuals seek to refine their skills or explore new career paths, Ubiquity offers the training and support needed to succeed.`}
            </p>
            <p>
              {`
             Join us in building a future where skill development in rural areas unlocks endless opportunities, empowering individuals and fostering sustainable economic growth in their communities.
            `}
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center w-full order-4 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {loading ? (
              <></>
            ) : (
              <Image
                src={images?.secondImage}
                width={800}
                height={450}
                alt="Our Work"
                className="w-full max-h-[300px] h-auto rounded-lg object-cover"
              />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="py-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AchievementsSection />
        </motion.div>
      </div>
    </>
  );
};

export default AboutUsPage;
