import Banner from "@/components/Banner"
import Newarrivals from "@/components/Newarrivals"
import Categories from "@/components/Categories"
import Recommended from "@/components/Recommended"
export default function Home() {
  return (
    <main className=''>
      <Banner />
      <Newarrivals />
      <Categories />
      <Recommended />
    </main>
  )
}