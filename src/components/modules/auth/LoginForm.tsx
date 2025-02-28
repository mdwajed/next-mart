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
import { LoginSchema } from "@/schemas";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { LoginUser } from "@/actions/user";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await LoginUser(data);

      if (res.status == true) {
        toast.success(res.message);

        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
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
      <p className="text-sm text-center">Welcome Back ! Please Login</p>
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
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

          <Button type="submit" className="w-full my-2">
            {isSubmitting ? "logging" : "Login"}
          </Button>
        </form>
      </Form>
      <p className="text-xs text-center">
        Have an Account ? Please
        <Link
          href="/register"
          className="font-bold text-green-500 ml-2 underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
