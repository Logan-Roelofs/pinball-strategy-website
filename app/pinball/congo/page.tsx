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
              <CardTitle className="text-3xl font-bold">Congo</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <nav>
                <p className="mb-4">My Highest Score: ???,???,???</p>
                <p className="mb-4">Pin-Golf Target: 539,000,000</p>
                <ul className="space-y-2">
                  <li>
                    <Link href={`#chapter-1`} className="text-green-700 hover:underline">
                      The Game Plan
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-2`} className="text-green-700 hover:underline">
                      Skill Shot
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-3`} className="text-green-700 hover:underline">
                      Hazards and Rafts
                    </Link>
                  </li><li>
                    <Link href={`#chapter-4`} className="text-green-700 hover:underline">
                      Bounceback
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-5`} className="text-green-700 hover:underline">
                      Whirlpool Awards
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-6`} className="text-green-700 hover:underline">
                      Spine Chiller
                    </Link>
                  </li><li>
                    <Link href={`#chapter-7`} className="text-green-700 hover:underline">
                      Boulder Garden
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-8`} className="text-green-700 hover:underline">
                      River Class
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-9`} className="text-green-700 hover:underline">
                      Bigfoot Hotfoot
                    </Link>
                  </li><li>
                    <Link href={`#chapter-10`} className="text-green-700 hover:underline">
                      Camera Craze
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-11`} className="text-green-700 hover:underline">
                      Lost Mine
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-12`} className="text-green-700 hover:underline">
                      Multi ball
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-13`} className="text-green-700 hover:underline">
                      Vacation Bonus
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-14`} className="text-green-700 hover:underline">
                      Still need to find out
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
                Skill Shot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hit the kickback targets to get 10M+5M (Skill shot this game), Note that the kickback targets might be roaming. Or go for Super skill shot in the left outlane for 25M. </p>
              <div className="flex justify-center">
                <img src={"/static/congoSkillshot.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
                Collecting Diamonds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Collect diamonds to light locks, number of diamonds required is 4, 8, 12, ... Hit all light diamonds shots to relight diamond shots. Hitting the bottom 2 saucers will relight a diamond shot (only when the saucers are not light for a diamond shot). You can get diamonds through other awards and modes. Every 100 diamonds awards a Super Multiball (Wizard Mode)</p>
            </CardContent>
            <CardHeader id={`chapter-4`}>
              <CardTitle className="text-2xl font-semibold">
                Super Multiball (Wizard Mode)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>4 ball multiball where ramps and lower saucers are worth 10M. Super Jackpot for defeating gorilla in lower playfield for 50M. Relight Super Jackpot by scoring a Jackpot.</p>
            </CardContent>
            <CardHeader id={`chapter-5`}>
              <CardTitle className="text-2xl font-semibold">
                Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lock 3 balls here, keep in mind that you need a cretin number of diamonds to light locks 4, 8, 12, ...</p>
              <div className="flex justify-center">
                <img src={"/static/congoLockShot.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p>Once multiball is started hit ramps for Jackpot. If a ball makes it into the back AMY saucer, this will start Super Jackpot lit for approximately 20 seconds. Shoot  "Super Score" upper-upper orbit to collect Super Jackpot. </p>
              <div className="flex justify-center">
                <img src={"/static/congoMultJack.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-6`}>
              <CardTitle className="text-2xl font-semibold">
                M-A-P
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Shoot left ramp to collect M-A-P letters. Once collected, shoot MAP saucer to collect award. Once a route is completed, the map progresses to the next route. Completing routes are rare.</p>
              <div className="flex justify-center">
                <img src={"/static/congomap.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
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
                    <td className="border border-gray-400 px-2 py-1">"?" 5 Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">"?" 5 Diamonds</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Jungle Jackpot</td>
                    <td className="border border-gray-400 px-2 py-1">Jungle Jackpot</td>
                    <td className="border border-gray-400 px-2 py-1">Jungle Jackpot</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Light Extra Ball</td>
                    <td className="border border-gray-400 px-2 py-1">"?" Re-light Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">"?" Re-light Diamonds</td>
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
                    <td className="border border-gray-400 px-2 py-1">"?" 50 Diamonds</td>
                    <td className="border border-gray-400 px-2 py-1">Diamond Hunt Multiball</td>
                  </tr>
                  </tbody>
                </table>
                <ul className="list-disc list-inside">
                <li>Diamond Hunt Multiball- 2 ball multiball, awarded at Mystery or MAP, all diamond shots are lit for 2 diamonds each.</li>
                <li> Skill Fire- flippers die and you have 20 seconds to shoot as many skill shots as you can. (This can be the biggest points in the game as the points from the last skill shot stack on top of each other)</li>
                <li>Ends when one or both balls drain.</li>
              </ul>
                </div>
            </CardContent>
            <CardHeader id={`chapter-7`}>
              <CardTitle className="text-2xl font-semibold">
              A-M-Y Mode 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>I am not to sure about this one, but hit the upper orbit 3 times</p>
            </CardContent>
            <CardHeader id={`chapter-8`}>
              <CardTitle className="text-2xl font-semibold">
              GRAY Attack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Spell Gray to start Mini playfild. Spell CONGO, each target is worth 10M. Don't play random there is some skill. If you spell CONGO you get these awards in order.</p>
              <ul className="list-disc list-inside">
                <li>20 Diamonds</li>
                <li>Multiball</li>
                <li>20 Diamonds</li>
                <li>Light Extra Ball (Left)</li>
                <li>50M (repeats for subsequent completions)</li>
              </ul>
              <div className="flex justify-center">
                <img src={"/static/congogray.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-9`}>
              <CardTitle className="text-2xl font-semibold">
              Video Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hit the "We are Watching You" targets 5 times to light video mode. Then start video mode in the scoop. AVOID rocks and hippos. Hold flippers don't just press them.</p>
              <div className="flex justify-center">
                <img src={"/static/congowearewatchingyou.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-10`}>
              <CardTitle className="text-2xl font-semibold">
                Mine Shaft 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is always list other than in multiball or a timed mode. This will start a video mode where you should always go left and hope you make it far.</p>
              <div className="flex justify-center"> 
                <img src={"/static/congomine.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-11`}>
              <CardTitle className="text-2xl font-semibold">
              Satellite Transfer 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>If you start this trap up and do nothing for the 20 seconds it last. You can not do anything else but hit the satellite for almost no points.</p>
              <div className="flex justify-center"> 
                <img src={"/static/congosat.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-12`}>
              <CardTitle className="text-2xl font-semibold">
              Extra Balls 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>MAP award lights left orbit </li>
                <li>3 Volcano Ramps (based on operator setting) lights Volcano Ramp (right) </li>
                <li>Mystery lights left orbit </li>
                <li>GRAY Gorilla Defeated 4th time lights left </li>
                <li>Complete Bonus 5x lights (left) </li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}