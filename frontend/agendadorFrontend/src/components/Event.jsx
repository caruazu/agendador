import React from "react";

function Event({ event, onDelete }) {
    const startFormated = new Date(event.start).toLocaleString("pt-BR")
    const endFormated = new Date(event.end).toLocaleString("pt-BR")
    const createdAtFormated = new Date(event.created_at).toLocaleString("pt-BR")

    return (
        <div className="event-container">
            <p className="event-client">{event.title}</p>
            <p className="event-professional">{event.professional}</p>
            <p className="event-start">{startFormated}</p>
            <p className="event-end">{endFormated}</p>
            <p className="event-created_at">{createdAtFormated}</p>
            
            <button className="delete-button" onClick={() => onDelete(event.id)}>
                Delete
            </button>
        </div>
    );
}

export default Event