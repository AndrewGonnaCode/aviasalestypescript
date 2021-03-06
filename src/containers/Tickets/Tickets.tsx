import React, { useEffect} from 'react';
import classes from './Tickets.module.css';
import Tabs from "../Tabs/Tabs";
import Ticket from '../../components/Ticket/Ticket';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useAction';
import { TicketType, FilterType } from '../../types/main';


function checkTicket(filters:Array<FilterType>, ticket:TicketType) {
    let value:boolean | void = false;
    filters.forEach(filter => {
        if (filter.checked) {
            value = value || filter.handler(ticket);
        }
    });
    return value;
}

const Tickets:React.FC = () => {
     const {tickets,tabs,filters, loading, searchId} = useTypedSelector(state => state.tickets)
     const {changeSeacrhId,subscribe} = useActions()
    
    const  renderTickets = () => {
        const tickets = getTickets(5);
        return tickets.map((ticket:TicketType, id:number) => <Ticket key={id} ticket={ticket}/>);
    };

    const getTickets = (value:number) => {
        let validTickets = [];
        let index = 0;

        while(validTickets.length !== value && index < tickets.length) {
            if (checkTicket(filters, tickets[index])) {
                validTickets.push(tickets[index]);
            }
            index++;
        }
         
        const sort =  tabs.find(tab => tab.checked).sort;
         
       
        return sort(validTickets);
    };
   
    useEffect(()=>{
        changeSeacrhId()
    },[])

    useEffect(()=>{
        subscribe(searchId)
    },[searchId])

        return (
            <div className={classes.Tickets}>
                    <Tabs />

                    <div className={classes.Container}>
                        {
                              loading ?
                                <p>Загрузка...</p>
                                :
                                renderTickets()
                        }
                    </div>
            </div>
            )

    }

    export default Tickets
