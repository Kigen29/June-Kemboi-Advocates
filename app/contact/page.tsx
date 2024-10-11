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
    return null;
  }

  return (
    <>
      <Navbar />

      <div className="bg-[url('/Background.png')] bg-cover bg-center h-[40vh] flex justify-center items-center">
        <h1 className="text-white text-4xl sm:text-5xl">
          CONTACT <span className="text-[#EFB34E]">US</span>
        </h1>
      </div>

      <div className="mt-5 mx-4 sm:mx-6 md:mx-10">
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

      <div className="mt-5 mx-4 sm:mx-6 md:mx-10">
        <h3 className="text-xl sm:text-2xl font-bold underline underline-offset-4 decoration-4">
          Connect With Us
        </h3>
      </div>

      <div className="mt-8 mb-20 mx-4 sm:mx-6 md:mx-10">
        <div className="bg-[#800000] rounded-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information Section */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                LET'S WORK ON SOMETHING{" "}
                <span className="text-[#EFB34E]">GREAT</span> TOGETHER
              </h1>

              <div className="text-white mt-8 space-y-4 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <FaRegEnvelope />
                  <p>junekemboiadvocates@gmail.com</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FiPhone />
                  <p>+254 729 317 008</p>
                </div>
              </div>

              <div className="flex space-x-4 mt-8 text-white text-xl">
                <FaLinkedin className="hover:scale-110 transition duration-300" />
                <BsTwitterX className="hover:scale-110 transition duration-300" />
                <FaInstagram className="hover:scale-110 transition duration-300" />
                <FaFacebookSquare className="hover:scale-110 transition duration-300" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <Toaster position="top-center" richColors />
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="text-[#800000]">
                          Your Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            className="border-2 border-gray-400 focus:border-[#800000] w-full py-2 px-3 text-[#800000] leading-tight focus:outline-none focus:ring"
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
                    render={({ field }: any) => (
                      <FormItem>
                        <FormLabel className="text-[#800000]">
                          Your Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            type="email"
                            className="border-2 border-gray-400 focus:border-[#800000] w-full py-2 px-3 text-[#800000] leading-tight focus:outline-none focus:ring"
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
                      <FormItem>
                        <FormLabel className="text-[#800000]">
                          Your Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here"
                            className="border-2 border-gray-400 focus:border-[#800000] w-full py-2 px-3 text-[#800000] leading-tight focus:outline-none focus:ring"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="flex justify-center">
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
