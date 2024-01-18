"useClient"
import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { createBrowserClient } from '@supabase/ssr'


export default function OAuthForm() {
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      const loginWithGoogle = async() => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              queryParams: {
                access_type: 'offline',
                prompt: 'consent',
              },
              redirectTo: `${location.origin}/login/callback `,
            },
          })
          
    }
        const loginWithGithub = async() => {
           await supabase.auth.signInWithOAuth({
                provider: 'github',
            options: {
             redirectTo: `${location.origin}/login/callback `,
                },
            })
        }

       

       
	return (
        <div className="flex flex-row gap-x-5">
            <Button className="w-full" onClick={loginWithGithub}><IoLogoGithub /></Button>
            <Button className="w-full" onClick={loginWithGoogle}><FcGoogle /></Button>
        </div>
    )
}
