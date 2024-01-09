import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import EditPage from "./components/Edit/EditPage";

function App() {
    const [edit, setEdit] = useState(false);
    return (
        <div className="App">
            {edit ? (
                <EditPage setEdit={setEdit} />
            ) : (
                <Header setEdit={setEdit} />
            )}
        </div>
    );
}

export default App;
