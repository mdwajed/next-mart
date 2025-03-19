import LoginForm from "@/components/modules/auth/LoginForm";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <div className="my-24">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
