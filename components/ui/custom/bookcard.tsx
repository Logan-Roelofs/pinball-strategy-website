import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

interface BookCardProps {
  title: string
  description: string
  author: string
}

export function BookCard({ title, description, author }: BookCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500 mb-2">{author}</CardDescription>
        <p className="text-sm line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  )
}

