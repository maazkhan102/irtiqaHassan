import logo from "../assets/IH-logo.svg";
import InstaIconWhite from '../assets/instaIconWhite.svg';

export default function Footer() {
  return (
    <footer className="bg-black grid md:grid-cols-4 gap-4 px-[40px] py-[70px]">
      <a href="https://irtiqahassan.com/">
            <img className="w-[150px]" src={logo} alt="Irtiqa Hassan" />
      </a>
      <div className="text-white pt-4 md:pt-0">
        <h3 className="text-[12px] uppercase pb-4">Quick Navigation</h3>
        <a href="https://irtiqahassan.com/pages/about-us" className="text-[14px] text-gray-400 block mb-2 leading-10">About Us</a>
        <a href="https://irtiqahassan.com/pages/contact" className="text-[14px] text-gray-400 block  mb-2">Contact</a>
      </div>
      <div className="text-white">
        <a className="text-[12px] uppercase">About</a>
        <h5 className="text-[14px] text-gray-400 pt-4 mb-2 w-[90%]">IHI has grown into a towering presence in the world of Interior design and Architecture.</h5>
      </div>
      <div className="text-white">
        <h3 className="text-[12px] uppercase pb-4">Follow us on Instagram</h3>
        <a href="https://www.instagram.com/irtiqahassaninc/">
           <img className="w-8 h-8" src={InstaIconWhite} alt="Instagram" />
        </a>
      </div>
    </footer>
  )
}