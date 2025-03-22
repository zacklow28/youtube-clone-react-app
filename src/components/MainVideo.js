import React from 'react';
import { Paper, Typography } from '@mui/material';
import "../App.css";

const MainVideo = ({ video }) => {
    if (!video) return <div>No Video Found</div>

    return (
    <>
        <Paper className="main-video" elevation={10}>
        <iframe height="100%" width="100%" title="Video Player"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
        </Paper>
        <Paper className="video-detail">
            <Typography variant="h4" >{video.snippet.title}</Typography>
            <Typography variant="h6">Channel: {video.snippet.channelTitle}</Typography>
            <Typography variant="subtitle">{video.snippet.description}</Typography>
        </Paper>
    </>
    );
};

export default MainVideo;

