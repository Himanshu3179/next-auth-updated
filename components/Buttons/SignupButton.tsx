"use client"
import React from 'react'
import { Button } from '../ui/button'

const SignupButton = () => {
    return (
        <Button onClick={
            () => {
                window.location.href = '/signup'
            }

        }>
            Signup
        </Button>
    )
}

export default SignupButton