"use client"
import ForgotPasswordTemplate from "@/app/components/pages/publicPages/ForgotPassword";
import OTPVerificationForm from "@/app/components/pages/publicPages/ForgotPassword/forms/OTPVerification";
import { useParams } from "next/navigation";

export default function OTPVerification() {
    const params = useParams();
    const email = decodeURIComponent(params.email as string);

    return (
        <ForgotPasswordTemplate>
            <OTPVerificationForm email={email} />
        </ForgotPasswordTemplate>
    );
}