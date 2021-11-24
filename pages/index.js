import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Player from "../components/Player";

export default function Home() {
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    try {
      const response = await axios.get("/api/getVideosData");
      setVideosData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      {videosData.length > 0 ? <Player videosData={videosData} /> : ""}
    </div>
  );
}
