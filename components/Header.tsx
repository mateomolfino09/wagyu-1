import { MagnifyingGlassIcon, BellIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { RefObject, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {AiOutlineUser} from 'react-icons/ai'


const Header = ({ scrollToPioneers, scrollToProduct, scrollToContact, scrollToFacts }: any) => {
  const router = useRouter();
  const [userState, setUserState] = useState<any>(null); 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  return (
    // <header className={`${isScrolled && "bg-[#141414]"}`}>
    <header className={`bg-white`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href={'/'}>
        <img
          alt='icon image'
          src="/images/wagyu/Wagyu_logo.png"
          width={400}
          height={400}
          className="cursor-pointer object-contain transition duration-500 hover:scale-105 opacity-90 hover:opacity-100"
        />
        </Link>
      </div>
      <div className="flex items-center space-x-12 text-sm font-light">
      <ul className="hidden space-x-8 md:flex">
      {scrollToPioneers != null ? <li onClick={scrollToPioneers} className="headerLink">WAGYU PIONEERS</li> : <Link href={'/'}><li className="headerLink">WAGYU PIONEERS</li></Link>}
        {scrollToProduct != null ? <li onClick={scrollToProduct} className="headerLink">PRODUCT</li> : <Link href={'/'}><li className="headerLink">PRODUCT</li></Link>}
        {scrollToFacts != null ? <li onClick={scrollToFacts} className="headerLink">FACTS</li> : <Link href={'/'}><li className="headerLink">FACTS</li></Link>}
        {scrollToContact != null ? <li onClick={scrollToContact} className="headerLink">CONTACT US</li> : <Link href={'/'}><li className="headerLink">CONTACT US</li></Link>}        
        </ul>
      </div>
      
    </header>
  );
};

export default Header;
