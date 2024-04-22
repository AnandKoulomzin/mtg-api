import React, { useState, useEffect } from "react";

function Home() {
    const [items, setItems] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setDataLoaded(true);
            });
    }, []); 

    if (!dataLoaded) {
        return (
            <div>
                <h1>Please wait some time....</h1>
            </div>
        );
    }

    return (
        <div className="App">
            <h1 className="geeks">GeeksforGeeks</h1>
            <h3>Fetch data from an api in react</h3>
            <div className="container">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <ol>
                            <div>
                                <strong>User_Name: </strong>
                                {item.username},
                            </div>
                            <div>
                                Full_Name: {item.name},
                            </div>
                            <div>
                                User_Email: {item.email}
                            </div>
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;