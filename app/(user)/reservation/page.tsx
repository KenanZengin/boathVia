import ReservationCard from '@/components/cart/reservation-card';
import { getUserReservation } from '@/hooks/server/getShips'
import React from 'react'

const Reservation = async () => {

  const data = await getUserReservation();
  console.log({data});
  

  return (
    <main className="reservation">
      <div className="title-info">
        <span>My Reservations</span>
      </div>
      <ReservationCard data={data} />
    </main>
  )
}

export default Reservation