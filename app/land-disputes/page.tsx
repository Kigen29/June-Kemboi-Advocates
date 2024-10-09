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

const Land = () => {
  const reasons = [
    {
      id: 1,
      title: "Boundary Disputes & Encroachment:",
      description:
        "We represent clients in disputes related to land boundaries and property encroachment, advocating for clear resolutions.",
    },
    {
      id: 2,
      title: "Land Ownership & Title Claims:",
      description:
        "We handle cases involving ownership claims and title disputes, ensuring that property rights are respected and enforced.",
    },
    {
      id: 3,
      title: "Landlord & Tenant Disputes:",
      description:
        "We assist with resolving disputes between landlords and tenants, including evictions, rent disputes, and lease agreements.",
    },
    {
      id: 4,
      title: "Easements & Land Use:",
      description:
        "Our team advises on easements, land use rights, and other property-related legal matters.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/land.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            LAND <span className="text-[#EFB34E]">DISPUTES</span>
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
              <BreadcrumbPage>Land Disputes</BreadcrumbPage>
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
          , we offer expert legal services for Land Disputes, helping clients
          navigate the complexities of land ownership and property rights. We
          aim to resolve disputes efficiently and fairly, protecting our
          clients' interests.
        </p>

        <p className="mt-10">Our Land Dispute Services include:</p>

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
            We are dedicated to achieving{" "}
            <span className="text-[#800000] font-bold">fair</span> outcomes and protecting{" "}
            <span className="text-[#EFB34E] font-bold">
            property rights
            </span> in all{" "}
            <span className="text-[#EFB34E] font-bold">land-related</span> matters.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Land;
