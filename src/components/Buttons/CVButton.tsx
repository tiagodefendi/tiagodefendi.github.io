"use client"

import CustomButton from "./CustomButton"

interface ButtonProps {
    className?: string
}

const CVButton = ({ className}: ButtonProps) => {
    const onClick = () => {
        const link = document.createElement("a")
        link.href = "/cv.pdf"
        link.download = "Tiago_Defendi_CV.pdf"
        link.click()
    }

    return (
        <CustomButton
            onClick={onClick}
            className={className}
            buttonName="Download CV"
        />
    )
}

export default CVButton;
