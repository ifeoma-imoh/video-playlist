import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Player({ videosData }) {
  const formattedData = videosData.map((x) => x.public_id);
  useEffect(() => {
    const cld = window.cloudinary.Cloudinary.new({
      cloud_name: "ifeomaimoh",
    });
    if (videosData) {
      const player = cld.videoPlayer("example-player", {
        playlistWidget: {
          direction: "horizontal",
          total: formattedData?.length,
        },
      });
      player.playlist(formattedData, {
        autoAdvance: true,
        repeat: true,
        presentUpcoming: 3,
      });
    }
  }, [videosData, formattedData]);
  return (
    <div className={styles.player}>
      <video
        id="example-player"
        controls
        className="cld-video-player cld-video-player-skin-dark"
      ></video>
    </div>
  );
}
