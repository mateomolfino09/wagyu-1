import Head from 'next/head';
import React, { RefObject, useState } from 'react'
import Banner1 from '../../components/Banner1';
import Banner2 from '../../components/Banner2';
import Banner3 from '../../components/Banner3';
import Header from '../../components/Header'
import Banner4 from '../../components/Banner4';
import Footer from '../../components/Footer';
import Banner5 from '../../components/Banner5';
import Banner6 from '../../components/Banner6';


const Index = () => {
  const [refToPioneers, setRefToPioneers] = useState<RefObject<HTMLDivElement> | null>(null);
  const [refToProduct, setRefToProduct] = useState<RefObject<HTMLDivElement> | null>(null);
  const [refToFacts, setRefToFacts] = useState<RefObject<HTMLDivElement> | null>(null);
  const [refToContact, setRefToContact] = useState<RefObject<HTMLDivElement> | null>(null);

function scrollToPioneers() {
  if(refToPioneers?.current && window) {
    const yOffset = -90; 
    const y = refToPioneers?.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
    return
    // return refToModa?.current.scrollIntoView({behavior: 'smooth'})
  }
}

function scrollToProduct() {
  if(refToProduct?.current && window) {
    const yOffset = -90; 
    const y = refToProduct?.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
    return
    // return refToModa?.current.scrollIntoView({behavior: 'smooth'})
  }
}

function scrollToContact() {
  if(refToContact?.current && window) {
    const yOffset = -90; 
    const y = refToContact?.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
    return
    // return refToModa?.current.scrollIntoView({behavior: 'smooth'})
  }
}

function scrollToFacts() {
  if(refToFacts?.current && window) {
    const yOffset = -90; 
    const y = refToFacts?.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
    return
    // return refToModa?.current.scrollIntoView({behavior: 'smooth'})
  }
}

function setRefToPioneersSend(ref: RefObject<HTMLDivElement>) {
  setRefToPioneers(ref)
}
function setRefToProductSend(ref: RefObject<HTMLDivElement>) {
  setRefToProduct(ref)
}

function setRefToContactSend(ref: RefObject<HTMLDivElement>) {
  setRefToContact(ref)
}

function setRefToFactsSend(ref: RefObject<HTMLDivElement>) {
  setRefToFacts(ref)
}

  return (
    <div className="h-full w-full">
            <Head>
            <title>Wagyu</title>
            <meta name="description" content="Wagyu App" />
            <link rel="icon" href="/favicon.ico" />
          </Head>   
            <Header scrollToPioneers={scrollToPioneers} scrollToProduct={scrollToProduct} scrollToContact={scrollToContact} scrollToFacts={scrollToFacts}/>
            <main className='h-full w-full lg:space-y-24 lg:pl-16'>
              <Banner1 img={'/images/wagyu/fondo_imagen_Banner_Principal.jpg'}/>
              <Banner2 img={'/images/wagyu/fondo_imagen_Bloque02.jpg'}/>
              <Banner3 img={'/images/wagyu/fondo_imagen_Bloque03.jpg'} setRefToProductSend={setRefToProductSend}/>
              <Banner4 img={'/images/wagyu/fondo_imagen_Bloque04.jpg'} setRefToPioneersSend={setRefToPioneersSend}/>
              <Banner5 img={'/images/wagyu/fondo_imagen_Bloque05.jpg'} setRefToFactsSend ={setRefToFactsSend}/>
              <Banner6 img={'/images/wagyu/fondo_imagen_Bloque05.jpg'}/>
            </main>
            <Footer scrollToPioneers={scrollToPioneers} scrollToProduct={scrollToProduct} scrollToContact={scrollToContact} scrollToFacts={scrollToFacts}/>

    </div>

  )
}

export default Index