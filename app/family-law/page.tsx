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

const Family = () => {
  const reasons = [
    {
      id: 1,
      title: "Divorce & Separation:",
      description:
        "We assist clients in navigating the complexities of divorce, separation, and annulment, focusing on fair settlements and minimizing emotional distress.",
    },
    {
      id: 2,
      title: "Child Custody & Support:",
      description:
        "Our team advocates for our clients in matters of child custody, support, and visitation rights, ensuring that the child's welfare remains the top priority.",
    },
    {
      id: 3,
      title: "Property & Financial Settlements:",
      description:
        "We handle negotiations and legal proceedings related to the division of marital property, spousal support, and financial arrangements.",
    },
    {
      id: 4,
      title: "Mediation & Conflict Resolution:",
      description:
        "We encourage out-of-court solutions through mediation and negotiation, promoting amicable settlements wherever possible.",
    },
    
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/family-law.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            FAMILY <span className="text-[#EFB34E]">LAW</span>
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
              <BreadcrumbPage>Family Law</BreadcrumbPage>
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
          , we provide compassionate and professional Family Law services,
          ensuring the best interests of our clients and their families are
          protected. Our legal team understands the sensitive nature of family
          disputes and is committed to offering tailored legal advice and
          representation.
        </p>

        <p className="mt-10">Our Family Law Services include:</p>

        {reasons.map((reason) => (
          <div className="flex flex-row items-start space-x-2 ml-5 mt-1" key={reason.id}>
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
            Our experienced team provides{" "}
            <span className="text-[#800000] font-bold">clear</span> and{" "}
            <span className="text-[#800000] font-bold">practical </span>{" "}
            guidance on the{" "}
            <span className="text-[#EFB34E] font-bold">
            legal rights
            </span> {" "}
            and <span className="text-[#EFB34E] font-bold">options available</span>
            {" "} to you and your family.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Family;
