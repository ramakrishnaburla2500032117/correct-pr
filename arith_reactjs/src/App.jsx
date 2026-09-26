import { useState } from "react";
import { NODE_URL } from "./data";
import { callAPI } from "./callapi";
import "./App.css";

function App() {

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [result, setResult] = useState(null);

    // Addition - POST request
    const handleAdd = () => {

        if (value1 === "" || value2 === "") {
            alert("Please enter both numbers");
            return;
        }

        const payload = {
            value1: value1,
            value2: value2
        };

        const url = `${NODE_URL}/add`;

        callAPI("POST", url, payload, (res) => {

            if (res.status === "success") {
                setResult(res.result);
            }

        });
    };


    // Subtraction - GET request
    const handleSubtract = () => {

        if (value1 === "" || value2 === "") {
            alert("Please enter both numbers");
            return;
        }

        const url =
            `${NODE_URL}/subtract/${value1}/${value2}`;

        callAPI("GET", url, null, (res) => {

            if (res.status === "success") {
                setResult(res.result);
            }

        });
    };


    return (

        <div className="page">

            <div className="calculator">

                <h1>Arithmetic Calculator (Full-Stack)</h1>

                <div className="input-row">

                    <label>Value 1:</label>

                    <input
                        type="number"
                        value={value1}
                        onChange={(e) =>
                            setValue1(e.target.value)
                        }
                    />

                </div>


                <div className="input-row">

                    <label>Value 2:</label>

                    <input
                        type="number"
                        value={value2}
                        onChange={(e) =>
                            setValue2(e.target.value)
                        }
                    />

                </div>


                <div className="buttons">

                    <button onClick={handleAdd}>
                        Add (POST)
                    </button>

                    <button onClick={handleSubtract}>
                        Subtract (GET)
                    </button>

                </div>


                <hr />

                <h2>
                    Result: {result !== null ? result : "N/A"}
                </h2>

            </div>

        </div>

    );
}

export default App;