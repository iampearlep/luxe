import { AuthForm } from "./components/AuthForm"

export default function Page() {
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