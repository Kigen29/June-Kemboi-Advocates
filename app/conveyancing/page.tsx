import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { DividerVerticalIcon } from "@radix-ui/react-icons";
import { IoMdCheckboxOutline } from "react-icons/io";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Conveyancing = () => {
  const reasons = [
    {
      id: 1,
      title: "Property Sales & Purchases: ",
      description:
        "We handle all legal aspects of buying and selling property, ensuring compliance with regulations and protecting your investment.",
    },
    {
      id: 2,
      title: "Leases & Tenancy Agreements:",
      description:
        "We draft, review, and advise on lease and tenancy agreements, ensuring they meet legal requirements and protect your rights as a landlord or tenant.",
    },
    {
      id: 3,
      title: "Property Transfers:",
      description:
        "We assist with the transfer of property ownership, ensuring a seamless and legally compliant process.",
    },
    {
      id: 4,
      title: "Mortgage & Financing:",
      description:
        "We provide legal support in matters related to mortgages and property financing, ensuring transparency and fairness in all transactions.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/Conveyancing.jpeg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
          <span className="text-[#EFB34E]">CONVEYANCING</span>
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
              <BreadcrumbPage>Conveyancing</BreadcrumbPage>
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
          , we offer expert Conveyancing services to help individuals and businesses navigate the complexities of property transactions, ensuring smooth and legally secure transfers.
        </p>

        <p className="mt-10">Our Conveyancing Services include:</p>

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
            Our team works{" "}
            <span className="text-[#800000] font-bold">diligently</span>{" "}
            to protect your interests, ensuring property transactions are handled{" "}
            <span className="text-[#800000] font-bold">efficiently</span>{" "}
            and in full
            <span className="text-[#EFB34E] font-bold">{" "}
            compliance 
            </span>{" "}
            with the law
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Conveyancing;
