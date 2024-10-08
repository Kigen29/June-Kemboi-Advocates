"use client";
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
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

import { Textarea } from "@/components/ui/textarea";
import SolidButtonForm from "@/components/SolidButtonForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Toaster, toast } from "sonner";

const Contact = () => {
  const formSchema = z.object({
    name: z
      .string()
      .min(2, "name must be at least 2 characters")
      .max(100, "name cannot exceed 100 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z
      .string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message cannot exceed 500 characters"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    form.reset();

    // Trigger a success notification
    toast.success("Your message has been sent successfully!");
  }

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering problematic divs or forms until client-side rendering
  }

  return (
    <>
      <Navbar />

      <div className="bg-[url('/backdrop.png')] bg-cover bg-center h-[50vh] content-center">
        <div className="flex justify-center">
          <h1 className="text-[#FFFFFF] text-5xl">
            CONTACT <span className="text-[#EFB34E]">US</span>
          </h1>
        </div>
      </div>

      <div className="mt-10 mx-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <DividerVerticalIcon />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mt-5 mx-5">
        <h3 className="text-2xl font-bold underline underline-offset-4 decoration-4">
          Connect With Us
        </h3>
      </div>

      <div className="mt-10 mb-20">
        <div className="bg-[#800000] mx-5 rounded-md">
          <div className="flex flex-row">
            <div className="basis-1/2">
              <div className="mt-6 ml-6 font-poppins">
                <h1 className="text-[#FFFFFF] md:text-4xl text-2xl font-semibold ">
                  LET'S WORK
                </h1>
                <h1 className="text-[#FFFFFF] md:text-4xl text-2xl md:mt-4 mt-2 font-semibold">
                  ON SOMETHING <span className="text-[#EFB34E]">GREAT</span>
                </h1>
                <h1 className="text-[#FFFFFF] md:text-4xl text-2xl md:mt-4 mt-2 font-semibold">
                  TOGETHER
                </h1>
              </div>

              <div className="mt-20 ml-6 text-[#FFFFFF] mr-2 text-xs md:text-base">
                <div className="flex flex-row items-center space-x-3">
                  <FaRegEnvelope />
                  <p>junekemboiadvocates@gmail.com</p>
                </div>
                <div className="flex flex-row items-center space-x-3 mt-2">
                  <FiPhone />
                  <p>+254 729 317 008</p>
                </div>
              </div>

              <div className=" mt-20 mb-3 ml-6 text-[#FFFFFF] flex flex-row items-center space-x-3">
                <FaLinkedin />
                <BsTwitterX />
                <FaInstagram />
                <FaFacebookSquare />
              </div>
            </div>

            <div className="bg-[#FFFFFF] mt-6 basis-1/2 mr-3 rounded-md mb-3">
            <Toaster position="top-center" richColors />
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  {/* Username Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }:any) => (
                      <FormItem className="mt-2 mx-2 md:mx-5 md:mt-5">
                        <FormLabel className="text-[#800000]">Your Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            className="appearance-none border-2 border-[#423F3F] hover:border-[#800000] w-full py-2 px-3 text-[#800000] leading-tight focus:outline-none focus:shadow-outline"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }:any) => (
                      <FormItem className="mx-2 md:mx-5">
                        <FormLabel className="text-[#800000]">Your Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            type="email"
                            className="appearance-none border-2 border-[#423F3F] hover:border-[#800000] w-full py-2 px-3 text-[#800000] leading-tight focus:outline-none focus:shadow-outline"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }: any) => (
                      <FormItem className="mx-2 md:mx-5">
                        <FormLabel className="text-[#800000]">Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here"
                            className="appearance-none border-2 border-[#423F3F] hover:border-[#800000] w-full py-2 px-3 text-[#800000] leading-tight focus:outline-none focus:shadow-outline"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="flex justify-center pb-5">
                    <SolidButtonForm>Submit</SolidButtonForm>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
