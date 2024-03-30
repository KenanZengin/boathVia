import moment from "moment";
import Link from "next/link";


const ReservationConfirmed = ({searchParams}:{searchParams:{[key:string]: string}}) => {

  const port = searchParams.port;
  const startTime = Number(searchParams.time);
  const momentTime = moment(startTime);
  const formatTime = momentTime.format("MMMM DD, HH:mm");
  
  
  
  


  return (
    <main className="reservation-confirm">
        <section className="success-payment">
            <h2>Your payment has been received successfully</h2>
            <div className="info">
                <p> On {momentTime.format("dddd")}, {momentTime.format("MMMM")} {momentTime.format("DD")}th at {momentTime.format("HH:mm")}, your ship will be waiting for you at Bebek Beach. </p>
            </div>
            <div className="other-pages">
                <Link href={"/reservation"}>
                    Go to Reservation Calendar
                </Link>
                <Link href={"/ship-charter?location=All"}>
                    Explore Boats
                </Link>
                <Link href={"/"}>
                    Go to Home Page
                </Link>
            </div>
        </section>
        <div className="confetti">
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
        </div>
    </main>
  )
}

export default ReservationConfirmed