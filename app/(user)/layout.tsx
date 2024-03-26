import Link from 'next/link'
import { IoIosArrowRoundBack } from 'react-icons/io'

const UserLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='user-layout'>
        <Link href={"/"} className='back-home'>
            <IoIosArrowRoundBack size={25} /> 
            Go to HomePage
        </Link>
        {children}
    </div>
  )
}

export default UserLayout