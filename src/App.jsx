import { useEffect, useRef, useState } from "react";

let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};

function App() {
    const [isActive, setIsActive] = useState({
        status: true,
    });

    const handleToggle = (key) => {
        if (isActive === key) {
            setIsActive({
                status: false,
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

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });

    return (
        <>
            <ul>
                {data.map((item, i) => (
                    <li
                        className={isActive.key == i ? "active" : ""}
                        key={i}
                        ref={domNode}
                    >
                        <a onClick={() => handleToggle(i)}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
