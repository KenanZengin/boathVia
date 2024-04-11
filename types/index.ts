export interface ShipsCartProps{
  id?: string,
  city: string,
  district: string,
  star: number,
  comment: number,
  category: string,
  capacity: number,
  hour_price: number,
  img_path: string,
  port: string[]
}

export interface ReservationCartProps extends ShipsCartProps{
  userId: string,
  shipId: string,
  people: number,
  duration: number,
  time: Date[],
  payment: boolean,
  status: boolean,
  record_date: Date,  
}


export interface OrganizationCartProps{
  id?: string,
  kind: string,
  info: string,
  img_path_2: string
}

export interface QuestionProps{
  category: string,
  subcategory:string,
  question:string,
  eventKey:string
}