
import Image from 'next/image';
import moment from 'moment';
import PaymentForm from '@/components/forms/payment-form';
import { getUserCalendar } from '@/server/data/usercalendar'
import { BsInfoCircle } from "react-icons/bs";


const Payment = async ({searchParams}:{searchParams:{[key:string]: string}}) => {

  const userCalendar = await getUserCalendar(searchParams.id);

  const date_1 = moment(userCalendar?.time[0]);
  const date_start = date_1.subtract(3,"hours");

  const date_2 = moment(userCalendar?.time[userCalendar.time.length - 1]);
  const date_end = date_2.subtract(2,"hours");

  
  return (
   <main className="payment">
      <section className="payment-wrapper">
        <div className="payment-id">
          <h3>Payment for offer {userCalendar?.id.slice(0,5)}</h3>
        </div>
        <div className="payment-info">
          <div className="reservation-info">         
            <div className="reservation-detail">
              <p>
                  <span> Departure Port</span>
                  <span>: {userCalendar?.port}</span>
              </p>
              <p>
                  <span> Arrival Port</span>
                  <span>: {userCalendar?.port}</span>
              </p>
              <p>
                  <span> Starting Date</span>
                  <span>: {date_start.format('DD MMM YYYY ddd HH:mm')}</span>
              </p>
              <p>
                  <span> End Date</span>
                  <span>: {date_end.format('DD MMM YYYY ddd HH:mm')}</span>
              </p>
              <p>
                  <span> Number of People</span>
                  <span>: {userCalendar?.people}</span>
              </p>
            </div>
            <div className="reservation-advice">
              <p><BsInfoCircle size={20} />You can cancel your reservation in this vehicle until the last 168 hour.</p>
              <p><BsInfoCircle size={29} />As long as it does not conflict with the vehicle&apos;s cancellation policy, you can only cancel free of charge within 3 days from the date of booking. If the reservation is less than 3 days away, no free cancellation is possible.</p>
            </div>
            <PaymentForm   />
          </div>
          <div className="reservation-ship-card">
            <div className="reservation-ship-card-wrapper">
              <div className="reservation-ship-img">
                <Image src={userCalendar?.img_path || ""} alt="reservation ship" fill={true}  />
              </div>
              <div className="ship-name">
                Custom made 23m Motor Yacht
              </div>
              <div className="price-calculate">
                <div className="calc">
                    <span>TRY {(userCalendar?.hour_price)?.toLocaleString("en-EN")} x {userCalendar?.duration} hours</span>
                    <span>TRY {userCalendar?.hour_price && (userCalendar?.hour_price * userCalendar?.duration).toLocaleString("en-EN")}</span>
                </div>
                <div className="total">
                    <p>Total amount</p>
                    <p>TRY {userCalendar?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number(userCalendar?.hour_price * userCalendar?.duration))}</p>
                </div>
                <div className="total">
                    <p>Online prepayment amount</p>
                    <p>TRY {userCalendar?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number((userCalendar?.hour_price * (0.4 * userCalendar?.duration)).toFixed(2)))}</p>
                </div>
                <div className="total">
                    <p>Amount to be paid on board</p>
                    <p>TRY {userCalendar?.hour_price && new Intl.NumberFormat("en-IN",{ minimumFractionDigits: 2 }).format(Number((userCalendar?.hour_price * (0.6 * userCalendar?.duration)).toFixed(2)))}</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
   </main>
  )
}

export default Payment