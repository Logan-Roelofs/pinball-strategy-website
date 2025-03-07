import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className=" mx-auto max-w-6xl items-center justify-between md:px-6 p-2">
      <div className="flex flex-col gap-4 w-full items-center">
        {/* Sidebar with navigation */}
        <main className="w-full md:w-3/5">
          <Card className="flex flex-col max-h-screen max-h-fit">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">SinBad</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <nav>
                <p className="mb-4">My Highest Score: 407,460</p>
                <p className="mb-4">Pin-Golf Target: 60,000</p>
                <ul className="space-y-2">
                  <li>
                    <Link href={`#chapter-1`} className="text-green-700 hover:underline">
                    Layout
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-2`} className="text-green-700 hover:underline">
                    The Game Plan
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-3`} className="text-green-700 hover:underline">
                    How to Multiply Bonuses
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-4`} className="text-green-700 hover:underline">
                    How to add Bonuses
                    </Link>
                  </li>
                </ul>
              </nav>
            </CardContent>
          </Card>
        </main>

        {/* Main content */}
        <main className="w-full md:w-3/5">
          <Card >
            <CardHeader id={`chapter-1`}>
              <CardTitle className="text-2xl font-semibold">
              Layout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Sinbad has a very simple layout that does not need explaining, the hardest shot in the game is the left orbit 1. Dead bounce a lot, but nudge the machine up every time you dead bounce 2. The hardest and most dangerous shot in the game is the left orbit 3. You can cradle the ball on the leftmost and rightmost flippers. The strategy</p>
              <div className="flex justify-center">
                <img src={"/static/sinbad.png"} alt={"congopng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-2`}>
              <CardTitle className="text-2xl font-semibold">
              The Game Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Bonuses are the most important thing in Sinbad. Get your bonus multipliers and dead bounce with a nudge as much as you can. How to Multiply Bonuses How to Multiply Bonuses</p>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
              How to Multiply Bonuses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hit the drop targets in order of white, yellow, blue, and red to get the bonus multipliers respectively. For example, if you have all of the drop targets down except for the white one, you will have no bonus multipliers. How to add Bonuses How to add Bonuses</p>
              <div className="flex justify-center">
                <img src={"/static/sinbaddroptargets.png"} alt={"congopng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-4`}>
              <CardTitle className="text-2xl font-semibold">
              How to add Bonuses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Other than drop targets, you can also get bonuses in 2 ways. The first way is to hit the 4 rollovers on the left side of the playfield to advance the bonus indicator in the middle of the playfield. The second way is to hit the spinner in the middle of the playfield to advance the bonus indicator. You need to advance the bonus indicator 5 times to get a bonus.</p>
              <div className="flex justify-center">
                <img src={"/static/sinbadadaddbounes.png"} alt={"congopng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}