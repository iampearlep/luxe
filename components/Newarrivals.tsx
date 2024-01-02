import Image from 'next/image'
import Img62 from '@/public/images/62.jpg'
import Img63 from '@/public/images/63.jpg'

const Newarrivals = () => {
  return (
    <div className='w-full md:w-10/12 mx-auto py-16 md:py-32 px-5 md:px-0'>
     <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-28  items-center justify-center gap-y-24 md:px-24'>
     <div className='flex flex-col gap-y-6 md:gap-y-16 text-left pt-5'>
     <div>
        <Image src={Img63} width={564} height={751} alt='' className='rounded-sm w-full h-full' />
      </div>
      <div className='border-r-2 border-yellow-600 '>
        <h2 className='text-2xl font-semibold'>New Arrivals.</h2>
        <p className='text-lg font-semibold'>Summer 2024</p>
      </div>
     </div>
      <div className='flex flex-col gap-y-6 md:gap-y-20 text-left'>
        <div className='border-l-2 border-yellow-600 md:px-6'>
          <p className='text-lg font-semibold text-right md:text-left'>Get ready to set the streets on fire with our latest arrivals *URBANPACE. we've reimaginged streetwear with a bold and fearless twist.</p>
        </div>
        <div>
      <Image src={Img62} width={564} height={785} alt='' className='rounded-sm w-full h-full' />
      </div>
      </div>
     </div>
    </div>
  )
}

export default Newarrivals