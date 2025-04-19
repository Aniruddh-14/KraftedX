"use client"

import { useAuth } from "@/contexts/auth-context"
import { Nav } from "@/components/nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <>
        <Nav />
        <main className="container mx-auto pt-24 px-4">
          <div className="space-y-4">
            <Skeleton className="h-12 w-1/4" />
            <Skeleton className="h-64 w-full" />
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Nav />
      <main className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Welcome, {user?.user_metadata?.full_name || "User"}</CardTitle>
              <CardDescription>This is my protected dashboard page</CardDescription>
            </CardHeader>
            <CardContent>
              <p>You're now signed in with {user?.email}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Your account details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Email:</span> {user?.email}
                </div>
                <div>
                  <span className="font-medium">Name:</span> {user?.user_metadata?.full_name || "Not provided"}
                </div>
                <div>
                  <span className="font-medium">User ID:</span> {user?.id}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}
