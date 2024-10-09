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

const Children = () => {
  const reasons = [
    {
      id: 1,
      title: "Child Custody & Access:",
      description:
        "We represent parents in child custody disputes, ensuring fair and equitable arrangements that serve the best interests of the child.",
    },
    {
      id: 2,
      title: "Adoption & Guardianship:",
      description:
        "Our team assists with legal processes related to adoption and guardianship, ensuring compliance with legal requirements while safeguarding the child’s future.",
    },
    {
      id: 3,
      title: "Child Protection & Welfare:",
      description:
        "We represent clients in child protection cases, advocating for the safety and welfare of the child.",
    },
    {
      id: 4,
      title: "Maintenance & Support Claims:",
      description:
        "We help clients secure child maintenance and financial support, ensuring that children's needs are met.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="relative bg-[url('/children.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            CHILDREN <span className="text-[#EFB34E]">MATTERS</span>
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
              <BreadcrumbPage>Children Matters</BreadcrumbPage>
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
          , we provide expert legal services for Children Matters, ensuring that
          the rights and welfare of children are protected throughout legal
          proceedings. We work with families to ensure the best possible
          outcomes for the child.
        </p>

        <p className="mt-10">Our Children Matters Services include:</p>

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
            Our team is committed to ensuring that{" "}
            <span className="text-[#800000] font-bold">children’s rights</span> and{" "}
            <span className="text-[#800000] font-bold">
            best interests
            </span>{" "}
            are at the forefront of all legal actions.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Children;
