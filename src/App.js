import './App.css';
import { Youtube, Searchbar, MainVideo } from './components';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [firstVideo, setFirstVideo] = useState(null);

    const handleSearchSubmit = (search) => {
        setSearchTerm(search);
    }

    const handleFetchVideo = (first) => {
        setFirstVideo(first);
    }


    return (
    <>
        <Typography variant="h4" className="title">Zack's Youtube Clone</Typography>
        <Grid className="app" container spacing={10}>

            <Grid item xs={12}>
                <Grid container spacing={5} >
                    <Grid item xs={12}>
                        <Searchbar onSearchSubmit={handleSearchSubmit}/>
                    </Grid>
                    <Grid item xs={8}>
                        <MainVideo video={firstVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Youtube searchTerm={searchTerm} number="5" onFetchVideos={handleFetchVideo}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
    );
}

export default App;
