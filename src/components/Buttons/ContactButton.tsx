"use client"

import CustomButton from "./CustomButton"
import toast from "react-hot-toast"

interface ContactButtonProps {
    className?: string,
    buttonName?: string
}

const ContactButton = ({ className, buttonName="Contact Me!"}: ContactButtonProps) => {
    const onClick = () => {
        const email = "tiagodefendidasilva@gmail.com"

        navigator.clipboard.writeText(email)
            .then(() => toast.success("Email copied to clipboard!"))
            .catch((err) => toast.error("Failed to copy email"))

        window.open(`mailto:${email}?subject=Contact via website&body=Hello Tiago,%0A%0AI am reaching out through your website. I would like to discuss [insert the reason for your message].%0A%0ABest regards,%0A[Your name]`, '_blank')
    }

    return (
        <CustomButton
            onClick={onClick}
            className={className}
            buttonName={buttonName}
        />
    )
}

export default ContactButton
