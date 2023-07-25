import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

// import Feed from './components/Feed';
// import VideoDetail from './components/VideoDetail';
// import Searchfeed from './components/Searchfeed';
// import Navbar from './components/Navbar';
// import ChannelDetail from './components/ChannelDetail';

import { Navbar, VideoDetail, Feed, Searchfeed, ChannelDetail } from "./components"
const App = () => (
    <BrowserRouter >
        <Box color={"#fff"} sx={{ backgroundColor: "#000" }} >
            <Navbar />
            <Routes>
            <Route path="/" exact element={<Feed />}  />
            <Route path='/video/:id' element={<VideoDetail  />} />
            <Route path='/channel/:id' element={<ChannelDetail  />} />
            <Route path='/search/:searchTerm' element={<Searchfeed  />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App
