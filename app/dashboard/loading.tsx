import { Nav } from "@/components/nav"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <>
      <Nav />
      <main className="container mx-auto pt-24 px-4">
        <Skeleton className="h-12 w-1/4 mb-6" />
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </main>
    </>
  )
}
