import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';

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
                <p className="mb-4">My Highest Score: 484,940</p>
                <p className="mb-4">Pin-Golf Target: 60,000</p>
              </nav>
            </CardContent>
          </Card>
        </main>

        {/* Main content */}
        <main className="w-full md:w-3/5">
          <Card >
            <CardHeader id={`chapter-2`}>
              <CardTitle className="text-2xl font-semibold">
              The Game Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get your bonus multipliers by hitting drop targets in order, that is really it. Bale out shots are the left rollovers and the middle spinner.</p>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
              How to Multiply Bonuses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hit the drop targets in order of white, yellow, blue, and red to get the respective bonus multipliers. Note that you are able to hit targets out of order, but you will not get the bonus multipliers till the previous drop targets are cleared.</p>
              <div className="flex justify-center">
                <Image src={"/static/sinbaddroptargets.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
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
                <Image src={"/static/sinbadadaddbounes.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}