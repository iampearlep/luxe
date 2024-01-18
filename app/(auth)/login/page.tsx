
import { redirect } from "next/navigation"
import { AuthForm } from "../components/AuthForm"
import readUserSession from "@/app/lib/actions"

export default async function Page() {

  const {data} = await readUserSession()
  if (data.session){
    return redirect("http://localhost:3000/")
  }


    return (
      <main className='bg-black'>
      <div className="flex flex-col gap-y-6 justify-center items-center h-screen">
        <h1 className="text-white text-2xl font-semibold">Welcome to <span  className="uppercase">luxe.</span></h1>
			<div className="w-96">
				<AuthForm />
			</div>
		</div>
      </main>
    )
  }