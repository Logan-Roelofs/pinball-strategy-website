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
              <CardTitle className="text-3xl font-bold">Metallica</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <nav>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                  <Link href={`#chapter-1`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Skill Shot
                  </Link>
                  <Link href={`#chapter-2`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Crank It Up
                  </Link>
                  <Link href={`#chapter-3`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    All Multiballs have an Add-a-Ball
                  </Link>
                  <Link href={`#chapter-4`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Electric Chair Multiball
                  </Link>
                  <Link href={`#chapter-5`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Grave Marker Multiball
                  </Link>
                  <Link href={`#chapter-6`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Snake Multiball
                  </Link>
                  <Link href={`#chapter-7`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Casket Multiball
                  </Link>
                  <Link href={`#chapter-8`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Side Modes
                  </Link>
                  <Link href={`#chapter-9`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Mystery
                  </Link>
                  <Link href={`#chapter-10`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    Extra Balls
                  </Link>
                  <Link href={`#chapter-11`} className="text-green-700 hover:underline hover:text-green-800 py-1">
                    End of the Line (Wizard Mode)
                  </Link>
                </div>
              </nav>
            </CardContent>
          </Card>
        </main>

        {/* YouTube Video Preview */}
        <main className="w-full md:w-3/5">
          <Card className="mb-4">
            <CardContent className="pt-6">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/O26SH3gNVnY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Main content */}
        <main className="w-full md:w-3/5">
          <Card >
            <CardHeader id={`chapter-1`}>
              <CardTitle className="text-2xl font-semibold">
                Skill Shot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Plunge for the flashing rollover to score a Skill Shot.</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Base value: <strong>200K</strong> (+50K future value)</li>
                <li>Right rollover scores <strong>2× Skill Shot</strong></li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Super Skill Shot</h3>
              <p>Hold <strong>left flipper</strong> to disable the orbit up-post. Shoot any major shot (Scoop, Snake, Coffin, Sparky, Orbits) to collect:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>400k (+100K future value)</li>
                <li>Bonus awards based on shot:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Dead End → Light <strong>2× Play-field</strong></li>
                    <li>Scoop → <strong>Mystery</strong></li>
                    <li>Random major shot → Coffin Hurry-Up</li>
                    <li>Rollovers → <strong>2× or 4× Skill Shot</strong></li>
                  </ul>
                </li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-2`}>
              <CardTitle className="text-2xl font-semibold">
                Crank It Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src={"/static/metallicaCrankItUp.jpg"} alt={"Crank It Up"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-3">Lighting Crank It Up</h3>
              <p>Collect 12 of each items total (+1 per Crank It Up already played):</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>12 x Electric Chairs (shoot Electric Chair / light Electric insert)</li>
                <li>12 x Grave Markers (Shoot drop target / light grave markers insert)</li>
                <li>12 x Snakes (Shoot snake / light snakes insert)</li>
                <li>12 x Coffins (Shoot coffins / in-lane then coffin equal to 2 shots)</li>
              </ul>
              <p className="mt-2">Crank It Up lights at the <strong>Scoop</strong> once requirements are met and the game returns to single-ball play.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">General Crank It Up Rules</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Shoot all 4 main shots to light collect jackpot on the scoop (electric chair, snake, grave, coffin) This is one way to exit crank it up.</li>
                <li>Completing enough shots awards a <strong>Completion Bonus</strong></li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Crank It Up Modes</h3>
              <p className="font-semibold mb-2">For Whom the Bell Tolls</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Shoot all 5 major shots to light item inserts</li>
                <li>Completing rows or columns scores higher jackpots</li>
                <li>Light all 15 inserts for Completion Bonus</li>
              </ul>
              <p className="font-semibold mb-2">Fade to Black</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Switch hits build jackpot and collect jackpots</li>
                <li>Solid shots score partial jackpot</li>
                <li>Fill the progress bar for Completion Bonus</li>
              </ul>
              <p className="font-semibold mb-2">Battery</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Shoot Sparky repeatedly</li>
                <li>Jackpots light at other shots</li>
                <li>12 Sparky hits score Completion Bonus</li>
              </ul>
              <p className="font-semibold mb-2">Enter Sandman</p>
              <ul className="list-disc list-inside space-y-1">
                <li>3 Random inserts flash and alternate per switch hit</li>
                <li>Shots with multiple lit inserts score higher jackpots</li>
                <li>Light all inserts solid for Completion Bonus</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
                All Multiballs have an Add-a-Ball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src={"/static/metallicaPicksplusSnake.jpg"} alt={"Add-a-Ball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p>Complete pick targets then Lock ball at <strong>Snake</strong></p>
              <p className="mt-2">Awards:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Add-a-ball</li>
                <li><strong>2× Playfield (20 seconds)</strong></li>
                <li>Ball Saver</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-4`}>
              <CardTitle className="text-2xl font-semibold">
                Electric Chair Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src={"/static/metallicaElectric.jpg"} alt={"Electric Chair Multiball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="mb-2"><span className="font-semibold">Started by:</span> Shooting Sparky 10 times ( +2 for subsequent Electric Chair Multiball)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Shoot Sparky and orbits for jackpots</li>
                <li>Fill power meter → shoot Sparky for <strong>Super Jackpot</strong></li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-5`}>
              <CardTitle className="text-2xl font-semibold">
                Grave Marker Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src={"/static/metallicaGrave.jpg"} alt={"Grave Marker Multiball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="mb-2"><span className="font-semibold">Started by:</span> Completing drop targets, then shooting Grave Marker ( +1 for subsequent Grave Marker Multiball)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>All major shots score jackpots (Grave Marker target spots jackpots)</li>
                <li>After all jackpots collected: Grave Marker lights for Double Jackpot, once hit, the Magnet holds for 20 seconds while you builds Super Jackpot with other lit jackpots then collect at the held magnet before the 20 seconds is over.</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-6`}>
              <CardTitle className="text-2xl font-semibold">
                Snake Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src={"/static/metallicaSnake.jpg"} alt={"Snake Multiball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="mb-2"><span className="font-semibold">Started by:</span> Completing S-N-A-K-E (once you collect a snake letter you must shoot a snake insert to be able to collect another letter)</p>
              <p className="font-semibold mb-2 mt-4">During Multiball:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Jackpots at all major shots, Each jackpot adds to +1x to Snake combo (max of 3x)</li>
                <li>Collect <strong>Snake Combo</strong> ( Left Ramp / Right Orbit → Snake) for Super Jackpot</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-7`}>
              <CardTitle className="text-2xl font-semibold">
                Casket Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-4">
                <Image src={"/static/metallicaCoffin.jpg"} alt={"Casket Multiball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="mb-2"><span className="font-semibold">Started by:</span> Locking 3 balls at the Coffin (5 hits to the Coffin to light first lock, 10 hits to the Coffin every lock after that)</p>
              <p className="font-semibold mb-2 mt-4">START another multi-ball in this one!!!!</p>
              <p className="font-semibold mb-2">STACK/START modes!!!!</p>
              <p className="font-semibold mb-2 mt-4">During Multiball:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Alternate red arrows and captive ball for jackpots</li>
                <li>Every 5 jackpots scores a <strong>Super Jackpot</strong></li>
                <li>Excellent for stacking Seek & Destroy or Crank It Up</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-8`}>
              <CardTitle className="text-2xl font-semibold">
                Side Modes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Side modes can run during single-ball play, multiballs, and Crank It Up.</p>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">FUEL</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Shoot FUEL targets x4 to build gauge and Lights Dead End for <strong>2× Playfield</strong></li>
                <li>Full gauge starts FUEL Frenzy (3x fuel target completions + 1 for every subsequent  FUEL Frenzy):
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>All switches score 10k and adds to the jackpot value</li>
                    <li>Hit Fuel targets to increase time in mode and light Dead End jackpots</li>
                    <li>Dead End jackpots can be cashed out repeatedly</li>
                  </ul>
                </li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Lady Justice</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Spell METALLICA via ramps</li>
                <li>Alternating left/right shots score increasing values</li>
                <li>Alternation scores <strong>2× value</strong></li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Seek & Destroy</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Collect all 5 Coffin Hurry-Ups (all 3 light inserts [electric, coffin, snake] are on a main shot then hit the captive ball)</li>
                <li>Shoot lit &quot;Seek&quot; shot → captive ball to &quot;Destroy&quot;</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">Blackened</h3>
              <div className="flex justify-center mb-4">
                <Image src={"/static/metallicaPickss.jpg"} alt={"Blackened"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Complete pick targets to collect band members (10 pick target completions for your first Blackened, then 14 for your second, etc.)</li>
                <li>Complete Pick targets to light shots for 1M</li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-9`}>
              <CardTitle className="text-2xl font-semibold">
                Mystery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lit by completing all rollover lanes.</p>
              <p className="font-semibold mb-2 mt-2">Possible awards:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Points</li>
                <li>Light items</li>
                <li>SNAKE letters</li>
                <li>METALLICA letters</li>
                <li>Bonus X</li>
              </ul>
              <p className="mt-2">During Crank It Up:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Always <strong>spots a shot</strong></li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-10`}>
              <CardTitle className="text-2xl font-semibold">
                Extra Balls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lit at the Scoop by:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Shooting the captive ball 10, then 40, 70, etc. times ((+/- depending on settings)</li>
                <li>15, then 50 <strong>Combos</strong></li>
                <li>10 <strong>Blown Pistons (combos that end in the 2x shot)</strong></li>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-11`}>
              <CardTitle className="text-2xl font-semibold">
                End of the Line (Wizard Mode)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">Qualified by:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Playing all 4 Crank It Up modes</li>
                <li>Collecting enough items to light the 5th Crank It Up</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-3">Rules</h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Starts as 2-ball multiball</li>
                <li>One shot lit for jackpot</li>
                <li>Collect jackpot → roving Super Jackpot</li>
                <li>Each Super Jackpot:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Adds a ball</li>
                    <li>Increases difficulty</li>
                  </ul>
                </li>
                <li>Final phase:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>All shots lit for jackpots</li>
                    <li>Final Scoop collect often worth <strong>hundreds of millions or more</strong></li>
                    <li>Can be doubled with 2× / 4× Playfield</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4">After End of the Line:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>No more Crank It Up modes</li>
                <li>Remaining Crank It Up awards score flat points</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
