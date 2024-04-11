import ReservationCard from '@/components/cart/reservation-card';
import NoRecord from '@/components/no-record';
import { getUserReservation } from '@/hooks/server/getShips'


const Reservation = async () => {

  const data = await getUserReservation();
  

  return (
    <main className="reservation">
      <div className="title-info">
        <span>My Reservations</span>
      </div>
      {data.length > 0 
        ?<ReservationCard data={data} />
        :<NoRecord message={"You haven't added any boats to your booking calendar yet"} pathMessage={"You must select a time from the calendar to make the reservation.."} /> }
    </main>
  )
}

export default Reservation