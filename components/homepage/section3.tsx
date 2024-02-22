import Link from 'next/link';
import ShortList from "../cart/ship-sort-list"
import { getShips } from "@/server/actions/ships";



const Section_3 = async  ({title,comment,link,maks}:{title?:string,comment?:string,link?:boolean,maks:number}) => {

  const { ships } = await getShips();

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
    <ShortList data={ships} maksLimit={maks} />
  </section>
  )
}

export default Section_3