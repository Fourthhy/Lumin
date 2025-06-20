"use client"

import Text from "../components/Text"
import SignInComponent from "../components/SignInComponent";
import SignUpComponent from "../components/SignUpComponent";
import { Button, ButtonGroup } from "flowbite-react";
import { useState } from "react"
export default function Login() {
    const [action, setAction] = useState("signin");
    

    const handleActionChange = () => {
        if (action === "signin") {
            setAction("signup")
        } else {
            setAction("signin")
        }
    }


    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center bg-[#F6F7FA]">
                <div className="flex flex-col justify-center items-center border-black border-[1px] w-[50%] h-[100%]">
                    <div className="flex items-center gap-2">
                        <Text size="header" weight="bold">This is Lumina,</Text>
                        <Text size="subheader" weight="regulat">you're about to {action === "signin" ? "Sign in" : "Sign up"}</Text>
                    </div>

                    {action === "signin" ? (
                        <>
                            <SignInComponent />
                            <div className="flex flex-col items-center mt-[10px] gap-3">
                                <Text weight="semibold" size="regular">Don't have an account?</Text>
                                <ButtonGroup>
                                    <Button color="alternative" disabled>Sign In</Button>
                                    <Button color="cyan" onClick={() => handleActionChange()}>Sign Up</Button>
                                </ButtonGroup>
                            </div>
                        </>
                    ) : (
                        <>
                            <SignUpComponent />
                            <div className="flex flex-col items-center mt-[10px] gap-3">
                                <Text weight="semibold" size="regular">Already have an account?</Text>
                                <ButtonGroup>
                                    <Button color="cyan" onClick={() => handleActionChange()}>Sign In</Button>
                                    <Button color="alternative" disabled>Sign Up</Button>
                                </ButtonGroup>
                            </div>
                        </>
                    )}
                </div>
                <div className="w-[50%] h-[100%] border-black border-[1px]">
                    <img src="/hero_image.jpg" alt="hero image" className="object-cover w-full h-full"
/>
                </div>
            </div>
        </>
    )
}
