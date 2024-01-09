import "./edit.css";
import React, { useState } from "react";
import Input from "./../InputFileds/Input";

const EditPage = ({ setEdit }) => {
    const avaUrl = [
        "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
        "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
        "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webps=e6eb0ee5710710000e4fbace119112de63324a38",
        "https://i.redd.it/7ipyf6pvqac61.png",
        "https://i.redd.it/ksmb0m02ppy51.png",
        "https://i.redd.it/mozfkrjpoa261.png",
        "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
        "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
    ];
    const [name, setName] = useState("name");
    const [age, setAge] = useState(20);
    const [about, setAbout] = useState("I'm a software");
    const [theme, setTheme] = useState("#ccc");
    const [url, setUrl] = useState("#ccc");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <section
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                        className="edit-container"
                    >
                        <button className="close">SAVE</button>
                        <div className="edit-profile">Edit Profile</div>

                        <div className="input-container">
                            {/*! Name */}
                            <Input
                                labe={"Display name"}
                                setData={setName}
                                type={"text"}
                                data={name}
                            />
                            <Input
                                label={"Age"}
                                setData={setAge}
                                type={"text"}
                                data={age}
                            />
                            <Input
                                label={"About"}
                                setData={setAbout}
                                type={"text"}
                                data={about}
                            />
                        </div>

                        <label>Profile picture</label>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            className="input-image-container"
                        >
                            {avaUrl.map((x, id) => (
                                <>
                                    <img
                                        key={id + 2}
                                        onClick={(e) => {
                                            console.log(`url ${url}`);
                                            console.log(e.target.src);
                                            return setUrl(e.target.src);
                                        }}
                                        src={x}
                                        className="input-image"
                                        alt=""
                                    />
                                </>
                            ))}
                        </div>

                        <div className="theme-container">
                            <label>Theme</label>
                            <input
                                onChange={(e) => {
                                    return setTheme(e.target.value);
                                }}
                                type="color"
                            />
                        </div>
                    </section>
                </div>
            </form>
        </>
    );
};

export default EditPage;
