import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components"; // Import styled-components

const color = styled.div`
    background-color: #f0f4f7; 
    min-height: 100vh; 
`;

function MakePack() {
    const [boosterPack, setBoosterPack] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { set } = useParams();

    useEffect(() => {
        fetch(`https://api.scryfall.com/cards/search?q=set%3A${set}`) //pulls data from the set you chose
            .then((res) => res.json())
            .then((json) => {
                const cards = json.data.filter(card => card.booster);
                const commons = cards.filter(card => card.rarity === "common");
                const uncommons = cards.filter(card => card.rarity === "uncommon");
                const raresMythics = cards.filter(card => card.rarity === "rare" || card.rarity === "mythic");
                
                const boosterPack = [];

                while (boosterPack.length < 10) {
                    const randomIndex = Math.floor(Math.random() * commons.length);
                    const card = commons[randomIndex];
                    if (!boosterPack.includes(card)) {
                        boosterPack.push(card);
                    }
                }

                while (boosterPack.length < 13) {
                    const randomIndex2 = Math.floor(Math.random() * uncommons.length);
                    const card2 = uncommons[randomIndex2];
                    if (!boosterPack.includes(card2)) {
                        boosterPack.push(card2);
                    }
                }

                const randomIndex = Math.floor(Math.random() * raresMythics.length);
                boosterPack.push(raresMythics[randomIndex]);
                //since booster packs only have 10 commons, 3 uncommons, and 1 rare or mythic, we only pull those 14 cards for each pack
                setBoosterPack(boosterPack);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching booster pack:", error);
                setIsLoading(false);
            });
    }, [set]);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="App">
            <h1 style={{color: "red"}} >Generated Booster Pack</h1>
            <div className="container">
                {boosterPack.map((card) => (
                    <div className="card" key={card.id}>
                        <div>
                        </div>
                        <h2 style={{color: "brown"}}>{card.name}</h2>
                        {card.image_uris && card.image_uris.normal && (
                            <img src={card.image_uris.normal} alt={card.name} />
                        )}
                        <div>Rarity: {card.rarity}</div>
                        <div>Set: {card.set_name}</div>
                        <div style={{color: "green"}}>Price: ${card.prices ? card.prices.usd : "N/A"}</div>
                    </div> //displays pulled information
                ))}
            </div>
            <Link to="/">Back to Home</Link> 
        </div>
    ); //easy nav back to home
}

export default MakePack;
