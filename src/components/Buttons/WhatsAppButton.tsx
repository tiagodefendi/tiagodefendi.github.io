"use client"

import CustomButton from "./CustomButton"

interface WhatsAppButtonProps {
    className?: string,
    buttonName?: string
}

const WhatsAppButton = ({ className, buttonName="Contact Me!"}: WhatsAppButtonProps) => {
    const onClick = () => {
        const phone = "5544998905287"

        window.open(`https://api.whatsapp.com/send?phone=${phone}&text=Hello%2C%20I%20contacted%20you%20through%20your%20website.%20%F0%9F%99%83`)
    }

    return (
        <CustomButton
            onClick={onClick}
            className={className}
            buttonName={buttonName}
        />
    )
}

export default WhatsAppButton;
