"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import OAuthForm from "./OAuthForm";

export function AuthForm() {
	return (
		<div className="w-10/12 mx-auto md:w-full space-y-5">
			<Tabs defaultValue="signin" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="signin">SignIn</TabsTrigger>
					<TabsTrigger value="register">Register</TabsTrigger>
				</TabsList>
				<TabsContent value="signin">
					<SignInForm />
				</TabsContent>
				<TabsContent value="register">
					<RegisterForm />
				</TabsContent>
			</Tabs>
			<div className="text-white text-xs flex flex-row justify-center items-center gap-x-2">
                <hr className="w-4/12" />
                <p>OR</p>
                <hr className="w-4/12" />
            </div>
			<OAuthForm />
		</div>
	);
}
