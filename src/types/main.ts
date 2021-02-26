export interface MainState {
    tickets:Array<TicketType>;
    searchId:number;
    activeTickets:Array<TicketType>;
    loading:boolean;
    filters:Array<FilterType>;
    tabs:Array<TabType>
}



export interface FilterType{
    id: number,
    text: string,
    checked: boolean,
    handler: (ticket?:TicketType)=>void
}


export interface TabType {
    id: number,
    text: string,
    checked: boolean,
    sort:(tickets:Array<TicketType>)=>Array<TicketType>
}


export interface TicketType {
    price: number
    carrier: string
    segments: [
      {
        origin: string
        destination: string
        date: string
        stops: string[]
        duration: number
      },
      {
        origin: string
        destination: string
        date: string
        stops: string[]
        duration: number
      }
    ]
  }

export enum MainActionTypes {
   CHANGE_FIlTER = 'CHANGE_FIlTER',
   CHANGE_TABS = 'CHANGE_TABS',
   CHANGE_SEARCHID = 'CHANGE_SEARCHID',
   CHANGE_TICKETS = 'CHANGE_TICKETS',
   CHANGE_ACTIVE_TICKETS = 'CHANGE_ACTIVE_TICKETS'
}

interface ChangeSearchId {
    type:MainActionTypes.CHANGE_SEARCHID,
    payload:number
}
interface ChangeFilter {
    type:MainActionTypes.CHANGE_FIlTER,
    payload:FilterType[]
}
interface ChangeTabs {
   type:MainActionTypes.CHANGE_TABS,
   tabs:TabType[]
}
interface ChangeTickets {
    type:MainActionTypes.CHANGE_TICKETS,
    payload:TicketType[]
}
export type MainAction = ChangeFilter | ChangeSearchId | ChangeTabs | ChangeTickets