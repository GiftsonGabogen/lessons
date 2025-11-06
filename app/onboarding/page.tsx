"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Onboarding = () => {
  const router = useRouter();
  const signInCreateAccount = useMutation(api.account.signInCreateAccount);
  const [state, setState] = useState<"loading" | "error" | "success">(
    "loading"
  );
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    signInCreateAccount()
      .then((result) => {
        setData(result);
        setState("success");
        setTimeout(() => router.push("/dashboard"), 4000);
      })
      .catch(() => setState("error"));
  }, []);

  if (state === "loading") return <div>Loading...</div>;
  if (state === "error") return <div>Error</div>;

  return (
    <div>
      {data?.new
        ? `Welcome ${data?.user?.name}`
        : `Welcome back ${data?.user?.name}`}
    </div>
  );
};

export default Onboarding;
