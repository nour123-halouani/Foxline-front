import AuthTemplate from '@/app/components/pages/publicPages/Auth';
import SignUpForm from '@/app/components/pages/publicPages/Auth/forms/SignUpForm';

export default function SignUp() {
  return (
    <AuthTemplate>
      <SignUpForm />
    </AuthTemplate>
  );
}
