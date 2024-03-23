import Link from 'next/link';
import ShortList from "../cart/ship-sort-list"
import { getShips } from "@/server/actions/ships";
import { currentUserId } from '@/hooks/server/auth';
import { getUserfavShip } from '@/hooks/server/favships';
import { getShipsData, getUserFavShipsId } from '@/hooks/server/getShips';



const Section_3 = async  ({title,comment,link,maks}:{title?:string,comment?:string,link?:boolean,maks:number}) => {

  const [ships,favShipsId] = await Promise.all([getShipsData(),getUserFavShipsId()])

  return (
    <section className='section_3' >
    <div className="head">
      <div className="title">
        <h3>{title}</h3>
        {comment && <p>{comment}</p>}
      </div>
      {link && (
          <Link href={"/ship-charter?location=All"}>
           See All &gt;
          </Link>
      )}
    </div>
    <ShortList data={ships} maksLimit={maks} userFavList={favShipsId?.ships?.ships}  userId={favShipsId.userId}/>
  </section>
  )
}

export default Section_3