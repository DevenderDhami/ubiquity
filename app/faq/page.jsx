"use client";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import React from "react";
import { Disclosure } from "@headlessui/react";
// import faq_img from "@/public/assets/faqs/19333428.jpg";
import Image from "next/image";
import PageLinks from "@/components/common/pageLink";

const FaqPage = () => {
  const faqData = [
    {
      question: "What is ubiquity?",
      answer:
        "Ubiquity is a company dedicated to enhancing digital literacy and providing advanced computer education through innovative programs and services.",
    },
    {
      question: "How can I join ubiquity?",
      answer:
        "You can join ubiquity by filling out the affiliation form on our website and making the required payment.",
    },
    {
      question: "What we do?",
      answer:
        "At ubiquity, we focus on mobilizing, training, and placing candidates, equipping them with essential skills for meaningful employment.",
    },
    {
      question: "How can I contact ubiquity?",
      answer:
        "You can contact us via email. Our office is located at IGCSM, 36B/1, Gali Number 1, near Kalkaji Depot, Govindpuri, New Delhi, Delhi 110019",
    },
  ];

  return (
    <>
      <PageLinks
        title="FAQ"
        imageUrl="/assets/pagelinks/faq.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "FAQ", link: "/faq" },
        ]}
      />
      <div className="container mx-auto mt-10 p-6">
        <h1 className="text-3xl font-semibold text-center text-black mb-8">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2">
            <div className="space-y-4 bg-green-50 p-5">
              {faqData.map((faq, index) => (
                <Disclosure
                  key={index}
                  as="div"
                  className="border-b border-gray-300"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between items-center w-full p-4 text-left text-md font-medium text-black focus:outline-none">
                        <span>{faq.question}</span>
                        {open ? (
                          <FaChevronUp className="h-6 w-6 text-gray-600" />
                        ) : (
                          <FaChevronDown className="h-6 w-6 text-gray-600" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="p-4 text-gray-700 bg-gray-50">
                        {faq.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* <Image
              src={faq_img}
              width={400}
              height={400}
              alt="FAQ Illustration"
              className="w-full object-cover"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
