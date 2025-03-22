import React from 'react';
import { Paper, TextField } from '@mui/material';
import '../App.css';
import { useState } from 'react';

const Searchbar = ({ onSearchSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <Paper className="searchbar" elevation={6}>
            <TextField fullWidth label="Search..." value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? onSearchSubmit(searchTerm) : null}/>
        </Paper>
    )
}

export default Searchbar;