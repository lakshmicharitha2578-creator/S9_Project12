import React, { useState } from 'react';

const Registration = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [usernameStatus, setUsernameStatus] = useState("Invalid");
    const [emailStatus, setEmailStatus] = useState("");
    const [passwordStatus, setPasswordStatus] = useState("");

    /* Username validation */
    const validateUsername = (value) => {
        if (value.length >= 8)
            setUsernameStatus("Valid");
        else
            setUsernameStatus("Invalid");
    };

    /* Email validation */
    const validateEmail = (value) => {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(value))
            setEmailStatus("Valid Email ✅");
        else
            setEmailStatus("Invalid Email ❌");
    };

    /* Password validation */
    const validatePassword = (pass, confirmPass) => {

        if (pass.length < 6)
            setPasswordStatus("Password too short ❌");

        else if (confirmPass && pass !== confirmPass)
            setPasswordStatus("Passwords do not match ❌");

        else if (pass === confirmPass)
            setPasswordStatus("Passwords match ✅");
    };

    const btnSubmitClick = () => {
        alert("Registration Successful 🎉");
    };

    const btnResetClick = () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setUsernameStatus("Invalid");
        setEmailStatus("");
        setPasswordStatus("");
    };

    /* Form valid check */
    const isFormValid =
        usernameStatus === "Valid" &&
        emailStatus === "Valid Email ✅" &&
        passwordStatus === "Passwords match ✅";

    /* Premium UI Styles */

    const pageStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "Poppins"
    };

    const cardStyle = {
        width: "420px",
        padding: "40px",
        borderRadius: "25px",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
        textAlign: "center",
        color: "#fff"
    };

    const inputStyle = {
        width: "100%",
        padding: "14px",
        marginBottom: "12px",
        borderRadius: "12px",
        border: "none",
        outline: "none",
        background: "rgba(255,255,255,0.2)",
        color: "#fff"
    };

    const buttonStyle = {
        width: "48%",
        padding: "12px",
        borderRadius: "30px",
        border: "none",
        fontWeight: "bold",
        cursor: "pointer"
    };

    const statusStyle = (valid) => ({
        marginBottom: "10px",
        color: valid ? "#00ffcc" : "#ff6b6b",
        fontSize: "14px"
    });

    return (
        <div style={pageStyle}>
            <div style={cardStyle}>

                <h2>✨ Create Account</h2>

                {/* Username */}
                <input
                    type="text"
                    placeholder="Username (min 8 characters)"
                    style={inputStyle}
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        validateUsername(e.target.value);
                    }}
                />

                {username &&
                    <div style={statusStyle(usernameStatus === "Valid")}>
                        Username: {usernameStatus}
                    </div>
                }
                {/* Email */}
                <input
                    type="text"
                    placeholder="Email Address"
                    style={inputStyle}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                    }}
                />

                {email &&
                    <div style={statusStyle(emailStatus === "Valid Email ✅")}>
                        {emailStatus}
                    </div>
                }

                {/* Password */}
                <input
                    type="password"
                    placeholder="Password (min 6 characters)"
                    style={inputStyle}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value, confirmPassword);
                    }}
                />

                {/* Retry Password */}
                <input
                    type="password"
                    placeholder="Retry Password"
                    style={inputStyle}
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        validatePassword(password, e.target.value);
                    }}
                />

                {password &&
                    <div style={statusStyle(passwordStatus.includes("✅"))}>
                        {passwordStatus}
                    </div>
                }

                {/* Buttons */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>

                    <button
                        style={{
                            ...buttonStyle,
                            background: isFormValid
                                ? "linear-gradient(to right, #00c6ff, #0072ff)"
                                : "#aaa",
                            color: "#fff",
                            cursor: isFormValid ? "pointer" : "not-allowed"
                        }}
                        disabled={!isFormValid}
                        onClick={btnSubmitClick}
                    >
                        Submit
                    </button>

                    <button
                        style={{
                            ...buttonStyle,
                            background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                            color: "#fff"
                        }}
                        onClick={btnResetClick}
                    >
                        Reset
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Registration;