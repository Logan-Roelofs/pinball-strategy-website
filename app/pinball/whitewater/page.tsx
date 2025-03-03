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
              <CardTitle className="text-3xl font-bold">White Water</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <nav>
                <p className="mb-4">My Highest Score: 696,674,770</p>
                <p className="mb-4">Pin-Golf Target: 340,000,000</p>
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
              <p>Prioritize Whirlpool Awards and lit Hazards early. During Multiball Focus on Double/Triple Jackpots during Multiball for massive scores.</p>
            </CardContent>
            <CardHeader id={`chapter-2`}>
              <CardTitle className="text-2xl font-semibold">
                Skill Shot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Plunge the ball very softly so that it will be on the top playfield. Then hit the lit-up shot on the upper playfield for a skill shot.</p>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterSkillShot.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
                Hazards and Rafts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>1. Hit light Hazards shots to increase your raft value. Each raft takes a different amount of shots 1-2-2-3-3-4-4-5-5. </p>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterRaftsShots.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p>2. Advancing to a higher raft awards points based on the raft number (1M times the raft number)</p>
              <p>3. The raft number also influences the base Jackpot value during Multiball, calculated as 10M plus 1M times the raft number. </p>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterRafts.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-4`}>
              <CardTitle className="text-2xl font-semibold">
                Bounceback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>You can relight the Bounceback (left outlane) by hitting the three red plastic targets in the center of the playfield. If the Bounceback is already lit, completing these targets will spot a Hazard instead.</p>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterBounceBack.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-5`}>
              <CardTitle className="text-2xl font-semibold">
                Whirlpool Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Collecting Awards: To collect an award, shoot Bigfoot Bluff when its lit (red light). To light Bigfoot Bluff, shoot Insanity Falls when its lit (yellow light). Hitting the Jet Bumpers cycles through the available awards.</p>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterwhirlpoolAwardsShots.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p>The awards, in order, are:</p>
              <ul className="list-disc list-inside">
                <li>Whirlpool Challenge (sequence)</li>
                <ul className="list-disc list-inside ml-6">
                  <li>A two-ball multiball mode focused on shooting the Whirlpool for increasing points. 5M + 2M for each susequent shot. 20M on ever 6th shot + 20M for ever 6 shots completed</li>
                  <li>A Last Chance 5M is offered if you lose a ball without scoring.</li>
                </ul>
                <li>Man Overboard (sequence)</li>
                <ul className="list-disc list-inside ml-6">
                  <li>Makes all currently lit Hazards worth 20M, counting down to 3M</li>
                </ul>
                <li>Light Extra Ball</li>
                <li>Advance Raft</li>
                <li>Mystery Canyon, One of the following:</li>
                <ul className="list-disc list-inside ml-6">
                  <li>5M</li>
                  <li>6M</li>
                  <li>8M</li>
                  <li>Extra Ball Lit</li>
                  <li>Special</li>
                  <li>Advance to River Class 6</li>
                  <li>Advance 3 Rafts</li>
                </ul>
                <li>5X Playfield (sequence)</li>
              </ul>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterwhirlpoolAwards.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-6`}>
              <CardTitle className="text-2xl font-semibold">
                Spine Chiller
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Multi-Millions is the Spine Chillers unique feature, starting at 2M and increasing to 5M.</p>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterSpine.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-7`}>
              <CardTitle className="text-2xl font-semibold">
                Boulder Garden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p> Boulder Garden increases Jet Bumper value from 50K to 300K. Every three hits triggers a Boulder Bash, making Jet Bumpers worth 500K for 20 seconds. 5X Playfield multiplies both the regular and Boulder Bash values, enabling huge scores.</p>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterBoulder.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-8`}>
              <CardTitle className="text-2xl font-semibold">
                River Class
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>River Class multiplies bonuses and Hazard Values (500K X River Class). There are 2 ways to lite letters:</p>
              <ul className="list-disc list-inside">
                <li>Hitting the plastic targets on the left side of the playfield (spots any unlit letter).</li>
                <li>Rolling through a lit Inlane (spots the first unlit letter) This is the safe way.</li>
              </ul>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterRiver.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-9`}>
              <CardTitle className="text-2xl font-semibold">
                Bigfoot Hotfoot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hitting the two Hotfoot targets enough times (typically 3 or 4, but varies based on settings) starts Bigfoot Hotfoot, a 20-second mode using the current ball. Awards Bigfoot Jackpots (10M each) and spots Lost Mine items (or Camera/Cow if items are complete).</p>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterCave.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-10`}>
              <CardTitle className="text-2xl font-semibold">
                Camera Craze
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Collecting the Camera during Bigfoot Hotfoot activates Camera Craze for the rest of the ball. All Hazards (except No Way Out) award 3M and show a funny Bigfoot photo.</p>
            </CardContent>
            <CardHeader id={`chapter-11`}>
              <CardTitle className="text-2xl font-semibold">
                Lost Mine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Hitting the Lost Mine (outside of Multiball or Whirlpool Award sequences) spots items needed for the Gold Rush: flashlight, map, and key. Once all three items are collected (via Lost Mine or Bigfoot Hotfoot), hitting the Lost Mine again starts the Gold Rush.</p>
              <p>Gold Rush: A two-ball multiball mode where:</p>
              <ul className="list-disc list-inside">
                <li>All switches award 250K.</li>
                <li>Hazards can still be collected normally.</li>
                <li>Ends when one or both balls drain.</li>
              </ul>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterLostMine.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-12`}>
              <CardTitle className="text-2xl font-semibold">
                Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lock all three balls at No Way Out to start three-ball Multiball. Lighting the locks becomes progressively harder:</p>
              <ul className="list-disc list-inside">
                <li>First lock: Hit each green target (Lite and Lock) once.</li>
                <li>Second lock: Hit each target twice.</li>
                <li>Third lock: Hit each target twice, but flashing targets time out if not completed quickly.</li>
              </ul>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterLocks.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p>During Multiball all three balls are fed to the upper right flipper. The number of balls that successfully go through Insanity Falls determines the Jackpot multiplier for the rest of that Multiball:</p>
              <ul className="list-disc list-inside">
                <li>0 or 1 balls: Collect Single Jackpots (base value).</li>
                <li>2 balls: Collect Double Jackpots (2X base value).</li>
                <li>3 balls: Collect Triple Jackpots (3X base value).</li>
                <li>NOTE: If 5x is going on, the Jackpot will be 5X not 10X or 15X</li>
              </ul>
              <div className="flex justify-center">
                <img src={"/static/WhiteWaterLocksshot.png"} alt={"WhiteWaterpng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-13`}>
              <CardTitle className="text-2xl font-semibold">
                Vacation Bonus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The Vacation Bonus (or Vacation Jackpot) is a major award in Whitewater. To collect it, you must complete the Vacation Planner, which has four sections:</p>
              <ul className="list-disc list-inside">
                <li>River Class: Reach River Class 6 (via R-I-V-E-R or Mystery Canyon).</li>
                <li>Wet Willies: Start Wet Willies at least once.</li>
                <li>Boulder Garden: Collect all six Whirlpool Awards.</li>
                <li>Locks: Light and lock all three balls at No Way Out.</li>
              </ul>
              <p>Once the first three sections are complete and two balls are locked, locking the third ball triggers the Vacation Bonus. Awards 200M+, a Special, and starts Multiball.</p>
            </CardContent>
            <CardHeader id={`chapter-14`}>
              <CardTitle className="text-2xl font-semibold">
                Still need to find out
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>How can I identify what river class I am on?</p>
              <p>Spell cow? 3L 1S 15R 1S 23L 1S (make sure no credits are in the machine and it is in attract mode. You might need to power cycle)</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}