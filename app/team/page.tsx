import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { DividerVerticalIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-[url('/Background.png')] bg-cover bg-center h-[50vh] content-center">
        <div className="absolute inset-0"></div>
        <div className="relative flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            OUR <span className="text-[#EFB34E]">TEAM</span>
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
              <BreadcrumbPage>Our Team</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Leadership Section */}
      <section className="px-20 p-5 gap-20 bg-white">
        <h1 className="text-2xl font-bold text-[#800000]">Leadership</h1>
        <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
          {/* Card for June Kemboi */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex justify-center">June Kemboi</CardTitle>
              <CardDescription>Lead Advocate - Contract Law and Conveyancing Expert</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                June Kemboi is the founder and lead advocate at June Kemboi Advocates. With extensive experience in legal practice, June is committed to providing expert legal services tailored to each client’s needs. Her leadership and dedication ensure that the firm remains at the forefront of legal excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;
