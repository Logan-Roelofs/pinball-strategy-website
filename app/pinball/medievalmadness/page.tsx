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
              <CardTitle className="text-3xl font-bold">Medieval Madness</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-4 text-sm">
                <p><span className="font-semibold">Highest Score:</span> 0</p>
                <p><span className="font-semibold">Pin-Golf Target:</span> 0</p>
              </div>
              <nav>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                  <Link href={`#chapter-1`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    The Game Plan
                  </Link>
                  <Link href={`#chapter-2`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Skill Shot
                  </Link>
                  <Link href={`#chapter-3`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Merlins Magic (Mystery)
                  </Link>
                  <Link href={`#chapter-4`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Castle Progress
                  </Link>
                  <Link href={`#chapter-5`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Castle Hurry-Up
                  </Link>
                  <Link href={`#chapter-6`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Castle Multiball
                  </Link>
                  <Link href={`#chapter-7`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Trolls! / Master of Trolls
                  </Link>
                  <Link href={`#chapter-8`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    The Five Madnesses
                  </Link>
                  <Link href={`#chapter-9`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Super Jets
                  </Link>
                  <Link href={`#chapter-10`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Multiball Madness
                  </Link>
                  <Link href={`#chapter-11`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Royal Madness
                  </Link>
                  <Link href={`#chapter-12`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Extra Balls
                  </Link>
                  <Link href={`#chapter-13`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Battle for the Kingdom (Wizard Mode)
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
                The Game Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Competitive consensus:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Battle for the Kingdom is the end goal — everything feeds into it.</li>
                <li>Stack Madnesses before starting Multiball Madness.</li>
                <li>Castle progress is always valuable, even during multiball.</li>
                <li>Troll Bombs are currency — save them for Royal Madness / BfK.</li>
                <li>Castle Hurry-Ups are sneaky big points.</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-2`}>
              <CardTitle className="text-2xl font-semibold">
                Skill Shot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">Standard Skill Shot</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Plunge to flashing rollover</li>
                <li>Scores 50K +10K per success, +5X Bonus</li>
              </ul>
              <p className="font-semibold mb-2">Super Skill Shot</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Hold left flipper while plunging</li>
                <li>Ball feeds left flipper</li>
                <li>Shoot any lit shot (ramps, orbits, catapult)</li>
                <li>Scores 100K</li>
                <li>Starts Castle Hurry-Up</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
                Merlins Magic (Mystery)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">                
                <Image src={"/static/MedievalMadnessMerlinsMagic.jpg"} alt={"Merlin's Magic"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="mb-4">Collected at Merlins Saucer, Lit at start of game, Relit by completing 3 Merlin standup targets</p>
              <p className="font-semibold mb-2">Possible awards include:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Light Lock / Award Lock</li>
                <li>Start Trolls!</li>
                <li>Start Trolls! or Troll Madness</li>
                <li>Castle Multiball</li>
                <li>Start any Madness</li>
                <li>Light Extra Ball</li>
                <li>Lower Drawbridge</li>
                <li>Destroy Gate / Destroy Castle</li>
                <li>Video Mode</li>
                <li>Troll Bombs</li>
                <li>+5X Bonus / Hold Bonus</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-4`}>
              <CardTitle className="text-2xl font-semibold">
                Castle Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Image src={"/static/MedievalMadnessCastleProgress.jpg"} alt={"Castle Progress"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="font-semibold mb-2">To destroy a castle:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Hit Drawbridge N times (1 → 6)</li>
                <li>Hit Gate N+1 times (2 → 7)</li>
                <li>Shoot Main Entrance to destroy</li>
              </ul>
              <p className="font-semibold mb-2">Scoring:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Gate hits scale with castle number</li>
                <li>Castle destroy awards scale</li>
                <li>Extra Ball lit after defeating 2 castles (default)</li>
              </ul>
              <p className="mb-4">Castle remains available during all multiballs.</p>
            </CardContent>
            <CardHeader id={`chapter-5`}>
              <CardTitle className="text-2xl font-semibold">
                Castle Hurry-Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">Lit by:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Repeating completed objectives</li>
                <li>Super Skill Shot</li>
                <li>Merlins Magic</li>
              </ul>
              <p className="font-semibold mb-2">Collected at Main Entrance</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Starts at 1M, counts down to 250K</li>
                <li>Multiple completions stack value:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>2 → 3M</li>
                  <li>3 → 5.5M</li>
                  <li>4 → 8.5M</li>
                  <li>Continues upward</li>
                </ul>
              </ul>
              <p className="font-semibold mb-2">Collected Hurry-Ups count toward EB:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>10 = Extra Ball</li>
                <li>40 = Second Extra Ball</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-6`}>
              <CardTitle className="text-2xl font-semibold">
                Castle Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Image src={"/static/MedievalMadnessCastleMultiball.jpg"} alt={"Castle Multiball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="font-semibold mb-2">Started by Lock shots</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>First MB: 3 Lock shots</li>
                <li>Later MBs: 6 Lock shots</li>
                <li>Virtual locks</li>
              </ul>
              <p className="font-semibold mb-2">Stage 1:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Ramps = Jackpot (750K base)</li>
                <li>5 jackpots light Super Jackpot</li>
              </ul>
              <p className="font-semibold mb-2">Stage 2:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Super Jackpot at Lock (1.5M base)</li>
              </ul>
              <p className="font-semibold mb-2">Stage 3:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Ramps, orbits, Lock, Catapult = Super Jackpots</li>
                <li>Completing all returns to Stage 1</li>
                <li>Jackpot value permanently increases</li>
              </ul>
              <p className="mb-4">Completing first Super Jackpot lights Extra Ball (default).</p>

            </CardContent>
            <CardHeader id={`chapter-7`}>
              <CardTitle className="text-2xl font-semibold">
                Trolls! / Master of Trolls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Image src={"/static/MedievalMadnessTrolls.jpg"} alt={"Trolls!"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="font-semibold mb-2">Light Trolls! by hitting Troll standups (default 8)</p>
              <p className="mb-4">Start Trolls! at Merlins Saucer</p>
              <p className="font-semibold mb-2">Trolls! Mode:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Both Trolls pop up</li>
                <li>Hit each Troll 3 times in 30 seconds</li>
                <li>Troll Bombs (Launch button) count as hits</li>
                <li>Completing Trolls!:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Awards 1M</li>
                  <li>Lights Troll Madness</li>
                </ul>
              </ul>
              <p className="font-semibold mb-2">Troll Bombs:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Earned via standups, Merlins Magic, banks</li>
                <li>Stack and carry over</li>
                <li>Extremely valuable for Royal Madness & BfK</li>
              </ul>
              <p className="mb-4">Destroying Trolls advances Master of Trolls (default 10 Trolls required).</p>

            </CardContent>
            <CardHeader id={`chapter-8`}>
              <CardTitle className="text-2xl font-semibold">
                The Five Madnesses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Each Madness lights after completing its task:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Troll Madness → Complete Trolls!</li>
                <li>Defender of Damsels - Right Ramp ×4 → Damsel Save → Damsel Madness</li>
                <li>Patron of the Peasants Left Ramp ×4 → Peasant Revolt → Peasant Madness</li>
                <li>Catapult Ace Catapult / Standup ×3 → Catapult Slam → Catapult Madness</li>
                <li>Joust Champion - Either Orbit ×3 → Joust Victory → Joust Madness</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-9`}>
              <CardTitle className="text-2xl font-semibold">
                Super Jets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>First Super Jets at 50 jet hits</li>
                <li>Jets score increasing values</li>
                <li>Each Super Jets requires +25 more hits</li>
                <li>During Super Jets, orbits feed bumpers</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-10`}>
              <CardTitle className="text-2xl font-semibold">
                Multiball Madness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Started at Merlins Saucer</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Requires ≥1 Madness lit</li>
                <li>Can only be played once per cycle</li>
                <li>You can stack Trolls! during this multiball</li>
              </ul>
              <p className="font-semibold mb-2">Balls in play:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>1 Madness → 2 balls</li>
                <li>2–4 Madnesses → 3 balls</li>
                <li>5 Madnesses → 4 balls</li>
              </ul>
              <p className="font-semibold mb-2">Scoring:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Jackpots: 75K +25K per Madness</li>
                <li>Super Jackpots: 250K +150K per Madness</li>
                <li>Lock = Double Super Jackpot</li>
                <li>Troll = Troll Super Jackpot (½ Super)</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-11`}>
              <CardTitle className="text-2xl font-semibold">
                Royal Madness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Image src={"/static/MedievalMadnessRoyalMadness.jpg"} alt={"Royal Madness"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="font-semibold mb-2">Lit after:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>All 5 Madnesses lit</li>
                <li>Multiball Madness completed</li>
              </ul>
              <p className="font-semibold mb-2">Single-ball timed mode:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>10 shots total - 2 ramps, 2 orbits, 2 catapult, 2 Trolls, Lock spots Catapult shots</li>
                <li>Timer resets with each shot</li>
              </ul>
              <p className="font-semibold mb-2">Completing awards: Extra Ball (default)</p>
            </CardContent>
            <CardHeader id={`chapter-12`}>
              <CardTitle className="text-2xl font-semibold">
                Extra Balls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Destroying Castles (default 2)</li>
                <li>Super Jackpot in Castle Multiball</li>
                <li>10 and 40 Hurry-Ups</li>
                <li>Merlins Magic random award</li>
                <li>Royal Madness completed</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-13`}>
              <CardTitle className="text-2xl font-semibold">
                Battle for the Kingdom (Wizard Mode)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">To light:</p>
              <p className="mb-2">Complete all 6 objectives:</p>
              <ol className="list-decimal list-inside space-y-1 mb-4">
                <li>Master of Trolls (Destroy 10 Trolls)</li>
                <li>Defender of Damsels (Shoot right ramp 4 times X 3)</li>
                <li>Patron of the Peasants (Shoot left ramp 4 times X 3)</li>
                <li>Catapult Ace (Shoot Catapult 3 times X 3)</li>
                <li>Joust Champion (Shoot either orbit 3 times X 3)</li>
                <li>Castle Crusher (Destroy all 6 castles)</li>
              </ol>
              <p className="mb-4">Start at Main Entrance (single-ball only)</p>
              <p className="font-semibold mb-2">Battle for the Kingdom</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>4-ball multiball</li>
                <li>All major shots lit for 2.5M Battle Jackpots</li>
                <li>Complete all shots → Gate phase</li>
              </ul>
              <p className="font-semibold mb-2">Gate Phase:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Gate shots = 5M each</li>
                <li>Trolls pop up</li>
                <li>Use Troll Bombs to clear</li>
                <li>Final Castle shot wins Battle</li>
              </ul>
              <p className="font-semibold mb-2">Awards:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>50M bonus</li>
                <li>Victory Laps:</li>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>All shots lit</li>
                  <li>Ultra Combos score escalating values</li>
                </ul>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

