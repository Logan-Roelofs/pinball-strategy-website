import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Chapter {
  number: number
  title: string
  summary: string
  image?: string // Add image property
}

interface PinballReviewProps {
  title: string
  chapters?: Chapter[]
}

export default function PinballReview({ title, chapters = [] }: PinballReviewProps) {
  return (
    <div className=" mx-auto max-w-6xl items-center justify-between md:px-6 p-2">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with navigation */}
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <hr className="my-4 border-t border-gray-300" />
          </CardContent>
          <CardContent>
            <nav>
              <ul className="space-y-2">
                {chapters.map((chapter) => (
                  <li key={chapter.number}>
                    <Link href={`#chapter-${chapter.number}`} className="text-green-700 hover:underline">
                      {chapter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </CardContent>
        </Card>


        {/* Main content */}
        <main className="w-full md:w-3/4">
          {chapters.length > 0 ? (
            chapters.map((chapter) => (
              <Card key={chapter.number} className="border-none">
                <CardHeader>
                  <CardTitle id={`chapter-${chapter.number}`} className="text-2xl font-semibold">
                    {chapter.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {chapter.image && (
                    <img src={chapter.image} alt={chapter.title} className="mb-4 w-full h-auto max-w-xs" /> // Add max-w-xs class
                  )}
                  <p className="text-gray-300 ">{chapter.summary}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-none">
              <CardContent>
                <p className="text-gray-300">No chapters found.</p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}

