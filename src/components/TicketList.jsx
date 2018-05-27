import React from "react";
import Ticket from "./Ticket";

function TicketList(){
  return (
    <div>
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record!"/>
    <Ticket
      location="10B"
      names="Brenda and Ramiro"
      issue="Development server won't spin up."/>
    </div>
  );
}

export default TicketList;
