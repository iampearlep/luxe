"useClient";
import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { createBrowserClient } from "@supabase/ssr";

export default function OAuthForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `https://luxe-vtg.vercel.app/login/callback`,
      },
    });
  };
  const loginWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `https://luxe-vtg.vercel.app/login/callback`,
      },
    });
  };

  return (
    <div className="flex flex-row gap-x-5">
      <Button className="w-full" onClick={loginWithGithub}>
        <IoLogoGithub className="w-7 h-5" />
      </Button>
      <Button className="w-full" onClick={loginWithGoogle}>
        <FcGoogle className="w-5 h-5" />
      </Button>
    </div>
  );
}
