"use server"

import Link from "next/link";
import Image from "next/image";
import ShipImages from "@/components/ship-detail/images";
import { getShip } from "@/server/actions/ships"

import { TfiTimer } from "react-icons/tfi";
import { FiShare } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";
import { TiStopwatch } from "react-icons/ti";

const ShipsDetail = async ({params}:{params:{shipid:string}}) => {

    const {ship} = await getShip(params.shipid.toString());



    return (
        <main className="ship-detail" style={{"height":"200vh"}}>
            <article className="ship-detail-wrapper">
                <div className="ship-head">
                    <div className="ship-path">
                        <div className="bread-crumb">
                            <nav>
                                <Link href={"/"}>
                                    <span>Teknevia.com</span>
                                </Link>
                                <Link href={"/ship-charter?location=All"}>
                                    <span>Yacht rental</span>
                                </Link>
                            
                                <Link href={`/ship-charter?location=${ship?.city}`}>
                                <span>{ship?.city}</span>
                                </Link>
                                
                                <Link href={`/ship-charter?location=${ship?.district}&city=${ship?.city}`}>
                                <span>{ship?.district}</span>
                                </Link>

                                <Link href={`/ship-charter?location=All`}>
                                <span>{ship?.category}</span>
                                </Link>

                                <Link href={`#`}>
                                    <span>Custom made 23m Motor Yacht</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="ship-title">
                        <div className="name">
                            <h1>
                                Rental Custom made 23m Motor Yacht - 130
                            </h1>
                            <p>
                                {ship?.district}, {ship?.city}
                            </p>
                        </div>
                        <div className="share">
                            <button>
                                <FiShare size={20} />
                                Share
                            </button>
                            <button>
                                <IoIosHeartEmpty size={20} />
                                Save
                            </button>
                        </div>

                    </div>
                </div>
                <ShipImages img_path={ship?.img_path} />
                <div className="ship-info">
                    <div className="data">
                        <div className="capacity">
                            <div className="info">
                                <p>Luxury Motoryacht - Owner: Halil</p>
                                <span>Dining Capacity: {ship?.capacity} - Full Capacity: {ship?.capacity}</span>
                            </div>
                            <Image src={ship?.img_path || ""} alt="profile" width={48} height={48}  />
                        </div>
                        <div className="terms">
                            <h2>Rental Terms</h2>
                            <div className="ters_p">
                                <span> <BsLightningChargeFill size={30} style={{color: "#178a87"}} /> You can instantly reserve this boat without waiting for a response</span>
                                <span> <TfiTimer size={30}/> Minimum rental period: 1 hours</span>
                                <span><TiStopwatch size={30}/> Minimum rental period on special days: 2 hours</span>
                            </div>
                        </div>
                        <div className="terms">
                            <h2>Terms of use</h2>
                            <div className="ters_p">
                                <span> Organization company from outside can be brought in</span>
                                <span>  Photographers can be brought in from outside</span>
                                <span>Use of cabins is prohibited</span>
                                <span>Sound system is available and you can use it</span>
                                <span>Alcohol can be consumed</span>
                                <span>Alcohol can be brought from outside</span>
                            </div>
                        </div>
                        <div className="terms">
                            <h2>Facilities</h2>
                            <div className="ters_p">
                                <span>Audio System with Usb Input</span>
                                <span>Bluetooth Audio System</span>
                                <span>Outdoor Speaker</span>
                                <span>Audio System with Aux Input</span>
                                <span>Indoor Speaker</span>
                                <span>WC</span>
                            </div>
                        </div>
                        <div className="terms">
                            <h2>Safety Equipments</h2>
                            <div className="ters_p">
                                <span>Life Buoy</span>
                                <span>Danger Flare</span>
                                <span>First Aid Supplies</span>
                                <span>Life Vest</span>
                                <span>Fire Extinguisher</span>
                                <span>Safety Rope</span>
                                <span>Indoor Area Available</span>
                                <span>Teak Veneer Deck</span>
                            </div>
                        </div>
                        <div className="summary">
                            <p>With the professional service we have been providing on the Bosphorus for 15 years, we guarantee you unforgettable moments by prioritizing safety and comfort. 🌊</p>
                            <p>To ensure that everything is ready when you join the tour, you can choose the food menu you want and extras such as the chapter team, professional photo and video shooting, volcano show and laser show on the Bosphorus before making your reservation. 🍽️ 🎊When you bring your own food and drinks, you must choose table service to use materials such as plates, glasses, ice and refrigerator on the boat. There is no need to select table service for fewer than 5 people. Additionally, we offer tea and coffee on our boat. ☕</p>
                            <p>It is our mission to welcome our guests with the highest quality. We are determined to constantly improve ourselves and present a higher quality event by evaluating the comments received. Thank you in advance for choosing us. You can rent it in any way, with or without meals.
                            We would be happy to see you with our experienced and friendly team for a pleasant tour on the Bosphorus. 😊
                            </p>
                        </div>
                    </div>
                    <div className="price">
                        
                    </div>
                </div>
            </article>
        </main>
    )
}

export default ShipsDetail