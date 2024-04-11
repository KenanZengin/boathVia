import Link from "next/link";
import moment from "moment";


const ReservationConfirmed = ({searchParams}:{searchParams:{[key:string]: string}}) => {

  const port = searchParams.port;
  const momentTime = Number(searchParams.time);
  const startTime = moment(momentTime);

  
  return (
    <main className="reservation-confirm">
        <section className="success-payment">
            <h2>Your payment has been received successfully</h2>
            <div className="info">
                <p> On {startTime.format("dddd")}, {startTime.format("MMMM")} {startTime.format("DD")}th at {startTime.format("HH:mm")}, your ship will be waiting for you at {port} Beach. </p>
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