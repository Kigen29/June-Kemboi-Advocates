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

const Criminal = () => {
    const reasons = [
        {
            id: 1,
            title: "Legal Representation:",
            description:"We represent clients in all types of criminal cases, ranging from minor offenses to serious crimes, ensuring their rights are protected at every step."
        },
        {
            id: 2,
            title: "Case Analysis & Defense Strategy:",
            description:"Our lawyers thoroughly analyze the evidence and circumstances of each case to develop effective defense strategies tailored to the client’s unique situation."
        },
        {
            id: 3,
            title: "Pre-trial & Trial Advocacy:",
            description:"We handle all pre-trial procedures, including bail applications, plea negotiations, and evidence gathering. If the case proceeds to trial, we provide robust courtroom representation, aiming to secure the best possible outcome."
        },
        {
            id: 4,
            title: "Appeals & Post-Conviction:",
            description:"For clients seeking to challenge a conviction or sentence, we offer appellate services, fighting for justice and rectification of any legal errors."
        },
        {
            id: 5,
            title: "Consultation & Advisory:",
            description:"We offer consultations to advise clients on their rights, potential outcomes, and the legal processes involved in criminal cases."
        }

    ];

  return (
    <>
    <Navbar />

      <div className="relative bg-[url('/criminal-litig.jpg')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            CRIMINAL <span className="text-[#EFB34E]">LITIGATION</span>
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
              <BreadcrumbLink href="/practice-areas">Practice Areas</BreadcrumbLink>
            </BreadcrumbItem>
            <DividerVerticalIcon />
            <BreadcrumbItem>
              <BreadcrumbPage>Criminal Litigation</BreadcrumbPage>
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
            At <span className="font-bold text- text-[#800000]">June Kemboi Advocates</span>,
            we provide comprehensive Criminal Litigation services to defend and
            protect the rights of individuals and entities facing criminal
            charges. Our expert legal team is dedicated to guiding clients
            through each stage of the criminal justice process, ensuring a
            strong defense and fair representation.
          </p>

          <p className="mt-10">
            Our Criminal Litigation Services include:
          </p>
        
        
        {reasons.map((reason) => (
        <div className="flex flex-row items-start space-x-2 ml-5 mt-1" key={reason.id}>
            <div className="mt-1">
                <IoMdCheckboxOutline />
            </div>
            <div>
                <p><span className="font-bold text-[#800000]">{reason.title}</span> {reason.description}</p>
            </div>
        </div>
        ))}

        <div className="mt-5 mb-10">
            <p>Our team is committed to providing clients with <span className="text-[#800000] font-bold">strategic</span> and <span className="text-[#800000] font-bold">compassionate </span> legal support, whether they are <span className="text-[#EFB34E] font-bold">under investigation</span>, <span className="text-[#EFB34E] font-bold">facing charges</span>, or <span className="text-[#EFB34E] font-bold">seeking an appeal</span>.</p>

        </div>

        
      </div>

      <Footer />
    </>
  );
};

export default Criminal;
