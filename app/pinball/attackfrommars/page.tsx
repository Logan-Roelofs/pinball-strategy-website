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
              <CardTitle className="text-3xl font-bold">Attack From Mars</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex gap-4 text-sm">
                <p><span className="font-semibold">Highest Score:</span> 23,000,000,000</p>
                <p><span className="font-semibold">Pin-Golf Target:</span> 3,695,553,840</p>
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
                    Stroke of Luck (Mystery)
                  </Link>
                  <Link href={`#chapter-4`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Saucer Attack Waves
                  </Link>
                  <Link href={`#chapter-5`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Combos / Super Jets
                  </Link>
                  <Link href={`#chapter-6`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Total Annihilation 
                  </Link>
                  <Link href={`#chapter-7`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Total Annihilation Multiball
                  </Link>
                  <Link href={`#chapter-8`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Regular Multiball 
                  </Link>
                  <Link href={`#chapter-9`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Martian Attack
                  </Link>
                  <Link href={`#chapter-10`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Strobe Multiball
                  </Link>
                  <Link href={`#chapter-11`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Video Mode
                  </Link>
                  <Link href={`#chapter-12`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Extra Balls collected
                  </Link>
                  <Link href={`#chapter-13`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Rule the Universe (Wizard Mode)
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
                <li>Rule the Universe — everything feeds toward this.</li>
                <li>Start Total Annihilation early and often.</li>
                <li>Progress Attack Waves methodically.</li>
                <li>Use Martian Attack to stack multiballs.</li>
                <li>Combos and Super Jets matter more than most players realize.</li>
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
                <li>Plunge into flashing Bonus X lane</li>
                <li>Scores 10M + increases by 10M each time</li>
                <li>Awards +5X Bonus</li>
              </ul>
              <p className="font-semibold mb-2">Super Skill Shot</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Hold left flipper while plunging</li>
                <li>Shoot any ramp or loop for 50M</li>
                <li>Spots all 3 Total Annihilation lamps for that shot</li>
                <li>Shooting Forcefield lowers it immediately</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
                Stroke of Luck (Mystery)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Lit at the scoop by completing the 4 rollovers in the picture, you can change lit rollovers by flipping the flippers.</p>
              <div className="flex justify-center">
                <Image src={"/static/AttackfromMarsStrokeofLuckHowToLight.jpg"} alt={"AttackfromMarsStrokeofLuckHowToLight"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="mb-2">Collect mystery by shooting right scoop</p>
              <div className="flex justify-center">
                <Image src={"/static/AttackfromMarsStrokeofLuck.jpg"} alt={"AttackfromMarsStrokeofLuck"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="font-semibold mb-2">Possible awards include:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>25M / 50M</li>
                <li>Light Extra Ball</li>
                <li>Light Lock / Award Lock</li>
                <li>Multiball</li>
                <li>Martian Attack</li>
                <li>+5X Bonus</li>
                <li>Hold Bonus</li>
                <li>Strobe Multiball</li>
                <li>Video Mode</li>
                <li>Martian Bombs</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-4`}>
              <CardTitle className="text-2xl font-semibold">
                Saucer Attack Waves
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Hit the 3 targets to drop the forcefield and then hit the saucer targets to open the hole and then shoot the hole to destroy the saucer.</p>
              <div className="flex justify-center">
                <Image src={"/static/AttackfromMarsSaucerAttackWaves.jpg"} alt={"AttackfromMarsSaucerAttackWaves"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="font-semibold mb-2">Attack Wave Order</p>
              <ol className="list-decimal list-inside space-y-1 mb-4">
                <li>USA – Statue of Liberty</li>
                <li>Germany – Brandenburg Gate</li>
                <li>England – London Bridge</li>
                <li>Italy – Tower of Pisa</li>
                <li>France – Eiffel Tower</li>
                <li>Conquer Mars</li>
              </ol>
              <p className="font-semibold mb-2">Scoring Progression</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Hits increase each wave (+4 per wave)</li>
                <li>Hit value increases (+10M per wave)</li>
                <li>Destroying Saucer bonus increases (+100M)</li>
                <li>Extra Ball lit after defeating the 2nd Saucer</li>
              </ul>
              <p className="font-semibold mb-2">Conquer Mars</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Forcefield opens permanently</li>
                <li>Shoot Saucer hole 10 times</li>
                <li>Each shot = 100M</li>
                <li>Final shot = 2.5B</li>
                <li>Can only be done once per game</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-5`}>
              <CardTitle className="text-2xl font-semibold">
                Combos / Super Jets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">Combos</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Consecutive ramp/loop shots</li>
                <li>Only during single-ball play</li>
                <li>Values:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>2-Way → 25M</li>
                    <li>3-Way → 30M</li>
                    <li>Continues upward</li>
                  </ul>
                </li>
              </ul>
              <p className="font-semibold mb-2">Super Jets</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Earned after 100 jet bumper hits</li>
                <li>Jets score 3M each</li>
                <li>Stack in Multiball, shoot the loops</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-6`}>
              <CardTitle className="text-2xl font-semibold">
                Total Annihilation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Image src={"/static/AttackfromMarsTotalAnnihilation.jpg"} alt={"AttackfromMarsTotalAnnihilation"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="font-semibold mb-2">Shoot the four major shots:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Left Loop (Capture)</li>
                <li>Left Ramp (Big-O-Beam)</li>
                <li>Right Ramp (Tractor Beam)</li>
                <li>Right Loop (Atomic Blaster)</li>
              </ul>
              <p className="mb-2">Each shot must be made 3 times</p>
              <p className="font-semibold mb-2">Values:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>1st hit → 20M</li>
                <li>2nd hit → 25M</li>
                <li>3rd hit → 30M + starts Hurry-Up</li>
              </ul>
              <p className="font-semibold mb-2">Hurry-Up</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Saucer / Forcefield lit</li>
                <li>Starts at 100M, counts down to 25M</li>
                <li>
                  Multiple Hurry-Ups stack:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>2 → 300M</li>
                    <li>3 → 500M</li>
                    <li>4 → 1B + Total Annihilation starts</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-7`}>
              <CardTitle className="text-2xl font-semibold">
                Total Annihilation Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>4-ball multiball</li>
                <li>All four major shots = Jackpots 50M +5M each collect</li>
                <li>Lock Ramp = Annihilation Jackpot = sum of all Jackpot collected</li>
                <li>Successive Total Annihilations start higher</li>
                <li>Ends when down to one ball.</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-8`}>
              <CardTitle className="text-2xl font-semibold">
                Regular Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Lock 3 balls at the Lock Hole</p>
              <div className="flex justify-center">
                <Image src={"/static/AttackfromMarsRegularMultiball.jpg"} alt={"AttackfromMarsRegularMultiball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Locks are virtual (no physical lock)</li>
                <li>Lock Ramp lights locks</li>
              </ul>
              <p className="font-semibold mb-2">During Multiball</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Five shots lit for Jackpots:</li>
                <ul className="list-disc list-inside ml-6">
                  <li>4 TA shots + Lock Ramp</li>
                </ul>
                <li>Jackpot starts at 60M, +10M per collect</li>
                <li>Once all 5 collected → Super Jackpot</li>
              </ul>
              <p className="font-semibold mb-2">Super Jackpot:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Starts at 250M</li>
                <li>Moves between shots every ~5 seconds</li>
                <li>Relights all jackpots</li>
                <li>Successive Super Jackpots increase (up to 1B).</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-9`}>
              <CardTitle className="text-2xl font-semibold">
                Martian Attack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Image src={"/static/AttackfromMarsMartianAttack.jpg"} alt={"AttackfromMarsMartianAttack"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Spell M-A-R-T-I-A-N</li>
                <li>Shoot scoop to start Martian Attack</li>
                <li>Kill 4 bouncing Martians in 30 seconds</li>
                <li>Each Martian = 20M (up to 50M later)</li>
              </ul>
              <p className="font-semibold mb-2">Killing all 4:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Starts Martian Multiball</li>
                <li>Adds another ball into play</li>
                <li>Martian shots remain lit for points</li>
              </ul>
              <p className="font-semibold mb-2">Martian Bombs</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Awarded via:</li>
                <ul className="list-disc list-inside ml-6">
                  <li>Stroke of Luck</li>
                  <li>Completing MARTIAN again</li>
                </ul>
                <li>Press Launch Button to kill a Martian instantly</li>
                <li>Bombs stack and carry over</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-10`}>
              <CardTitle className="text-2xl font-semibold">
                Strobe Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Stroke of Luck only (once per game)</li>
                <li>3-ball multiball</li>
                <li>Playfield goes dark</li>
                <li>Hit Forcefield for 50M per hit</li>
              </ul>
              <p className="font-semibold mb-2">Awards:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>10 hits → Extra Ball</li>
                <li>20 hits → 250M</li>
                <li>30 hits → Bonus</li>
              </ul>
              <p>Very long ball saver.</p>
            </CardContent>
            <CardHeader id={`chapter-11`}>
              <CardTitle className="text-2xl font-semibold">
                Video Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Stroke of Luck only (once per game)</li>
                <li>Shoot descending saucers</li>
                <li>Each hit = 3M</li>
                <li>One Smart Bomb via Launch Button</li>
              </ul>
              <p className="font-semibold mb-2">Awards:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>~30 saucers → Extra Ball</li>
                <li>Final Mothership = 80 hits</li>
                <li>Total possible value ~635M</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-12`}>
              <CardTitle className="text-2xl font-semibold">
                Extra Balls collected
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Extra Balls can be lit by:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Defeating 2nd Saucer</li>
                <li>Completing rollover lanes 10 times</li>
                <li>Video Mode</li>
                <li>Strobe Multiball (10 hits)</li>
                <li>Stroke of Luck</li>
              </ul>
              <p>All collected at Stroke of Luck (except Video Mode EB).</p>
            </CardContent>
            <CardHeader id={`chapter-13`}>
              <CardTitle className="text-2xl font-semibold">
                Rule the Universe (Wizard Mode)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">To light:</p>
              <p className="mb-2">Complete all 6 objectives:</p>
              <ol className="list-decimal list-inside space-y-1 mb-4">
                <li>Total Annihilation</li>
                <li>Martian Multiball</li>
                <li>Conquer Mars</li>
                <li>Super Jets</li>
                <li>5-Way Combo</li>
                <li>Collect a Super Jackpot</li>
              </ol>
              <p className="font-semibold mb-2">Rule the Universe</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>4-ball multiball</li>
                <li>Everything lit</li>
                <li>Jackpots start at 100M</li>
                <li>Super Jackpot roams</li>
                <li>Martians active</li>
                <li>Victory Laps lit after</li>
              </ul>
              <p className="font-semibold mb-2">Score 5B:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Flippers shut off</li>
                <li>Universe Ruled</li>
                <li>+5B bonus</li>
                <li>Initials + date recorded</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

