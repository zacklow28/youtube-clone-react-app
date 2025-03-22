import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import "../App.css";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.REACT_APP_API_KEY;

const Youtube = ({ searchTerm, number, onFetchVideos }) => {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        /*
        Find all these in the api documentation. The GET request, and the parameters (with ? or &)

        REQUEST
        /search means doing a search

        PARAMS
        ?part=snippet get the video details
        &q={} is the search query
        &type=video ensures on videos (no playlists, channels)
        &key={} is the API_KEY
        maxResults={} → Limits the number of results to avoid excess API usage
        */
        const response = await fetch(`${BASE_URL}/search?part=snippet&q=${searchTerm}
                                        &type=video&key=${API_KEY}&maxResults=${number}`);
        const data = await response.json();
        setVideos(data.items);
    }

    useEffect(() => {
        fetchVideos();
    }, [searchTerm]);

    //everytime video array updates, pass the first video to parent.
    //Cannot do this in async function, will not immediately update, causing first video from prev search instead
    useEffect(() => {
        if (videos?.length > 0) onFetchVideos(videos[0]);
        else (onFetchVideos(null));
    }, [videos]);

    //map through array
    return (
        <div>
            {videos?.map((video, index) => (
                <Grid container className="video-list" onClick={() => onFetchVideos(videos[index])}>
                    <img src={video.snippet.thumbnails.medium.url}
                        alt="thumbnail"/>
                    <Typography variant="subtitle"><b>{video.snippet.title}</b></Typography>
                </Grid>
            ))}
        </div>
    )
}

export default Youtube;

