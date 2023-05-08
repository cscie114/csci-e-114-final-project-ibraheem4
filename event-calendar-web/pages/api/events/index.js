import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EVENTS_API_URL}/api/events`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Error fetching events" });
  }
}
