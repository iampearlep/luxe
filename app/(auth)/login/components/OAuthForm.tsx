import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";

export default function OAuthForm() {
	return (
        <div className="flex flex-row gap-x-5">
            <Button className="w-full"><IoLogoGithub /></Button>
            <Button className="w-full"><FcGoogle /></Button>
        </div>
    )
}
