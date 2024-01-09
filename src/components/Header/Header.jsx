import React from "react";
import "./header.css";
const Header = (props) => {
    const { setEdit } = props;

    const handleClick = () => {
        setEdit(true);
    };

    return (
        <>
            <header
                style={{
                    backgroundColor: `#ccc`,
                }}
            >
                <div className="info-container">
                    <div className="info-edit" onClick={handleClick}>
                        Edit
                    </div>
                    <img
                        style={{
                            width: "200px",
                            height: "200px",
                        }}
                        src="https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a
"
                        alt=""
                    />
                    <div className="info-username">Name</div>
                    <div className="info-age">20</div>
                    <div className="info-about">I'm software</div>
                </div>
            </header>
        </>
    );
};

export default Header;
