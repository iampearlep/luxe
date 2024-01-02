import Banner from "@/components/Banner"
import Newarrivals from "@/components/Newarrivals"
import Categories from "@/components/Categories"
export default function Home() {
  return (
    <main className=''>
      <Banner />
      <Newarrivals />
      <Categories />
    </main>
  )
}