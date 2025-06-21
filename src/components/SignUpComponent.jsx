import { useState } from "react"
import { Card, FloatingLabel, Button, HelperText } from "flowbite-react";
import { validateEmailDomain } from "../utils/validations";

export default function SignUpComponent({ errorMessage }) {
    const [status, setStatus] = useState("typing");
    const [message, setMessage] = useState({});

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [emailColorResponse, setEmailColorResponse] = useState('default')
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassowrd] = useState("");

    const displayStatus = () => {
        switch (status) {
            case "typing":
                return `default`
            case "error":
                return `error`
            case "success":
                return `success`
            default:
                return `default`
        }
    }

    const updateEmailColor = (isValid, error) => {
        if (isValid) {
            return "success";
        } else if (error) { 
            return "error";
        } else {
            return "default";
        }
    }

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(e.target.value); // Update the email state

        // Call your validation function immediately
        const validationResult = validateEmailDomain(newEmail);
        // {isValid: bool, domain || error}
        setMessage(validationResult); // Update the email message state
        setEmailColorResponse(updateEmailColor(validationResult.isValid, validationResult.error));
    };

    return (
        <>
            <Card className="min-w-sm max-w-lg">
                <FloatingLabel 
                    variant="outlined" 
                    value={email} 
                    onChange={handleEmailChange} 
                    color={email.length == 0 ? `default` : emailColorResponse} 
                    label="Email" 
                />
                <FloatingLabel variant="outlined" value={username} onChange={(e) => { setUsername(e.target.value) }} color={displayStatus()} label="username" />
                <FloatingLabel variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }} color={displayStatus()} label="password" type="password" />
                <FloatingLabel variant="outlined" value={confirmPassword} onChange={(e) => { setConfirmPassowrd(e.target.value) }} color={displayStatus()} label="confirm password" type="password" />
                {message.error && !message.isValid && (
                    <HelperText color="red">{message.error}</HelperText>
                )}
                {message.isValid && message.domain && (
                    <HelperText color="green">Email valid! Domain: {message.domain}</HelperText>
                )}
                <Button color="cyan">Submit</Button>
            </Card>
        </>
    )
}