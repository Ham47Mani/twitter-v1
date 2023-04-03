"use client";

import { usePathname} from 'next/navigation';
import Link from 'next/link';

type NavItemProps = {
  item: {
    icon: string,
    name: string,
    path: string
  }
}

const NavItem = ({item}: NavItemProps) => {
  const routePath= usePathname();
  
  return (
    <Link href={item.path} className={`nav-item ${routePath == item.path ? "link-active" : ""}`}>
      <i className={`${item.icon} text-xl`}></i>
      <span className='icon'>{item.name}</span>
    </Link>
  )
}

export default NavItem