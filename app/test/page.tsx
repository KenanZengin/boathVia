"use client"


import ShipCard from "@/components/cart/ship-card"
import { getShips } from "@/server/actions/ships"
import { ShipsCartProps } from "@/types"
import { useRouter } from "next/navigation"
import useSWR from "swr"

const Test = () => {


    const router = useRouter()
    const fetcher = async (url: string): Promise<ShipsCartProps[]> => {
        const res = await fetch(url);
        return res.json();
    };
    
    const { data , error , mutate } = useSWR<ShipsCartProps[]>('http://localhost:3000/api/getships', fetcher);


    
    if(error) return <div>...error</div>


    const test = () => {
        console.log("tekrar yüklendi");
        
        router.refresh();
        mutate(data => {
            // Verileri sırala
            return data?.sort((a, b) => a.hour_price - b.hour_price);
          })
    } 
  
    
    const test2 = () => {
        console.log("tekrar yüklendi");
        
        router.refresh();
        mutate(data => {
            // Verileri sırala
            return data?.sort((a, b) => b.hour_price - a.hour_price);
          })
    } 

    const test3 = () => {
        console.log("tekrar yüklendi");
        
        router.refresh();
        mutate(data=>{return data})
    } 
  
    
  return (
   <>
        <button onClick={test}>
        alçaktan yükseğe
        </button><br />
        <button onClick={test2}>
        yüksekten alçağa
        </button><br />
        <button onClick={test3}>
        filtre kaldır
        </button>
        <div style={{display:"grid",gridTemplateColumns:"1fr  1fr"}} >
        {data?.map((item:ShipsCartProps)=>(
            <ShipCard data={item} key={item.id} />
        ))}
    </div>
    
    </>
  )
}

export default Test