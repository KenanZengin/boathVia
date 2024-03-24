import { currentUserId } from "./auth";


export async function getUserFavShipsId(){

    const userId = await currentUserId()
    const res = await fetch(`http://localhost:3000/api/ships/userFavShipsId?userId=${userId}`);
    const data = await res.json();
    
    return data
    
} 

export async function getUserFavShips(){

    const userId = await currentUserId()
    const res = await fetch(`http://localhost:3000/api/ships/userFavShip?userId=${userId}`);
    const data = await res.json();
    
    return data
    
} 
  

export async function getShipsData (location :string="All", sort?: string){

    const res = await fetch(`http://localhost:3000/api/ships/getShips?location=${location}&sort=${sort}`)
    const data = await res.json();
  
    return data
}
  

export async function getShipDetail(id :string){
    const res = await fetch(`http://localhost:3000/api/ships/getShip?id=${id}`)
    const data = await res.json();

    return data 
}


export async function getUserReservation(){

    const userId = await currentUserId()
    const res = await fetch(`http://localhost:3000/api/ships/reservation?userId=${userId}`);
    const data = await res.json();
    
    return data
    
} 
