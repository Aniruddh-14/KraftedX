import { InteractiveBackground } from "@/components/interactive-background"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Nav />
      <InteractiveBackground />
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="max-w-3xl text-center space-y-6 relative z-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
             Kraftedx Auth test 
          </h1>
          <p className="text-xl text-muted-foreground">
            By Aniruddh Sharama 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
