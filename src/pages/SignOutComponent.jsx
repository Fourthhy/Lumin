import { Card, FloatingLabel, Button } from "flowbite-react";

export default function SignUpComponent() {
    return (
        <>
            <Card className="min-w-sm max-w-lg">
                <FloatingLabel variant="outlined" label="email" />
                <FloatingLabel variant="outlined" label="username" />
                <FloatingLabel variant="outlined" label="password" type="password" />
                <Button color="cyan">Submit</Button>
            </Card>
        </>
    )
}