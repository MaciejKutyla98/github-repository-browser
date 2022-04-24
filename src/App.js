import React from "react";
import AppBar from "./components/AppBar/AppBar";
import SearchBox from "./components/SearchBox/SearchBox";
import RepositoryDetailsCard from "./components/RepositoryDetailsCard/RepositoryDetailsCard";
import RepositoryListCard from "./components/RepositoriesListCard/RepositoryListCard";


function App() {

  return (
    <div className="App">
        <AppBar />
        <RepositoryDetailsCard />
        <RepositoryListCard />
    </div>
  );
}

export default App;
