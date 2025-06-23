"use client"

import Text from "../components/Text"
import SignInComponent from "../components/SignIn";
import SignUpComponent from "../components/SignUp";
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
                <div className="flex flex-col justify-between items-center border-black border-[1px] w-[50%] h-[100%]">
                    <div className="w-[100%] border-black border-[1px]">
                        <div className="flex flex-col ml-[60px] mt-[20px]">
                            <Text size="header" weight="bold"><span className="text-[#05131D]">Cultivate your</span><span className="text-[#668985]"> progress</span></Text>
                            <Text size="header" weight="bold"><span className="text-[#05131D]">Illuminate your</span><span className="text-[#668985]"> potential</span></Text>
                        </div>
                        <div className="w-[100%] flex justify-center mt-[40px]">
                            <Text size="subheader" weight="regular" className="mt-[20px]">you're about to {action === "signin" ? "Sign in" : "Sign up"}</Text>
                        </div>
                    </div>
                    <div className="flex items-center w-[100%] flex-col gap-2 ">
                        {action === "signin" ? (
                            <>
                                <SignInComponent />
                            </>
                        ) : (
                            <>
                                <SignUpComponent />
                            </>
                        )}
                    </div>
                    <div>
                        {action === "signin" ? (
                            <>
                                <div className="flex flex-col items-center ml-[100px] gap-3">
                                    <Text weight="semibold" size="regular">Don't have an account?</Text>
                                    <ButtonGroup>
                                        <Button color="alternative" disabled>Sign In</Button>
                                        <Button color="cyan" onClick={() => handleActionChange()}>Sign Up</Button>
                                    </ButtonGroup>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col items-center ml-[100px] gap-3">
                                    <Text weight="semibold" size="regular">Already have an account?</Text>
                                    <ButtonGroup>
                                        <Button color="cyan" onClick={() => handleActionChange()}>Sign In</Button>
                                        <Button color="alternative" disabled>Sign Up</Button>
                                    </ButtonGroup>
                                </div>
                            </>
                        )}
                    </div>

                </div>
                <div className="w-[50%] h-[100%] border-black border-[1px]">
                    <img src="/hero_image.jpg" alt="hero image" className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </>
    )
}
