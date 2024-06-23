import { useState, useEffect } from "react";
import api from "../api";
import Event from "../components/Event";

import "../styles/Home.css"

function Home() {
    const [events, setEvents] = useState([]);

    const [client, setClient] = useState("");
    const [professional, setProfessional] = useState("João");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = () => {
        api
        .get("/api/events/")
        .then((res) => res.data)
        .then((data) => {
            setEvents(data);
            console.log(data);
        })
        .catch((err) => alert(err));
    };

    const deleteEvent = (id) => {
        api
        .delete(`/api/events/delete/${id}/`)
        .then((res) => {
            if (res.status === 204) alert("Evento excluído");
            else alert("Falha ao excluir o evento");
            getEvents();
        })
        .catch((error) => alert(error));
    };

    const createEvent = (e) => {
        e.preventDefault();
        api
        .post("/api/events/", {
            client,
            professional,
            start,
            end,
        })
        .then((res) => {
            if (res.status === 201) alert("Evento Criado");
            else alert("Falha ao criar o evento");
            getEvents();
        })
        .catch((err) => alert(err));
    };

    return(
    <div>
        <div>
            <h2>Eventos: </h2>
            {events.map((event) => (
                <Event event={event} onDelete={deleteEvent} key={event.id} />
            ))}
        </div>
        <h2>Criar um Evento</h2>
        <form onSubmit={createEvent}>
            <label htmlFor="client">Cliente: </label>
            <input
                type="text"
                id="client"
                name="client"
                required
                onChange={(e) => setClient(e.target.value)}
                value={client}
            />
            <br />

            <label htmlFor="professional">Profissional: </label>
            <select
                id="professional"
                name="professional"
                required
                value={professional}
                onChange={(e) => setProfessional(e.target.value)}
            >
                <option value="João">João</option>
                <option value="Maria">Maria</option>
            </select>
            <br />


            <label htmlFor="start">Inicio: </label>
            <input
                type="datetime-local"
                id="start"
                name="start"
                required
                value={start}
                onChange={(e) => setStart(e.target.value)}
            />
            <br />

            <label htmlFor="end">Final: </label>
            <input
                type="datetime-local"
                id="end"
                name="end"
                required
                value={end}
                onChange={(e) => setEnd(e.target.value)}
            />

            <br />
            <input type="submit" value="Criar"></input>
        </form>
    </div>
    );
}

export default Home