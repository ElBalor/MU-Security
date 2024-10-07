import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useTransition } from "react";
import { signInWithEmailAndPassword } from "../actions";
import { redirect } from "next/navigation";
import Eye from "../../../public/eye.png";
import Eyenot from "../../../public/eye-hide.png";
import Image from "next/image";

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export default function SignInForm() {
  const [isPending, startTransition] = useTransition();
  const [isView, setIsView] = useState(false);

  const showPassword = () => {
    setIsView(!isView);
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await signInWithEmailAndPassword(data);
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
              <code className="text-white">Logged in Successfuly</code>
            </pre>
          ),
        });
        redirect("/articles");
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
                  type={isView ? "password" : "text"}
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
            isView ? "hidden" : "absolute right-4 top-[44%] w-12 h-12"
          }`}
          onClick={showPassword}
        />
        {isView && (
          <Image
            src={Eyenot}
            alt="hide"
            width={100}
            height={100}
            className={`absolute right-4 top-[44%] w-12 h-12 ${
              isView ? "" : "hidden"
            }`}
            onClick={() => setIsView(false)}
          />
        )}
        <Button type="submit" className="w-full flex gap-2">
          SignIn
          <AiOutlineLoading3Quarters
            className={cn("animate-spin", { hidden: !isPending })}
          />
        </Button>
      </form>
    </Form>
  );
}
