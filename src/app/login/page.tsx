import { CredentialLoginForm } from "@/components/login/CredentialLoginForm";
import { getLoginPageErrorMessage } from "@/utils/utilies";

interface LoginProps {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
}

export default async function Login({ searchParams }: LoginProps) {
  const params = await searchParams;

  const errorMessage = params.error
    ? getLoginPageErrorMessage(params.error)
    : null;
  const successMessage = params.message || null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <CredentialLoginForm
        errorMessage={errorMessage}
        successMessage={successMessage}
      />
    </div>
  );
}
