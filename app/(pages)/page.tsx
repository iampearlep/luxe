
import Banner from "@/components/Banner"
import Newarrivals from "@/components/Newarrivals"
import Categories from "@/components/Categories"
import Recommended from "@/components/Recommended"
import Collections from "@/components/Collections"
import Cta from "@/components/Cta"
// import SignOut from "../(auth)/components/SignOut"
import { redirect } from "next/navigation"
import readUserSession from "../lib/actions"

export default async function Home() {
  const {data} = await readUserSession()
  if (!data.session){
    return redirect("/login")
  }
  return (
    <main className=''>
      {/* <SignOut /> */}
      <Banner />
      <Newarrivals />
      <Categories />
      <Recommended />
      <Collections />
      <Cta />
    </main>
  )
}