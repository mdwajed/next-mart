"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/actions/user";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import Link from "next/link";

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);

      if (res.status == true) {
        toast.success(res.message);
      }
      toast.error(res.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-[380px]  mx-auto shadow-2xl rounded-md p-8 space-y-2">
      <h1 className="text-2xl font-extrabold flex items-center justify-center">
        <p className="text-2xl">🔐</p> Auth
      </h1>
      <p className="text-sm text-center">Welcome! Please Register .</p>
      <Form {...form}>
        <form
          className="flex flex-col gap-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Md Wajed" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="wajed@gmail.com" {...field} />
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
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Button type="submit" className="w-full my-2">
              {isSubmitting ? "Registering" : "Register"}
            </Button>
          </div>
        </form>
      </Form>
      <p className="text-xs text-center">
        Already Have an Account ? Please{" "}
        <Link href="/login" className="font-bold text-green-500 ml-2 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
