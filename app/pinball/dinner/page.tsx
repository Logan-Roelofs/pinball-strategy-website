import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
    return (
        <div className=" mx-auto max-w-6xl items-center justify-between md:px-6 p-2">
            <div className="flex flex-col gap-4 w-full items-center">
                {/* Sidebar with navigation */}
                <main className="w-full md:w-3/5">
                    <Card className="flex flex-col max-h-fit">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">Diner NOT FINISHED</CardTitle>
                            <hr className="my-4 border-t border-gray-300" />
                        </CardHeader>
                        <CardContent>
                            <nav>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href={`#game-plan`} className="text-green-700 hover:underline">
                                            The Game Plan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#skill-shot`} className="text-green-700 hover:underline">
                                            Skill Shot
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#eat-lanes`} className="text-green-700 hover:underline">
                                            E-A-T Lanes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#customers`} className="text-green-700 hover:underline">
                                            Customers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#grill-shot`} className="text-green-700 hover:underline">
                                            Grill Shot
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#cash-register-ramp`} className="text-green-700 hover:underline">
                                            Cash Register Ramp
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#cup-ramp`} className="text-green-700 hover:underline">
                                            Cup Ramp & Stir the Cup
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#the-cup`} className="text-green-700 hover:underline">
                                            The Cup (Stir the Cup)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#todays-special`} className="text-green-700 hover:underline">
                                            Today&apos;s Special (Mystery Hole)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#multiball`} className="text-green-700 hover:underline">
                                            Multiball
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#rush`} className="text-green-700 hover:underline">
                                            Rush (Multiball Feature)
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`#end-of-ball-bonus`} className="text-green-700 hover:underline">
                                            End-of-Ball Bonus
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </CardContent>
                    </Card>
                </main>

                {/* Main content */}
                <main className="w-full md:w-3/5">
                    <Card>
                        <CardHeader id={`game-plan`}>
                            <CardTitle className="text-2xl font-semibold">
                                The Game Plan
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p><strong>From Gloomboy&apos;s Guide to Williams&apos; Diner: </strong>Hit right Ramp. Hit cup shot for 3.5M. Lock ball. Nail left ramp repeatedly to increase Dine-Time value and light extra ball. Release Ball. During multiball go for &quot;Get the Rush&quot;. Serve the customers and get your prize. Repeat.</p>
                        </CardContent>

                        <CardHeader id={`skill-shot`}>
                            <CardTitle className="text-2xl font-semibold">
                                Skill Shot
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Plunge the ball to the Upper Left Saucer via the jukebox lane to collect the flashing Skill Shot value. (You get a skill shot after locking a ball as well)</p>
                            <p className="mb-2"><strong>Skill Shot Values:</strong> 150K, 100K, 75K, 50K, 25K</p>
                            <p className="mb-2"><strong>Scoring:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>First attempt = 1X</li>
                                <li>Second attempt = 2X</li>
                                <li>Third attempt = 3X</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`eat-lanes`}>
                            <CardTitle className="text-2xl font-semibold">
                                E-A-T Lanes
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Complete E-A-T lanes at the top of the playfield to advance bonuses.</p>
                            <p className="mb-2"><strong>Awards:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>2X → 3X → 4X → 5X Bonus → 100K per completion ↺</li>
                            </ul>
                            <p className="mb-2"><strong>Upon completion:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Lights both Serve Food ramp arrows</li>
                                <li>Lights Advance Dine-Time on one inlane</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`customers`}>
                            <CardTitle className="text-2xl font-semibold">
                                Customers / Dine-Time
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Five customers must be served to start Dine-Time.</p>
                            <p className="mb-2"><strong>Serving a Customer:</strong> Complete all 6 drop targets</p>
                            <p className="mb-2"><strong>After serving: </strong>Drop targets reset and next customer is selected</p>
                            <p className="mb-2"><strong>Ramp Assistance: </strong>If E-A-T lanes are complete, ramp shots spot one full drop target bank.</p>
                            <p className="mb-2 mt-4"><strong>Once Dine-Time is lit to collect the jackpot, the ball must travel Spinner → Upper Left Saucer or Today&apos;s Special hole feeding into saucer.</strong></p>
                            <p className="mb-2"><strong>Jackpot Value:</strong>1M × Clock value (1–12)</p>
                            <p className="mb-2"><strong>Timer:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Jackpot lit for ~10–15 seconds</li>
                                <li>Failure resets last customer (must re-serve)</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`grill-shot`}>
                            <CardTitle className="text-2xl font-semibold">
                                Grill Shot
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Located under the Cash Register Ramp near the jet bumpers. This shot is never worth going for in my opinion.</p>
                            <p className="mb-2"><strong>Base Behavior:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>Scores points per hit</li>
                            </ul>
                            <p className="mb-2"><strong>Bonus Grill Shot:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>Lit briefly after serving a customer</li>
                                <li>Value increases after clearing drop target banks</li>
                            </ul>
                            <p className="mb-2"><strong>Bonus Values (cycle):</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>100K → 250K → 500K → 1.5M → reset</li>
                            </ul>
                            <p className="mb-2"><strong>Carryover:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Grill Shot value carries between balls (factory setting)</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`cash-register-ramp`}>
                            <CardTitle className="text-2xl font-semibold">
                                Cash Register Ramp
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Key progression shot in the game.</p>
                            <p className="mb-2"><strong>Ramp Value Progression:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>20K → 40K → 60K → 80K → 100K → 120K → 140K → etc.</li>
                            </ul>
                            <p className="mb-2"><strong>Special Awards:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>After 80K: Lights Grill Shot for Extra Ball (one per ball)</li>
                                <li>After 100K: Each ramp adds +1M to Dine-Time value</li>
                            </ul>
                            <p className="mb-2"><strong>Multiball Lock:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Shoot right ramp, then left ramp to raise lock and capture a ball</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`cup-ramp`}>
                            <CardTitle className="text-2xl font-semibold">
                                Cup Ramp & Stir the Cup
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2"><strong>First Cup Ramp shot:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Opens Cup diverter for ~10 seconds</li>
                                <li>Raises left ramp diverter for ball lock</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`the-cup`}>
                            <CardTitle className="text-2xl font-semibold">
                                The Cup (Stir the Cup)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Ball circles the cup, advancing DINER letters.</p>
                            <p className="mb-2"><strong>DINER Awards:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>D = 25K</li>
                                <li>I = 50K</li>
                                <li>N = 75K</li>
                                <li>E = 100K</li>
                                <li>R = 250K</li>
                            </ul>
                            <p className="mb-2"><strong>Cup Scoring:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>Each award scores 10X its value</li>
                                <li>After R: Each revolution scores +1M (up to 3.5M)</li>
                            </ul>
                            <p className="mb-2"><strong>Reset Requirement:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Shoot right ramp 5 times to reopen cup diverter</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`todays-special`}>
                            <CardTitle className="text-2xl font-semibold">
                                Today&apos;s Special (Mystery Hole)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Lit at ball start and via left inlane.</p>
                            <p className="mb-2"><strong>Possible Awards:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>25K</li>
                                <li>50K</li>
                                <li>75K</li>
                                <li>100K</li>
                                <li>250K</li>
                                <li>Extra Ball</li>
                                <li>Advance Dine-Time</li>
                                <li>Serve Customer</li>
                                <li>Start Multiball (if a ball is locked)</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`multiball`}>
                            <CardTitle className="text-2xl font-semibold">
                                Multiball
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">2-ball multiball.</p>
                            <p className="mb-2"><strong>Starting Multiball:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>Lock ball via ramps</li>
                                <li>Shoot Spinner to Upper Left Saucer</li>
                                <li>OR award Start Multiball from Special hole</li>
                            </ul>
                            <p className="mb-2"><strong>Objectives:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Clear drop targets quickly</li>
                                <li>Beat the Rush for bonus scoring</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`rush`}>
                            <CardTitle className="text-2xl font-semibold">
                                Rush (Multiball Feature)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Available only during Multiball.</p>
                            <p className="mb-2"><strong>Rush Shots:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>Rush #1: Upper Left Saucer</li>
                                <li>Rush #2: Today&apos;s Special hole</li>
                            </ul>
                            <p className="mb-2"><strong>Rules:</strong></p>
                            <ul className="list-disc list-inside space-y-1 mb-4">
                                <li>Shots must be made in order</li>
                                <li>Timed (10–15 seconds)</li>
                                <li>Ends if balls drain</li>
                            </ul>
                            <p className="mb-2"><strong>Reward:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Both ramps score 500K each for remainder of Multiball</li>
                            </ul>
                        </CardContent>

                        <CardHeader id={`end-of-ball-bonus`}>
                            <CardTitle className="text-2xl font-semibold">
                                End-of-Ball Bonus
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-2">Bonus = Jet Bumper hits × Bonus Multiplier</p>
                            <p className="mb-2"><strong>Tip Bonus:</strong> Each served customer adds +1% to bonus total</p>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    );
}

