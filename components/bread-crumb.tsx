import Link from "next/link";


const BreadCrumb = ({searchParams}:{searchParams:{[key:string]: string}}) => {

  return (
    <div className="bread-crumb">
        <nav>
          <Link href={"/"}>
              <span>Teknevia.com</span>
          </Link>
          <Link href={"/ship-charter?location=All"}>
              <span>Yacht rental</span>
          </Link>
          {searchParams?.city && (
              <Link href={`/ship-charter?location=${searchParams.city}`}>
                <span>{searchParams.city}</span>
              </Link>
          )}
          {searchParams?.location && searchParams?.location !=="All" && (
            <Link href={`/ship-charter?location=${searchParams.location}&city=${searchParams?.city}`}>
              <span>{searchParams.location}</span>
            </Link>
          )}
        </nav>
    </div>
  )
}

export default BreadCrumb