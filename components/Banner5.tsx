import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import imageLoader from '../imageLoader'

interface Props {
    img: string
    setRefToFactsSend: any
}

const Banner5 = ({img, setRefToFactsSend}: Props) => {
    const rowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if(rowRef != null && setRefToFactsSend != null) {
        setRefToFactsSend(rowRef)
      } 
  }, []) 

  return (
    <div className='flex flex-col md:flex-row h-auto relative top-0 bg-[#191b1bf6] text-white py-24' ref={rowRef}>
              <div className='h-auto w-full md:mt-0 flex flex-col md:flex-row space-y-8 items-center justify-center mt-20 p-2'>
                <div className='w-full h-auto flex flex-col justify-center items-center' style={{flex: '0 0 33%'}}>
                <h1 className='font-light text-5xl md:text-6xl lg:text-7xl telugu'>WAGYU</h1>
                <h1 className='font-light text-5xl md:text-6xl lg:text-7xl telugu'>FACTS</h1>
                </div>
                <hr className='md:block h-2/3 border-r-[1px] border-r-white m-1 p-0 border hidden'/>

                <div className='flex flex-row h-auto justify-center items-start flex-wrap mt-8'>
                    <div className='w-full h-auto justify-center items-center flex flex-col space-y-4 mb-8' style={{flex: '0 0 50%'}}>
                        <h5 className='font-light text-xl md:text-2xl goldYellowText text-center' >BREED</h5>
                        <div className='flex flex-col h-auto space-y-0 justify-center items-center'>
                        <p className='font-light text-lg md:text-xl text-center'>Wagyu X Angus</p>
                        <p className='font-light text-lg md:text-xl'>F1 to F4</p>
                        </div>
                    </div>
                    <div className='w-full h-auto justify-center items-center flex flex-col space-y-4 mb-8' style={{flex: '0 0 50%'}}>
                        <h5 className='font-light text-xl md:text-2xl goldYellowText text-center'>ORIGIN</h5>
                        <div className='flex flex-col h-auto space-y-0 justify-center items-center'>
                        <p className='font-light text-lg md:text-xl text-center'>URUGUAY</p>
                        </div>
                    </div>
                    <div className='w-full h-auto justify-center items-center flex flex-col space-y-4 mb-8' style={{flex: '0 0 50%'}}>
                        <h5 className='font-light text-xl md:text-2xl goldYellowText text-center'>BREEDING</h5>
                        <div className='flex flex-col h-auto space-y-0 justify-center items-center'>
                        <p className='font-light text-lg md:text-xl text-center'>Grass fed up</p>
                        <p className='font-light text-lg md:text-xl'> to 360-380 kgs</p>
                        </div>
                    </div>
                    <div className='w-full h-auto justify-center items-center flex flex-col space-y-4 mb-8' style={{flex: '0 0 50%'}}>
                        <h5 className='font-light text-xl md:text-2xl goldYellowText text-center'>FEEDING</h5>
                        <div className='flex flex-col h-auto space-y-0 justify-center items-center'>
                        <p className='font-light text-lg md:text-xl text-center'>Grain fed+330 days with special diets</p>
                        </div>
                    </div>
                    <div className='w-full h-auto justify-center items-center flex flex-col space-y-4 mb-8' style={{flex: '0 0 50%'}}>
                        <h5 className='font-light text-xl md:text-2xl goldYellowText text-center'>CARCASS WEIGHT</h5>
                        <div className='flex flex-col h-auto space-y-0 justify-center items-center'>
                        <p className='font-light text-lg md:text-xl'>+420 Kgs</p>
                        </div>
                    </div>
                    <div className='w-full h-auto justify-center items-center flex flex-col space-y-4 mb-8' style={{flex: '0 0 50%'}}>
                        <h5 className='font-light text-xl md:text-2xl goldYellowText text-center' >CARCASS WEIGHT</h5>
                        <div className='flex flex-col h-auto space-y-0 justify-center items-center'>
                        <p className='font-light text-lg md:text-xl text-center'>+420 Kgs</p>
                        </div>
                    </div>
                    <div className='w-full h-auto justify-center items-center flex flex-col space-y-3 mb-4' style={{flex: '0 0 50%'}}>
                        <h5 className='font-light text-xl md:text-2xl goldYellowText text-center'>CUT SPECIFICATIONS</h5>
                        <div className='flex flex-col h-auto space-y-0 justify-center items-center'>
                        <p className='font-light text-lg md:text-xl text-center'>Ausmeat Standard</p>
                        </div>
                    </div>
                    <div className='w-full h-auto justify-center items-center flex flex-col space-y-4 mb-8' style={{flex: '0 0 50%'}}>
                        <h5 className='font-light text-xl md:text-2xl goldYellowText text-center'>MARBLING <br className='block md:hidden'/> SCORES</h5>
                        <div className='flex flex-col h-auto space-y-0 justify-center items-center'>
                        <p className='font-light text-lg md:text-xl text-center'>MB +4 to MB 9</p>
                        </div>
                    </div>
                </div>
              <div>
                
              </div>
            </div>

    </div>
  )
}

export default Banner5