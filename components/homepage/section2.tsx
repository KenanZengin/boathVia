
import { LuCalendarCheck } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { GoShieldLock } from "react-icons/go";


const Section_2 = () => {
  return (
    <section className='section_2'>
        <div className="carts">
            <div className="cart_2">
                <div className="cart_imj">
                    <LuCalendarCheck size={55} />
                </div>
                <div className="cart-info">
                    <p>Instant Booking</p>
                    <span>You can instantly rent boats using the calender feature</span>
                </div>
            </div>
            <div className="cart_2">
                <div className="cart_imj">
                    <LuWallet size={55} />
                </div>
                <div className="cart-info">
                    <p>Best Price Guarantee</p>
                    <span>Boat owners directly determine the prices at Teknevia</span>
                </div>
            </div>
            <div className="cart_2">
                <div className="cart_imj">
                    <GoShieldLock size={55} />
                </div>
                <div className="cart-info">
                    <p>Secure Reservation</p>
                    <span>The prepayment will not be credited to the boat owners account until your tour is complete</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_2