import React from "react";

export async function getServerSideProps() {
  try {
    const res = await fetch("/api/events");
    const events = await res.json();
    console.log("Fetched events:", events); // Add this line to log the fetched events
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
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
