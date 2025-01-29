import { Card, CardContent, CardTitle } from "@/components/ui/card"

interface BookCardProps {
  title: string
  description: string
}

export function PinballCard({ title, description }: BookCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <p className="text-sm line-clamp-3">{description}</p>
      </CardContent>
    </Card>
  )
}

