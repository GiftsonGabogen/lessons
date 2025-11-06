"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";

//TODO: use tanstack for loading states if possible

const Onboarding = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [user, setUser] = useState<any>(null);
  const signInCreateAccount = useMutation(api.account.signInCreateAccount);

  useEffect(() => {
    const run = async () => {
      const data = await signInCreateAccount();
      setShowWelcome(data.new);
      setUser(data.user);
    };
    run();
  }, [signInCreateAccount]);

  return (
    <div className="mx-auto max-w-3xl">
      {showWelcome ? (
        <div>Welcome new user {user?.name}</div>
      ) : (
        <div>Welcome back {user?.name}</div>
      )}
    </div>
  );
};

export default Onboarding;
