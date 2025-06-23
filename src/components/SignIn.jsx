import { useState } from "react"
import { Card, FloatingLabel, Button, HelperText } from "flowbite-react";

export default function SignInComponent() {
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
            <Card className="min-w-sm max-w-lg h-[300px]">
                <div className="flex flex-col justify-between items-center h-[100%]">
                    <div className="flex flex-col gap-5 w-[100%]">
                        <div>
                            <FloatingLabel variant="outlined" color={displayStatus()} label="username or email" />
                            <HelperText className="mt-[-3px]">Username is not found</HelperText>
                        </div>
                        <div>
                            <FloatingLabel variant="outlined" color={displayStatus()} label="password" type="password" />
                            <HelperText className="mt-[-3px]">Some helper text</HelperText>
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <Button color="cyan" style={{ width: '100%' }}>Submit</Button>
                    </div>
                </div>
            </Card>
        </>
    )
}