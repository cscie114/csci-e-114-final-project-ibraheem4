import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await fetch("http://127.0.0.1:1337/api/events");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Error fetching events" });
  }
}
