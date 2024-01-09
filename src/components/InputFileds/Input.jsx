import React from "react";

const Input = ({ label, setData, type, data }) => {
    return (
        <>
            <label>{label}</label>
            <input
                onChange={(e) => setData(e.target.value)}
                type={type}
                placeholder={data}
            />
        </>
    );
};

export default Input;
