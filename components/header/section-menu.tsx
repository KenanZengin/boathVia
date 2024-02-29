import { useCurrentUser } from '@/hooks/client/use-auth'
import Link from 'next/link'

const SectionMenu = () => {

  const user = useCurrentUser();
  console.log("user",user);
  

  return (
    <>
        <Link href="/auth/login">
            Login
        </Link>
        <Link href="/auth/register">
            Register
        </Link>
        
        <Link href="/">
            Help Center
        </Link>
    </>
  )
}

export default SectionMenu