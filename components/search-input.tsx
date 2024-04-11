"use client"
import Link from "next/link";
import { CSSProperties, memo, useEffect, useRef, useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { TfiLocationArrow } from "react-icons/tfi";


interface MyCustomCSS extends CSSProperties {
        '--wV': string;
}


const SearchInput = ({ widthValue, location, pathname }: { widthValue?: number, location?: string | null, pathname?: string }) => {


        const [open, setOpen] = useState<boolean>(false);
        const toggleMenu = () => setOpen(!open);

        const locations = ["İstanbul", "Beykoz", "Karakoy", "Kurucesme", "AnadoluHisari", "Eminonu", "Istinye", "Bebek"];


        const menuRef = useRef<HTMLInputElement>(null);

        useEffect(() => {

                const handleOutsideClick = (event: Event) => {
                        if (open && !menuRef.current?.contains(event.target as HTMLElement)) {
                                setOpen(false);
                        }
                };

                document.addEventListener('click', handleOutsideClick);

                return () => document.removeEventListener('click', handleOutsideClick);
        }, [open]);



        return (
                <div className={`search_location full-search ${pathname ? "full-search" : ""}`}>
                        <button
                                onClick={toggleMenu}
                                //className={` search_location_select ${open ? "shaowed" : ""}`}  
                                className={` search_location_select`}
                                title="Select Location"
                        >

                                <span>  {
                                        locations.some((item) => item === location) ? location : "Where dou you want to board the boat?"
                                }
                                </span>

                        </button>
                        {open && <div
                                className="search_location_list"
                                ref={menuRef}
                                onClick={toggleMenu}
                        >
                                <div className="lists_items"  >
                                        <div className="lists_items_header">
                                                <TfiLocationArrow size={22} />
                                                <Link href={"/ship-charter?location=İstanbul"}>
                                                        <span>Istanbul</span>
                                                </Link>
                                        </div>

                                        <div className="locations">
                                                {locations.map((location, index) => (
                                                        <Link key={index} href={`/ship-charter?location=${location}`}>
                                                                {location}
                                                        </Link>
                                                ))}
                                        </div>

                                </div>
                        </div>
                        }
                        <Link href={"/ship-charter?location=All"} className="search-all">
                                <IoSearchCircle size={50} />
                        </Link>
                </div>
        )
}

export default SearchInput

