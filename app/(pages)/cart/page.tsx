import CartItems from "@/components/CartItems"
import CartSummary from "@/components/CartSummary"
export default function Page() {
    return (
      <main className='text-black py-10'>
         <div className="flex md:w-10/12 mx-auto px-5">
          <h1 className="text-3xl font-semibold">Shopping Cart</h1>
          </div>
        <div className="md:w-11/12 mx-auto px-5">
          <div className="flex flex-col md:flex-row md:w-11/12 mx-auto items-start justify-between gap-x-10 gap-y-4 py-20">
            <CartItems />
            <CartSummary />
          </div>
        </div>
      </main>
    )
  }
  