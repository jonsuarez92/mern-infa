import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/reset_password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(response => {
                if (response.ok) {
                    // Password reset email sent successfully
                    console.log("Password reset email sent to " + email);
                } else {
                    // Error occurred while sending password reset email
                    console.log("Error sending password reset email");
                }
            })
            .catch(error => {
                // Error occurred while making API call
                console.log("API call failed: " + error.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button type="submit">Reset Password</button>
        </form>
    );
}

export default ForgotPassword;
