import React from "react";
import AppBar from "./components/NavBar/NavBar";
import BottomNavigation from '@mui/material/BottomNavigation';
import {SearchBox} from "./components/SearchBox/SearchBox";
import {RepositoryDetailsCard} from "./components/RepositoryDetailsCard/RepositoryDetailsCard";
import { Route, Routes } from "react-router-dom";
import {AllRepositories} from "./components/AllRepositories/AllRepositories";

const App = () => {

    return (
        <div className="App">
            <AppBar />
            <Routes >
                <Route path="/" element={<AllRepositories />} />
                <Route  path="/Find%20repository" element={<SearchBox />} />
                <Route  path="/List%20of%20repositories" element={<AllRepositories />} />
                <Route path="/repository-details/:name" element={<RepositoryDetailsCard />} />
            </Routes >
            <BottomNavigation />
        </div>
    );
}

export default App;
