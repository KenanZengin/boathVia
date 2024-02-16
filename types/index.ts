export interface ShipsCartProps{
  id?: string,
  city: string,
  district: string,
  star: number,
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
