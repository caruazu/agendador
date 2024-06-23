import React from "react";

import "../styles/Event.css"

function Event({ event, onDelete }) {
    const startFormated = new Date(event.start).toLocaleString("pt-BR")
    const endFormated = new Date(event.end).toLocaleString("pt-BR")
    const createdAtFormated = new Date(event.created_at).toLocaleString("pt-BR")

    return (
        <div className="event-container">

            <p className="event-client">{event.client}</p>
            <p className="event-professional">{event.professional}</p>
            <p className="event-date">{startFormated}</p>
            <p className="event-date">{endFormated}</p>
            <p className="event-date">{createdAtFormated}</p>
            
            <button className="delete-button" onClick={() => onDelete(event.id)}>
                Apagar
            </button>
        </div>
    );
}

export default Event