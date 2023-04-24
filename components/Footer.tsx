import Image from 'next/image'
import React from 'react'

const Footer = ({ scrollToPioneers, scrollToProduct, scrollToContact, scrollToFacts }: any) => {
    const scrollToTop = () => {
        if(window) {
      
          window.scrollTo({top: 0, behavior: 'smooth'});
          return
          // return refToModa?.current.scrollIntoView({behavior: 'smooth'})
        }
    }

  return (
    <footer className='h-96 w-full bg-black px-4 pb-8' >
        <div className='h-full w-full flex flex-col'>
            <div className='w-full h-40 bg-black flex justify-center items-center my-12'>
            <Image
                alt='icon image'
                src="/images/wagyu/Logo_Wagyu_footer.png"
                width={180}
                height={180}
                className="cursor-pointer object-contain transition duration-500 hover:scale-105 opacity-90 hover:opacity-100"
                />
            </div>
            <div className='w-full h-20 flex flex-row justify-center space-x-6 items-start bg-black'>
                <p className='text-gray-500 cursor-pointer' onClick={() => scrollToTop()}>Back to Top</p>
            </div>
            <div className='w-full h-20 flex flex-row justify-center space-x-6 items-start bg-black'>
                <h6 className='text-lg font-light text-white cursor-pointer' onClick={scrollToPioneers}>WAGYU PIONEERS</h6>
                <h6 className='text-lg font-light text-white cursor-pointer' onClick={scrollToProduct}>PRODUCT</h6>
                <h6 className='text-lg font-light text-white cursor-pointer' onClick={scrollToFacts}>FACTS</h6>
                <h6 className='text-lg font-light text-white cursor-pointer' onClick={scrollToContact}>CONTACT US</h6>
            </div>
            <div className='w-full h-20 bg-black flex justify-center items-center'>
                <h6 className='text-sm font-light text-white'>@ 2023 WAGYU</h6>
            </div>
        </div>
    </footer>
  )
}

export default Footer