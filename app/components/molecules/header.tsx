"use client";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="container mx-auto flex justify-between">
        <div className="left">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="right">
          <div className="profile">
            <Unauthenticated>
              <SignInButton />
            </Unauthenticated>
            <Authenticated>
              <SignOutButton />
            </Authenticated>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
