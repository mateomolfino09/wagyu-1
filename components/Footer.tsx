import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Footer = ({ scrollToPioneers, scrollToProduct, scrollToContact, scrollToFacts, setRefToContactSend }: any) => {
    const scrollToTop = () => {
        if(window) {
      
          window.scrollTo({top: 0, behavior: 'smooth'});
          return
          // return refToModa?.current.scrollIntoView({behavior: 'smooth'})
        }
    }
    const rowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if(rowRef != null && setRefToContactSend != null) {
        setRefToContactSend(rowRef)
      } 
  }, []) 

  return (
    <footer className='h-full w-full bg-black px-4 pb-1' ref={rowRef}>
        <div className='h-full w-full flex flex-col'>
        <div className='w-full h-20 flex flex-col justify-center items-center bg-black mt-12'>
                <h5 className='text-white cursor-pointer text-3xl md:text-4xl mb-2'>Contact Us</h5>
                <p className='lightYellow text-sm md:text-lg cursor-pointer'>sales@evawagyu.com</p>
            </div>
            <div className='w-full h-40 bg-black flex justify-center items-center mt-8'>
            <Image
                alt='icon image'
                src="/images/wagyu/Logo_Wagyu_footer.png"
                width={180}
                height={180}
                className="cursor-pointer object-contain transition duration-500 hover:scale-105 opacity-90 hover:opacity-100"
                />
            </div>
            <div className='w-full h-auto mb-8 flex flex-row justify-center items-start bg-black'>
                <p className='text-gray-500 cursor-pointer' onClick={() => scrollToTop()}>Back to Top</p>
            </div>
            <div className='w-full h-auto flex flex-row justify-center space-x-6 items-start bg-black'>
                <h6 className='text-lg font-light text-white cursor-pointer text-center' onClick={scrollToPioneers}>WAGYU PIONEERS</h6>
                <h6 className='text-lg font-light text-white cursor-pointer text-center' onClick={scrollToProduct}>PRODUCT</h6>
                <h6 className='text-lg font-light text-white cursor-pointer  text-center' onClick={scrollToFacts}>FACTS</h6>
                <h6 className='text-lg font-light text-white cursor-pointer text-center' onClick={scrollToContact}>CONTACT US</h6>
            </div>
            <div className='w-full h-20 bg-black flex justify-center items-center'>
                <h6 className='text-sm font-light text-white'>@ 2023 WAGYU</h6>
            </div>
        </div>
    </footer>
  )
}

export default Footer