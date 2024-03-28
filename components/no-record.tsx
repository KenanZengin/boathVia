import Image from 'next/image';
import Link from 'next/link';

import noFound from "../public/img/basic/no-found.png"

const NoRecord = ({message,pathMessage}:{message:string,pathMessage:string}) => {
  return (
    <div className='no-record'>
        <p>{message}</p>
        <span>{pathMessage}</span>
        <Image src={noFound} alt="nofound"/>
        <Link href={"/chip-charter?location=All"}>
        Explore Boats
        </Link>
  </div>
  )
}

export default NoRecord