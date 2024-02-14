import Image from 'next/image';
import Link from 'next/link'
import { 
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaYoutube, 
    FaTiktok, 
    FaPinterest, 
    FaWhatsapp 
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
        <div className="socials">
            <Link href={"/"}>
                <FaFacebookF size={20} />
            </Link>
            <Link href={"/"}>
                <FaInstagram size={20} />
            </Link>
            <Link href={"/"}>
                <FaLinkedin size={20} />
            </Link>
            <Link href={"/"}>
                <FaYoutube size={20} />
            </Link>
            <Link href={"/"}>
                <FaTiktok size={20} />
            </Link>
            <Link href={"/"}>
                <FaPinterest size={20} />
            </Link>
            <Link href={"/"}>
                <FaWhatsapp size={20} />
            </Link>
        </div>
        <div className="link-groups">
            <div className='links'>
                <div className="title">Teknevia</div>
                
                <nav>
                    <Link href={"/"}>
                        About Us
                    </Link>
                
                
                    <Link href={"/"}>
                        Press Media
                    </Link>
                
                
                    <Link href={"/"}>
                        Help Center
                    </Link>
                
                
                    <Link href={"/"}>
                        Terms and Conditions
                    </Link>
                
                
                    <Link href={"/"}>
                        Cancellation / Refund Process
                    </Link>
                
                
                    <Link href={"/"}>
                        KVKK - Clarification Text
                    </Link>
                </nav>
                <div className="infos">
                    <Link href={"/"}>
                        <span>
                            Blog
                        </span>
                    </Link>
                    <Link href="mailto:zenginkenan7@gmail.com">
                       zenginkenan7@gmail.com
                    </Link>
                    <Link href="tel:+9055555555">
                        +90 555 555 55 55 
                    </Link>
                    <div className="downloads">
                        <Image src={"/img/basic/google.png"} alt="google" width={128} height={44} />
                        
                    </div>

                </div>
            </div>
            <div className='links'>
                <div className="title">Boat Organizations</div>
                
                <nav>
                    <Link href={"/"}>
                        Birthday on Boat
                    </Link>
                
                    <Link href={"/"}>
                        Marriage Proposal on Yacht
                    </Link>
                       
                    <Link href={"/"}>
                        Valentines Day On Yacht
                    </Link>
                
                    <Link href={"/"}>
                        Wedding on Boat
                    </Link>
                
                
                    <Link href={"/"}>
                        Bachelor/Bachelorette Party on Boat
                    </Link>
                               
                    <Link href={"/"}>
                        Baby Shower on Yacht
                    </Link>

                    <Link href={"/"}>
                        Anniversary on Boat
                    </Link>

                    <Link href={"/"}>
                        Engagement Henna Pary on Boat
                    </Link>

                    <Link href={"/"}>
                        Graduation Boat Party on Boat
                    </Link>

                    <Link href={"/"}>
                        After Part
                    </Link>

                    <Link href={"/"}>
                        Private Boat Parties In Istanbul on Boat
                    </Link>
                </nav>
            </div>
            <div className='links'>
                <div className="title">Popular Yacht & Boat Rental Locations</div>
                
                <nav>
                    <Link href={"/"}>
                        Istanbul Yacht Rental
                    </Link>
                
                    <Link href={"/"}>
                        Bodrum Yacht Rental
                    </Link>
                       
                    <Link href={"/"}>
                        Gocek Yacht Rental
                    </Link>
    
                </nav>
            </div>
            <div className='links'>
                <div className="title">Boat Options</div>
                
                <nav>
                    <Link href={"/"}>
                        Rental Boats
                    </Link>
                
                    <Link href={"/"}>
                        Rental Boats Suitable for Winter
                    </Link>
                       
                    <Link href={"/"}>
                        Gulet Charter
                    </Link>

                    <Link href={"/"}>
                        Motor Yacht Charter
                    </Link>

                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer