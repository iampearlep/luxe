import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInWithEmailAndPassword } from "../actions";

import toast from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1, {
		message: "Password is required.",
	}),
});

export default function SignInForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		const result = await signInWithEmailAndPassword(data)

		const {error} = JSON.parse(result)

		if(error) {
			toast.error(`${error.message}`);
		} else {
			toast.success(`Successfully logged in`);
		}

	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full space-y-4"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="example@gmail.com"
									{...field}
									type="email"
									onChange={field.onChange}
								/>
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
								<Input
									placeholder="password"
									{...field}
									type="password"
									onChange={field.onChange}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full flex gap-2">
					Sign In
				</Button>
			</form>
		</Form>
	);
}
