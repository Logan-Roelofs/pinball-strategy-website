import Link from 'next/link'
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
              <CardTitle className="text-3xl font-bold">Congo</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-4 text-sm">
                <p><span className="font-semibold">Highest Score:</span> 2,311,184,340</p>
                <p><span className="font-semibold">Pin-Golf Target:</span> 539,000,000</p>
              </div>
              <nav>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                  <Link href={`#chapter-1`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    The Game Plan (Overview)
                  </Link>
                  <Link href={`#chapter-2`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Skill Shot (Ball Start)
                  </Link>
                  <Link href={`#chapter-3`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Collecting Diamonds
                  </Link>
                  <Link href={`#chapter-4`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Multiball (Main)
                  </Link>
                  <Link href={`#chapter-5`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    M-A-P
                  </Link>
                  <Link href={`#chapter-6`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    A-M-Y Mode
                  </Link>
                  <Link href={`#chapter-7`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    GRAY Attack
                  </Link>
                  <Link href={`#chapter-8`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Mystery
                  </Link>
                  <Link href={`#chapter-9`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Video Mode
                  </Link>
                  <Link href={`#chapter-10`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Mine Shaft
                  </Link>
                  <Link href={`#chapter-11`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Satellite Transfer
                  </Link>
                  <Link href={`#chapter-12`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Extra Balls
                  </Link>
                  <Link href={`#chapter-13`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Super Multiball (Wizard Mode)
                  </Link>
                </div>
              </nav>
            </CardContent>
          </Card>
        </main>

        {/* Main content */}
        <main className="w-full md:w-3/5">
          <Card >
            <CardHeader id={`chapter-1`}>
              <CardTitle className="text-2xl font-semibold">
                The Game Plan (Overview)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>From pinball.org:</p>
              <ul className="list-disc list-inside">
                <li>Get the extra balls! They are easy to get, so get them!</li>
                <li>Get MAP awards while locking balls along the way.</li>
                <li>Play multiballs as they come.</li>
                <li>Collect mystery award after spelling ZINJ.</li>
                <li>Spell GRAY and defeat lower gorilla for big awards. </li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-2`}>
              <CardTitle className="text-2xl font-semibold">
                Skill Shot (Ball Start)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Hit the kickback targets to get 10M + 5M (standard skill shot)</li>
                <li>Note that the kickback targets might be roaming</li>
                <li>Or go for Super Skill Shot in the left outlane for 25M</li>
              </ul>
              <div className="flex justify-center">
                <Image src={"/static/congoskillshot.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
                Collecting Diamonds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Collect diamonds to light locks (number of diamonds required: 4, 8, 12, ...)</li>
                <li>Hit all lit diamond shots to relight diamond shots</li>
                <li>Hitting the bottom 2 saucers will relight a diamond shot (only when those saucers are not already lit for diamonds)</li>
                <li>You can earn diamonds through other awards and modes</li>
                <li>Every 100 diamonds awards Super Multiball (Wizard Mode)</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-4`}>
              <CardTitle className="text-2xl font-semibold">
                Multiball (Main)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Lock 3 balls to start Multiball</li>
                <li>Keep in mind you need a certain number of diamonds to light locks: 4, 8, 12, ...</li>
              </ul>
              <div className="flex justify-center">
                <Image src={"/static/congolockshot.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="font-semibold mt-4">Once multiball is started:</p>
              <ul className="list-disc list-inside">
                <li>Hit ramps for Jackpots</li>
                <li>If a ball makes it into the back AMY saucer, Super Jackpot is lit for ~20 seconds</li>
                <li>Shoot the upper–upper orbit (Super Score) to collect Super Jackpot</li>
              </ul>
              <div className="flex justify-center">
                <Image src={"/static/congomultjack.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-5`}>
              <CardTitle className="text-2xl font-semibold">
                M-A-P
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Shoot the left ramp to collect M-A-P letters</li>
                <li>Once collected, shoot the MAP saucer to collect an award</li>
                <li>Once a route is completed, the map progresses to the next route</li>
                <li>Completing all routes is rare</li>
              </ul>
              <div className="flex justify-center">
                <Image src={"/static/congomap.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
                <div className="table-container">
                <table className="table-auto border-collapse border border-gray-400">
                  <thead>
                  <tr>
                    <th className="border border-gray-400 px-2 py-1">ROUTE 1</th>
                    <th className="border border-gray-400 px-2 py-1">ROUTE 2</th>
                    <th className="border border-gray-400 px-2 py-1">ROUTE 3</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">25M</td>
                    <td className="border border-gray-400 px-2 py-1">25M</td>
                    <td className="border border-gray-400 px-2 py-1">25M</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">+5 Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">+5 Diamonds</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Jungle Jackpot</td>
                    <td className="border border-gray-400 px-2 py-1">Jungle Jackpot</td>
                    <td className="border border-gray-400 px-2 py-1">Jungle Jackpot</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Light Extra Ball</td>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Skill Fire</td>
                    <td className="border border-gray-400 px-2 py-1">Multiball*</td>
                    <td className="border border-gray-400 px-2 py-1">Skill Fire</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">Re-light Diamonds</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">25M</td>
                    <td className="border border-gray-400 px-2 py-1">25M</td>
                    <td className="border border-gray-400 px-2 py-1">25M</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Diamond Hunt Multiball</td>
                    <td className="border border-gray-400 px-2 py-1">+50 Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">Diamond Hunt Multiball</td>
                  </tr>
                  </tbody>
                </table>
                <p className="mt-4 font-semibold">Notes:</p>
                <ul className="list-disc list-inside">
                <li>Diamond Hunt Multiball – 2-ball multiball. All diamond shots are lit for 2 diamonds each.</li>
                <li>Skill Fire – Flippers die and you have 20 seconds to shoot as many skill shots as possible. This can be huge points since the value stacks.</li>
                <li>Ends when one or both balls drain.</li>
              </ul>
                </div>
            </CardContent>
            <CardHeader id={`chapter-6`}>
              <CardTitle className="text-2xl font-semibold">
              A-M-Y Mode 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Shoot the upper orbit to collect A-M-Y letters</li>
                <li>Completing A-M-Y starts a timed mode</li>
                <li>Shoot flashing major shots (ramps/orbits) for increasing values</li>
                <li>Completing the mode awards diamonds and progresses toward MAP and multiball features</li>
                <li>Not the highest scoring mode, but very helpful for diamond progression</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-7`}>
              <CardTitle className="text-2xl font-semibold">
              GRAY Attack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Spell G-R-A-Y to start the mini playfield</li>
                <li>Spell C-O-N-G-O</li>
                <li>Each target is worth 10M</li>
                <li>Do not shoot randomly — there is definite strategy</li>
              </ul>
              <p className="font-semibold mt-4">Spelling CONGO awards the following in order:</p>
              <ul className="list-disc list-inside">
                <li>20 Diamonds</li>
                <li>Multiball</li>
                <li>20 Diamonds</li>
                <li>Light Extra Ball (Left)</li>
                <li>50M (repeats for subsequent completions)</li>
              </ul>
              <div className="flex justify-center">
                <Image src={"/static/congogray.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-8`}>
              <CardTitle className="text-2xl font-semibold">
              Mystery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Spell Z-I-N-J to light Mystery at the scoop.</p>
            </CardContent>
            <CardHeader id={`chapter-9`}>
              <CardTitle className="text-2xl font-semibold">
              Video Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Hit the &quot;We Are Watching You&quot; targets 5 times to light Video Mode</li>
                <li>Start Video Mode at the scoop</li>
                <li>Avoid rocks and hippos</li>
                <li>Hold flippers — do not tap</li>
                <li>Timing is more important than speed</li>
              </ul>
              <div className="flex justify-center">
                <Image src={"/static/congowearewatchingyou.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-10`}>
              <CardTitle className="text-2xl font-semibold">
                Mine Shaft 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>This is always lit, except during multiball or timed modes</li>
                <li>Starts a video-style mode</li>
                <li>Always go left</li>
                <li>Hope you make it far — it&apos;s mostly risk/reward</li>
              </ul>
              <div className="flex justify-center"> 
                <Image src={"/static/congomine.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-11`}>
              <CardTitle className="text-2xl font-semibold">
              Satellite Transfer 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Timed mode lasting about 20 seconds</li>
                <li>While active, you can&apos;t really do anything else</li>
                <li>Shoot the satellite repeatedly</li>
                <li>Scores very little and is mostly a stall mode</li>
              </ul>
              <div className="flex justify-center"> 
                <Image src={"/static/congosat.png"} alt={"congopng"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs"/>
              </div>
            </CardContent>
            <CardHeader id={`chapter-12`}>
              <CardTitle className="text-2xl font-semibold">
              Extra Balls 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Extra Balls can be lit by:</p>
              <ul className="list-disc list-inside">
                <li>MAP award → Left orbit</li>
                <li>3 Volcano Ramps (operator setting) → Volcano Ramp (Right)</li>
                <li>Mystery → Left orbit</li>
                <li>GRAY Gorilla defeated 4th time → Left orbit</li>
                <li>Complete Bonus 5X → Left orbit</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-13`}>
              <CardTitle className="text-2xl font-semibold">
                Super Multiball (Wizard Mode)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>4-ball multiball</li>
                <li>Ramps and lower saucers are worth 10M</li>
                <li>Super Jackpot for defeating the gorilla in the lower playfield for 50M</li>
                <li>Relight Super Jackpot by scoring a regular Jackpot</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}