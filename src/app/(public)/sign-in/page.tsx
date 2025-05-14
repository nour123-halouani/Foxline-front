import AuthTemplate from '@/app/components/pages/publicPages/Auth';
import SignInForm from '@/app/components/pages/publicPages/Auth/forms/SignInForm';

export default function SignIn() {
  return (
    <AuthTemplate>
      <SignInForm />
    </AuthTemplate>
  );
}
