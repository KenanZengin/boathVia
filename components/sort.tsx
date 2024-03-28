"use client"

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";


const Sort = ({searchParams}:{searchParams:{[key:string]: string}}) => {

    const [open,setOpen] = useState<boolean>(false)
    const router = useRouter();
    const sortMenuRef = useRef<HTMLDivElement>(null);
  
     const goSort = (root?: string) => {
      setOpen(()=>false)
       router.push(
          `/ship-charter?location=${searchParams.location}${typeof searchParams.city !=="undefined" ? `&city=${searchParams.city}`:""}${root ? root : ""}`
       )
     }

     useEffect(() => {

      const handleOutsideClick = (event: Event) => {
        if (open &&  !sortMenuRef.current?.contains(event.target as HTMLElement)) {
          setOpen(false);
        }
  };

      document.addEventListener('click', handleOutsideClick);
  
      return () => document.removeEventListener('click', handleOutsideClick);
    }, [open]); 
  
   
  
    return (
      <div className="arrangement">
         
          <button onClick={() => setOpen(!open)}>
              
              {searchParams.sort==="high" ? "Highest Price" : searchParams.sort ==="low" ? "Lowest Price" : "Suggest Order"}
              <MdKeyboardArrowDown size={25} />
          </button>
          
          {open &&  <div className="sort" ref={sortMenuRef} >
              
              <button 
                onClick={() => goSort()}  
                className={`${searchParams.sort !== "high" && searchParams.sort !== "low" ? "actived" : ""}`}          
              >
              <span>Suggest Order</span>
              </button>
              <button 
                onClick={() => goSort("&sort=high")}
                className={`${searchParams.sort === "high" ? "actived" : ""}`}
              >
              <span>Highest Price</span>
              </button>
              <button 
                onClick={() => goSort("&sort=low")} 
                className={`${searchParams.sort === "low" ? "actived" : ""}`}
              >
              <span>Lowest Price</span>
              </button>
          </div>}
         
      </div>
    )
  }

export default Sort

