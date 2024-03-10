import Image from 'next/image';
import Avatar from '../../../public/avatar.png'
import { Logo } from '../Logo'
import { TbBell, TbSearch } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <header className="w-screen h-16 flex gap-10 items-center px-[54px] justify-between sticky top-0 bg-gradient-to-t from-[#141414] to-black">
      <nav className='flex list-none gap-4 text-sm items-center'>
        <a href={"/"}><Logo /></a>
        <li className="hover:text-[#e5e5e5] duration-200"><a href={"/"}>Início</a></li>
        <li className="hover:text-[#e5e5e5] duration-200"><a href="#">Séries</a></li>
        <li className="hover:text-[#e5e5e5] duration-200"><a href="#">Filmes</a></li>
        <li className="hover:text-[#e5e5e5] duration-200"><a href="#">Bombando</a></li>
        <li className="hover:text-[#e5e5e5] duration-200"><a href="#">Minha lista</a></li>
        <li className="hover:text-[#e5e5e5] duration-200"><a href="#">Navegar por idiomas</a></li>
      </nav>
      <div className="flex items-center gap-5">
        <a href="#"><TbSearch size={24} /></a>
        <span className="">User</span>
        <TbBell size={24} />
        <Image src={Avatar} alt="Avatar" width="32" height="32" className="rounded-sm" />
        <IoMdArrowDropdown className="ml-[-10px]" />
      </div>
    </header >
  )
}
