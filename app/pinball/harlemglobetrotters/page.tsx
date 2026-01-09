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
              <CardTitle className="text-3xl font-bold">Harlem Globetrotters</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <nav>
                <p className="mb-4">My Highest Score: 999,910</p>
                <p className="mb-4">Pin-Golf Target: 220,000</p>

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
              <p>Hit the right drop targets, then hit the left spinner. Try getting G-L-O-B-E letters when up top.</p>              
            </CardContent>
            <CardHeader id={`chapter-1`}>
              <CardTitle className="text-2xl font-semibold">
              G-L-O-B-E letters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Spelling Globe is worth 50K, and light left outlane for 25K. Whenever the ball is up top try to nudge the ball into the scoop to collect G-L-O-B-E letters. The other way to get G-L-O-B-E letters is by hitting the right targets</p>              
            </CardContent>
            <CardHeader id={`chapter-2`}>
              <CardTitle className="text-2xl font-semibold">
              Spinner All Day 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Each drop target increases the left spinners point value from 100-200-1000-2000. This left spinner is only worth going for when at 1k or more, or as a bale out shoot.</p>              
            </CardContent>
              <div className="flex justify-center">
                <Image src={"/static/harlem.jpg"} alt={"harlem"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
          </Card>
        </main>
      </div>
    </div>
  );
}