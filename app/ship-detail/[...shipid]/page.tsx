"use server"
import Link from "next/link";
import ShipImages from "@/components/ship-detail/images";
import { getShip } from "@/server/actions/ships"

import { FiShare } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";

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
            </article>
        </main>
    )
}

export default ShipsDetail