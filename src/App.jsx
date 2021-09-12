import { useState } from "react";
import './App.css';

function App() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    const data = [
        {
            id: 1,
            name: "Avy",
        },
        {
            id: 2,
            name: "Mark",
        },
    ];
  return (
    <>
      <ul>
            {data.map((item, i) => (
                <li className={isActive.key == i ? "active" : ""} key={i}>
                    <a onClick={() => handleToggle(i)}>{item.name}</a>
                </li>
            ))}
        </ul>
    </>
  );
}

export default App;