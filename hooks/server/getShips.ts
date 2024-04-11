import { currentUserId } from "./auth";

export async function getUserFavShipsId(){

    const userId = await currentUserId()
    const res = await fetch(`${process.env.BASE_URL}/api/ships/userFavShipsId?userId=${userId}`);
    const data = await res.json();
    
    return data;
    
} 

export async function getUserFavShips(){

    const userId = await currentUserId()
    const res = await fetch(`${process.env.BASE_URL}/api/ships/userFavShip?userId=${userId}`);
    const data = await res.json();
    
    return data;
    
} 
  

export async function getShipsData (location :string="All", sort?: string){

    const res = await fetch(`${process.env.BASE_URL}/api/ships/getShips?location=${location}&sort=${sort}`)

    const data = await res.json();
  
    return data;
}
  

export async function getShipDetail(id :string){
    const res = await fetch(`${process.env.BASE_URL}/api/ships/getShip?id=${id}`)
    const data = await res.json();

    return data;
}


export async function getUserReservation(){

    const userId = await currentUserId()
    const res = await fetch(`${process.env.BASE_URL}/api/ships/reservation?userId=${userId}`);
    const data = await res.json();
    
    return data;
    
} 

export async function getAllServices(){
    
    const res = await fetch(`${process.env.BASE_URL}/api/ships/getServices?location=All`);
    const data = await res.json();
  
    return data;
}