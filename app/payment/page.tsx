import { getUserCalendar } from '@/server/data/usercalendar'
import React from 'react'

const Payment = async ({searchParams}:{searchParams:{[key:string]: string}}) => {

  // const userCalendar = await getUserCalendar(searchParams.id);
  // console.log({userCalendar});
  

  return (
    <div>
      {searchParams.id}
    </div>
  )
}

export default Payment