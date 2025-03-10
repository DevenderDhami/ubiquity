"use client";
import PageLinks from "@/components/common/pageLink";
import { projectsData } from "@/data/projectsData";
import React, { useState } from "react";

const OurProjectsPage = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 11;

  const financialYears = [
    "All",
    ...projectsData?.financialYears.map((fy) => fy.financialYear),
  ];

  // Filter records based on selected financial year
  const filteredData =
    selectedYear === "All"
      ? projectsData.financialYears.flatMap((fy) => fy.trainingPartners)
      : projectsData.financialYears.find(
          (fy) => fy.financialYear === selectedYear
        )?.trainingPartners || [];

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  // Calculate totals for numeric columns
  const totals = filteredData.reduce(
    (acc, tp) => {
      acc.batches += tp.batches;
      acc.enrolled += tp.enrolled;
      acc.trained += tp.trained;
      acc.underTraining += tp.underTraining;
      acc.placement += tp.placement;
      return acc;
    },
    { batches: 0, enrolled: 0, trained: 0, underTraining: 0, placement: 0 }
  );

  return (
    <>
      <PageLinks
        title="Our Projects"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Our Projects", link: "/our-projects" },
        ]}
      />
      <div className="container mx-auto py-8 px-5">
        <h3 className="theme-clr font-bold text-3xl">Our Projects</h3>

        {/* Filter Dropdown */}
        <div className="my-4">
          <label className="font-semibold">Filter by Financial Year: </label>
          <select
            className="border px-2 py-1 ml-2"
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setCurrentPage(1);
            }}
          >
            {financialYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div
          className="overflow-x-auto overflow-y-auto"
          style={{ maxHeight: "1000px" }}
        >
          <table className="w-full border-collapse border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-center border border-gray-400">
                <th className="p-1 text-sm border border-gray-400">TP Name</th>
                <th className="p-1 text-sm border border-gray-400">District</th>
                <th className="p-1 text-sm border border-gray-400">
                  Sector Name
                </th>
                <th className="p-1 text-sm border border-gray-400">Course</th>
                <th className="p-1 text-sm border border-gray-400">Scheme</th>
                <th className="p-1 text-sm border border-gray-400">Batches</th>
                <th className="p-1 text-sm border border-gray-400">Enrolled</th>
                <th className="p-1 text-sm border border-gray-400">Trained</th>
                <th className="p-1 text-sm border border-gray-400">
                  Under Training
                </th>
                <th className="p-1 text-sm border border-gray-400">
                  Placement
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((tp, index) => (
                <tr key={index} className="text-gray-700 text-left border">
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.tpName}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.district}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.sector.name}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.sector.course}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.scheme}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.batches}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.enrolled}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.trained}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.underTraining}
                  </td>
                  <td className="p-1 text-sm border border-gray-300">
                    {tp.placement}
                  </td>
                </tr>
              ))}
              <tr className="font-bold bg-gray-100 text-gray-900 text-left">
                <td
                  className="p-2 text-sm text-center border border-gray-400"
                  colSpan={5}
                >
                  Total
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.batches}
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.enrolled}
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.trained}
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.underTraining}
                </td>
                <td className="p-2 text-sm border border-gray-400">
                  {totals.placement}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-3 py-1 bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* <AchievementsSection /> */}
      </div>
    </>
  );
};

export default OurProjectsPage;
