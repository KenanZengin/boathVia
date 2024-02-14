export interface ShipsCartProps{
  id: number,
  location: string,
  star: string | number,
  comment: number,
  category: string,
  capacity: number,
  hour_price: number,
  img_path: string
}


export interface OrganizationCartProps{
  id: number,
  kind: string,
  info: string,
  img_path: string
}
