// Home.js
import React, { useState } from "react";
import styled from "styled-components"; 



function Home() {
    const [selectedSet, setSelectedSet] = useState(""); 
    const handleSetSelect = (event) => {
        setSelectedSet(event.target.value);
    };

    const generateBoosterPack = () => {
        if (selectedSet) {
            
            window.location.href = `/Pack/${selectedSet}`;
        }
    };

    return (
        <div>
            <h1>Magic The Gathering Booster Pack Generater</h1>
            <t1>Select a Magic: The Gathering set: </t1>
            <select value={selectedSet} onChange={handleSetSelect}>
                <option value="">-- Select Set --</option>
                <option value="eld">Throne of Eldraine</option>
                <option value="mid">Innistrad: Midnight Hunt</option>
                <option value="vow">Innistrad: Crimson Vow</option>
                <option value="neo">Kamigawa: Neon Dynasty</option>
                <option value="snc">Streets of New Capenna</option>
                <option value="dmu">Dominaria United</option>
                <option value="brr">The Brothers' War</option>
                <option value="one">Phyrexia: All Will Be One</option>
                <option value="mom">March of the Machine</option>
            </select>
            <button onClick={generateBoosterPack}>Generate Booster Pack</button>
        </div>
    );
}
//selects the set and then routes to pack page
export default Home;
