import Link from 'next/link';
import NavItem from '../navItem/NavItem';
import { navData } from '../../../public/assets/data/data';
import UserIcon from '../userIcon/UserIcon';

type Props = {
  
}

const Navbar = (props: Props) => {
  return (
    <div className="xl:w-1/5 w-20 h-screen flex flex-col xl:pr-4">
      {/* ====== Logo ====== */}
      <Link href="/" className='link my-2 text-blue-400'>
        <i className="fa-brands fa-twitter text-4xl	"></i>
      </Link>

      {/* ====== Navbar ====== */}
      <nav className='mt-5'>
        {
          navData.map((item, i) => (
            <NavItem key={i} item={item}/>
          ))
        }
      </nav>

      {/* ====== Button ====== */}
      <Link href="" className='btn btn-blue'>
        <i className="fa-solid fa-feather text-xl block xl:hidden"></i>
        <span className='icon xl:ml-0'>tweet</span>
      </Link>

      {/* ====== User Icon ====== */}
      <UserIcon/>
    </div>
  )
}

export default Navbar