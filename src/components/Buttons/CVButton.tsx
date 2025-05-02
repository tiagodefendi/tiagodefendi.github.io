"use client"

import CustomButton from "./CustomButton"

interface ButtonProps {
    className?: string,
    buttonName?: string
}

const CVButton = ({ className, buttonName="Download CV"}: ButtonProps) => {
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
            buttonName={buttonName}
        />
    )
}

export default CVButton;
