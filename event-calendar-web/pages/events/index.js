import React from "react";
import { parseISO, format } from "date-fns";

export async function getServerSideProps() {
  try {
    const res = await fetch("http://127.0.0.1:1337/api/events");
    const response = await res.json();
    const events = response.data.map((event) => event.attributes);
    console.log("Fetched events:", events);
    return { props: { events } };
  } catch (error) {
    console.error("Error fetching events:", error);
    return { props: { events: [] } };
  }
}

export default function Events({ events }) {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => {
          const eventDate = event.Date ? parseISO(event.Date) : null;
          const formattedDate = eventDate
            ? format(eventDate, "PPpp")
            : "Date not available";

          return (
            <li key={event.id}>
              <h2>{event.Title}</h2>
              <p>{formattedDate}</p>
              <p>{event.Location}</p>
              <div dangerouslySetInnerHTML={{ __html: event.Description }} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
