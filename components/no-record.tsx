import Image from 'next/image';
import Link from 'next/link';

import noFound from "../public/img/basic/no-found.png"


const NoRecord = ({
  message,
  pathMessage
}:{
  message:string,
  pathMessage:string
}) => {

  return (
    <div className="no-record">
      <div className='no-record-wrapper'>
        <p>{message}</p>
        <span>{pathMessage}</span>
        <div className="record-img">
          <Image src={noFound} alt="nofound" priority/>
        </div>
        <Link href={"/chip-charter?location=All"}>
        Explore Boats
        </Link>
      </div>
    </div>
  )
}

export default NoRecord