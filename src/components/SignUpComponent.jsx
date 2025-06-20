import { useState } from "react"
import { Card, FloatingLabel, Button } from "flowbite-react";

export default function SignUpComponent({errorMessage}) {
    const [status, setStatus] = useState("typing");
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
    
    return (
        <>
            <Card className="min-w-sm max-w-lg">
                <FloatingLabel variant="outlined" color={displayStatus()} label="email" />
                <FloatingLabel variant="outlined" color={displayStatus()} label="username" />
                <FloatingLabel variant="outlined" color={displayStatus()} label="password" type="password" />
                <FloatingLabel variant="outlined" color={displayStatus()} label="confirm password" type="password" />
                <Button color="cyan">Submit</Button>
            </Card>
        </>
    )
}