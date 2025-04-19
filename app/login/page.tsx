import { LoginForm } from "@/components/auth/login-form"
import { InteractiveBackground } from "@/components/interactive-background"
import Link from "next/link"

export default function LoginPage() {
  return (
    <>
      <InteractiveBackground />
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Link href="/" className="absolute top-8 left-8 text-xl font-bold">
          KraftedX        </Link>
        <LoginForm />
      </div>
    </>
  )
}
