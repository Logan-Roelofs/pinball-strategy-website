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
              <CardTitle className="text-3xl font-bold">AbraCadAbra</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <nav>
                <p className="mb-4">My Highest Score: 114,430</p>
                <p className="mb-4">Pin-Golf Target: 30,000</p>
                <ul className="space-y-2">
                  <li>
                    <Link href={`#chapter-1`} className="text-green-700 hover:underline">
                    The Game Plan
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
                The Game Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>When plunging the ball go for lanes 2 or 3 as lanes 1 and 4 can sink down the middle. Go for the drop targets with the light on them as those will score bonus. To increase bonus, complete 1-4. If you need 1 or 4 try Shatzing. Another way to increase bonus is to complete drop targets then hit the middle switch. This is also what you have to do to make all drop targets come back up. That is about the whole game. It is a very fun game to learn how Shatzing works on for cheap.</p>
              <div className="flex justify-center">
                <img src={"/static/abracadabra.jpg"} alt={"congopng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}