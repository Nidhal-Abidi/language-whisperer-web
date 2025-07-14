import { RegisterForm } from "@/components/register/RegisterForm";
import { getRegisterPageErrorMessage } from "@/utils/utilies";

interface RegisterProps {
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function Register({ searchParams }: RegisterProps) {
  const params = await searchParams;

  const errorMessage = params.error
    ? getRegisterPageErrorMessage(params.error)
    : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <RegisterForm errorMessage={errorMessage} />
    </div>
  );
}
