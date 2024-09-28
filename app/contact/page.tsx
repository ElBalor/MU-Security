"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser"; // Import emailjs
import { Checkbox } from "@/components/ui/checkbox";
import { FaWhatsapp, FaPhoneSquareAlt, FaMailBulk } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight } from "react-icons/pi";
import EarthModel from "@/components/models/Earth";
import Navbar from "@/components/navbar";

// Define the schema using Zod
const FormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters long"),
  help: z.enum(["Evaluate MUU Security", "Learn More", "Get a Quote", "Other"]),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});
type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      help: "Learn More",
    },
  });

  async function onSubmit(data: FormValues) {
    setLoading(true);
    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          name: data.email,
          to_name: "ElBalor",
          from_name: data.first_name,
          from_email: data.email,
          message: data.message,
          help: data.help,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      if (res.status === 200) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        throw new Error("Failed to send the message");
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
      />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact MUU-Security
          </div>
          <div className="py-4 text-gray-300">
            You can contact us through all mediums. <br /> Let&apos;s Connect
            😊.
          </div>

          <div className="bg-cyan-700 md:w-4/5 w-full space-x-5 p-4 justify-between flex items-center rounded-xl my-4 flex-row md:flex md:flex-row overflow-x-auto">
            <a href={`https://wa.me/2348062107945?text=Hello%20MU-Security!`}>
              <FaWhatsapp size={30} />
            </a>
            <button>
              <FaSquareFacebook size={30} />
            </button>
            <a
              href="tel:08062107945"
              className="items-center flex flex-col mt-4"
            >
              <FaPhoneSquareAlt size={30} />
              <h1>Call Us</h1>
            </a>
            <a
              href="mailto:umanamfon06@gmail.com"
              className="items-center flex flex-col mt-4"
            >
              <FaMailBulk size={30} />
              <h1 className="flex w-full justify-center items-center">Mail</h1>
            </a>
          </div>
          <div className="w-full h-[500px]">
            <EarthModel />
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3"
            >
              <div className="md:flex items-center gap-6 ">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Full name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        user name (optional) *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Message *
                    </FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>How can we help?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Evaluate Bird for my company">
                          Evaluate MUU Security
                        </SelectItem>
                        <SelectItem value="Learn More">Learn More</SelectItem>
                        <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      I agree to the terms and conditions of MUU Security
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-br from-slate-400 to-blue-400 hover:scale-110 duration-700"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          ) : (
            <div className="text-center ">
              <PiCheckLight size={80} />
              <h1 className="text-2xl font-semibold">
                Message Sent Successfully!
              </h1>
              <h1 className="text-2xl font-semibold text-gray-300 animate-pulse ">
                We will get back to you shortly.
              </h1>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
