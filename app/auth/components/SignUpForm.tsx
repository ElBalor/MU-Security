import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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

import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signUpWithEmailAndPassword } from "../actions";
import { useState, useTransition } from "react";
import { redirect } from "next/navigation";
import Eyenot from "../../../public/eye-hide.png";
import Eye from "../../../public/eye.png";
import Image from "next/image";

const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Password is required.",
    }),
    confirm: z.string().min(6, {
      message: "Password is required.",
    }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Password did not match",
    path: ["confirm"],
  });

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [isView, setIsView] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const showPassword = () => {
    setIsView(!isView);
  };

  const confiirmPassword = () => {
    setIsShow(!isShow);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword(data);
      const { error } = JSON.parse(result);

      if (error?.message) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error.message}</code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                Check Your Email to Verify Your Account
              </code>
            </pre>
          ),
        });
        return redirect("/articles");
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  type="email"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  type={isView ? `password` : "text"}
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Image
          src={Eye}
          alt="show"
          width={100}
          height={100}
          className={`{absolute right-4 top-[34%] w-12 h-12 ${
            isView ? "hidden" : "absolute right-4 top-[34%] w-12 h-12"
          }`}
          onClick={showPassword}
        />
        {isView && (
          <Image
            src={Eyenot}
            alt="hide"
            width={100}
            height={100}
            className={`absolute right-4 top-[34%] w-12 h-12 ${
              isView ? "" : "hidden"
            }`}
            onClick={() => setIsView(false)}
          />
        )}
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
                  {...field}
                  type={isShow ? `password` : "text"}
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Image
          src={Eye}
          alt="show"
          width={100}
          height={100}
          className={`{absolute right-4 top-[43%] w-12 h-12 ${
            isShow ? "hidden" : "absolute right-4 top-[56%] w-12 h-12"
          }`}
          onClick={confiirmPassword}
        />
        {isShow && (
          <Image
            src={Eyenot}
            alt="hide"
            width={100}
            height={100}
            className={`absolute right-4 top-[56%] w-12 h-12 ${
              isShow ? "" : "hidden"
            }`}
            onClick={() => setIsShow(false)}
          />
        )}
        <Button type="submit" className="w-full flex gap-2">
          Register
          <AiOutlineLoading3Quarters
            className={cn("animate-spin", { hidden: !isPending })}
          />
        </Button>
      </form>
    </Form>
  );
}
