import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchQuery}`).then((data) => {
      setVideos(data?.items);
    });
  }, [searchQuery]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={3} color='white' ml={{ sm: '100px'}}>
        Search Results for:{" "}
        <span style={{ color: "#f31503" }}>{searchQuery}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
