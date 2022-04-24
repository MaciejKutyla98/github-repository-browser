import React from "react";
import AppBar from "./components/NavBar/NavBar";
import BottomNavigation from '@mui/material/BottomNavigation';
import {SearchBox} from "./components/SearchBox/SearchBox";
import {RepositoryDetailsCard} from "./components/RepositoryDetailsCard/RepositoryDetailsCard";
import {RepositoryListCard} from "./components/RepositoriesListCard/RepositoryListCard";
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
        <AppBar />
        <Routes >
            <Route path="/" element={<RepositoryListCard />} />
            <Route  path="/Find%20repository" element={<SearchBox />} />
            <Route  path="/List%20of%20repositories" element={<RepositoryListCard />} />
            <Route path="/repository-details" element={<RepositoryDetailsCard />} />
        </Routes >
        <BottomNavigation />
    </div>
  );
}

export default App;
