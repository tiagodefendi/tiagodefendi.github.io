"use client"

import { twMerge } from "tailwind-merge"

interface ButtonProps {
    children?: React.ReactNode
    className?: string
    buttonName?: string
    onClick?: () => void
}

const CustomButton = ({ className, children = "", buttonName = "Custom Button", onClick }: ButtonProps) => {
    const baseClass = "cursor-pointer";

    return (
        <button onClick={onClick} className={twMerge(baseClass, className)}>
            {children || buttonName}
        </button>
    )
}

export default CustomButton;
