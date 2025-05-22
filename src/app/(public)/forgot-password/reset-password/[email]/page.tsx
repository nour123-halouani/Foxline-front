"use client"
import ForgotPasswordTemplate from "@/app/components/pages/publicPages/ForgotPassword";
import ResetPasswordForm from "@/app/components/pages/publicPages/ForgotPassword/forms/ResetPassword";
import { useParams } from "next/navigation";

export default function ResetPassword() {
    const params = useParams();
    const email = decodeURIComponent(params.email as string);

    return (
        <ForgotPasswordTemplate>
            <ResetPasswordForm email={email} />
        </ForgotPasswordTemplate>
    );
}