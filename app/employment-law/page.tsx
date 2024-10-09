import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { DividerVerticalIcon } from "@radix-ui/react-icons";
import { IoMdCheckboxOutline } from "react-icons/io";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Employment = () => {
  const reasons = [
    {
      id: 1,
      title: "Wrongful Termination & Unfair Dismissal:",
      description:
        "We represent clients in cases of unfair dismissal, ensuring that employment rights are upheld, and just outcomes are achieved.",
    },
    {
      id: 2,
      title: "Workplace Harassment & Discrimination:",
      description:
        "Our team advocates for employees facing harassment or discrimination, ensuring they are protected under the law.",
    },
    {
      id: 3,
      title: "Contract Drafting & Review:",
      description:
        "We assist employers with drafting and reviewing employment contracts, ensuring compliance with employment laws and protection of business interests.",
    },
    {
      id: 4,
      title: "Labor Disputes & Negotiations:",
      description:
        "We represent clients in labor disputes, including wage claims, benefits disputes, and collective bargaining issues.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/employment-law.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            EMPLOYMENT <span className="text-[#EFB34E]">LAW</span>
          </h1>
        </div>
      </div>

      <div className="mt-5 mx-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <DividerVerticalIcon />
            <BreadcrumbItem>
              <BreadcrumbLink href="/practice-areas">
                Practice Areas
              </BreadcrumbLink>
            </BreadcrumbItem>
            <DividerVerticalIcon />
            <BreadcrumbItem>
              <BreadcrumbPage>Employment Law</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-5 mx-5">
        <h3 className="text-2xl font-bold underline underline-offset-4 decoration-4">
          Overview
        </h3>
      </div>

      <div className="mt-5 mx-10">
        <p>
          At{" "}
          <span className="font-bold text- text-[#800000]">
            June Kemboi Advocates
          </span>
          , we offer comprehensive Employment Law services, providing employers
          and employees with expert legal support in workplace disputes and
          regulatory compliance matters.
        </p>

        <p className="mt-10">Our Employment Law Services include:</p>

        {reasons.map((reason) => (
          <div
            className="flex flex-row items-start space-x-2 ml-5 mt-1"
            key={reason.id}
          >
            <div className="mt-1">
              <IoMdCheckboxOutline />
            </div>
            <div>
              <p>
                <span className="font-bold text-[#800000]">{reason.title}</span>{" "}
                {reason.description}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-5 mb-10">
          <p>
            Our team is dedicated to delivering{" "}
            <span className="text-[#800000] font-bold">fair outcomes</span> and{" "}
            <span className="text-[#800000] font-bold">protecting the rights</span>{" "}
            of both employees and employers.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Employment;
