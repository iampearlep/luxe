import CartItems from "@/components/CartItems"
import CartSummary from "@/components/CartSummary"
export default function Page() {
    return (
      <main className='text-black'>
        <div className="w-11/12 mx-auto px-5">
          <h1>Shopping Cart</h1>
          <div className="flex flex-row w-10/12 mx-auto items-center justify-between py-20">
            <CartItems />
            <CartSummary />
          </div>
        </div>
      </main>
    )
  }
  