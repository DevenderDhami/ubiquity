"use client";

import PageLinks from "@/components/common/pageLink";
import { ourRecognitions } from "@/lib/constants";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const AwardsAndApprovalsPage = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  useEffect(() => {
    if (selectedPdf) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedPdf]);

  return (
    <>
      <PageLinks
        title="Our Awards And Approvals"
        imageUrl="/assets/pagelinks/approval.webp"
        items={[
          { name: "Home", link: "/" },
          {
            name: "Our Approvals",
            link: "/approvals-and-collabrations/awards-and-approvals",
          },
        ]}
      />

      <div className="container mx-auto py-8 px-5">
        {/* <div className="approvals">
          <h2 className="text-4xl theme-clr font-bold mb-4 pl-6">
            Our Approvals & Certificates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 pb-10">
            {approvals?.map((doc, index) => (
              <div
                key={index}
                className="border p-2 rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-white text-center transition-all"
                onClick={() => setSelectedPdf(doc.url)}
              >
                <div className="flex items-center justify-center rounded-lg ">
                  <img src={doc?.logo} alt="PDF Thumbnail" className=" h-32" />
                </div>
                <p className="mt-2 theme-clr text-lg font-semibold">
                  {doc.name}
                </p>
                <p className="mt-2 text-blue-600 font-semibold">
                  View Certificate
                </p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="certificates">
          <h2 className="text-4xl theme-clr font-bold mb-4 pl-6">
            Our Recogitions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 pb-10">
            {ourRecognitions?.map((doc, index) => (
              <div
                key={index}
                className="border p-2 rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-white text-center transition-all"
                onClick={() => setSelectedPdf(doc.url)}
              >
                <div className="flex items-center justify-center rounded-lg ">
                  {/* {doc?.logo ? (
                    <img
                      src={doc?.logo}
                      alt="PDF Thumbnail"
                      className=" h-32"
                    />
                  ) : (
                  )} */}
                  <FaFilePdf className="text-red-500 text-5xl" />

                </div>
                <p className="mt-2 theme-clr text-lg font-semibold">
                  {doc.name}
                </p>
                <p className="mt-2 text-blue-600 font-semibold">
                  View 
                  
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="bg-gray-900 pt-5 rounded-lg w-full max-w-4xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute -top-1 right-3 text-red hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {/* PDF Viewer */}
            <iframe
              src={selectedPdf}
              className="w-full h-[90vh] rounded-lg border-none"
              title="PDF Preview"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default AwardsAndApprovalsPage;
