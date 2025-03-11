"use client";
import React, { useState } from "react";
import PageLinks from "@/components/common/pageLink";
const GovernmentPartnersPage = () => {
  return (
    <>
      <PageLinks
        title="Government Partners "
        imageUrl="/assets/pagelinks/partnership.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Government Partners",
            link: "/awards-and-recognitions/government-partnership",
          },
        ]}
      />

      <div className="container mx-auto py-8 px-10 flex flex-col gap-5 ">
        <h2 className="text-4xl theme-clr font-bold">Government Partnership</h2>
        <div className="flex flex-col md:flex-row">
          <div className="content w-full md:w-2/3">
            <p className="text-gray-600 indent-10">
              {`
          Our partnerships with government agencies are a cornerstone of our
          mission to uplift rural communities through skill development. By
          collaborating with central and state governments, we align our
          training programs with national initiatives like Skill India, PMKVY
          (Pradhan Mantri Kaushal Vikas Yojana), and other rural employment
          schemes. These collaborations allow us to bring structured vocational
          education, industry-relevant certifications, and sustainable
          employment solutions to remote areas where opportunities are scarce.
          `}
            </p>

            <p className="text-gray-600 indent-10 pt-4">
              {`
          Government support also enables us to build training centers, provide
          stipends for learners, and develop infrastructure that supports
          skill-building in rural regions. By working hand-in-hand with
          policymakers, we ensure that our initiatives reach those who need them
          the most, empowering women, youth, and marginalized communities with
          the skills necessary to secure stable jobs. Through these
          collaborations, we are not only creating employment but also
          contributing to India’s vision of an inclusive and self-reliant
          workforce.
          `}
            </p>
          </div>
          <div className=" flex justify-center order-4  md:order-2">
            {/* <Image
              src={govImg}
              width={400}
              height={250}
              alt="Our Work"
              className="w-full max-w-[400px] h-auto rounded-lg object-cover"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GovernmentPartnersPage;
