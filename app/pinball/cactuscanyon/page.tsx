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
              <CardTitle className="text-3xl font-bold">Cactus Canyon</CardTitle>
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
                    <Link href={`#quick-draw`} className="text-green-700 hover:underline">
                      Quick Draw
                    </Link>
                  </li>
                  <li>
                    <Link href={`#gun-fight`} className="text-green-700 hover:underline">
                      Gun Fight
                    </Link>
                  </li>
                  <li>
                    <Link href={`#ranking-up`} className="text-green-700 hover:underline">
                      Ranking Up
                    </Link>
                  </li>
                  <li>
                    <Link href={`#bounty`} className="text-green-700 hover:underline">
                      Bounty Reward (Mystery Award)
                    </Link>
                  </li>
                  <li>
                    <Link href={`#bart-brothers`} className="text-green-700 hover:underline">
                      Bart Brothers
                    </Link>
                  </li>
                  <li>
                    <Link href={`#bionic-bart`} className="text-green-700 hover:underline">
                      Bionic Bart (Mini Wizard Mode)
                    </Link>
                  </li>
                  <li>
                    <Link href={`#save-polly`} className="text-green-700 hover:underline">
                      Save Polly Peril
                    </Link>
                  </li>
                  <li>
                    <Link href={`#gold-mine-multiball`} className="text-green-700 hover:underline">
                      Gold Mine Multiball
                    </Link>
                  </li>
                  <li>
                    <Link href={`#showdown-multiball`} className="text-green-700 hover:underline">
                      Showdown Multiball
                    </Link>
                  </li>
                  <li>
                    <Link href={`#stampede-multiball`} className="text-green-700 hover:underline">
                      Stampede Multiball
                    </Link>
                  </li>
                  <li>
                    <Link href={`#extra-balls`} className="text-green-700 hover:underline">
                      Extra Balls
                    </Link>
                  </li>
                  <li>
                    <Link href={`#high-noon`} className="text-green-700 hover:underline">
                      High Noon (Wizard Mode)
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
                <p>Make progress toward ranking up whenever possible through Gun Fight, Quick Draw, and Bounty awards. Ranking up naturally advances you toward Showdown Multiball over time. Try to start Gold Mine Multiball early to collect the Mother Lode, then focus on completing all major shots three times to qualify Stampede Multiball—scoring big points from modes along the way.</p>
            </CardContent>
            <CardHeader id={`skill-shot`}>
              <CardTitle className="text-2xl font-semibold">
                Skill Shot
              </CardTitle>
            </CardHeader>
            <CardContent>
            <p>Plunge for a skill shot into the spinning selector, awards one of the following:</p>
              <ul className="list-disc list-inside space-y-2">
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Light Quick Draw</li>
                    <li>Light Gun Fight</li>
                    <li>Light Extra Ball</li>
                    <li>Light Bounty</li>
                    <li>Light Lock / Award Lock</li>
                    <li>Complete a Ramp or Loop</li>
                    <li>Increase Rank</li>
                    <li>+3 Bonus X</li>
                    <li>1M Points</li>
                  </ul>
              </ul>
            </CardContent>

            <CardHeader id={`quick-draw`}>
              <CardTitle className="text-2xl font-semibold">
                Quick Draw
              </CardTitle>
            </CardHeader>
            <CardContent>
            <p className="mb-2">Quick Draw is a fast reflex mode where shooting pop-up Bad Guys advances towards Showdown Multiball (Get all 4 Bad Guys pop-ups)</p>
              <div className="flex justify-center">
                <Image src={"/static/CactusCanyonQuickDraw.jpg"} alt={"Quick Draw"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p><strong>Lit by:</strong> Complete all 4 Quick draw targets (The far left and far right targets in the image) or Mystery Award / Skill Shot. Starts by rolling over inlanes.</p>
              <p className="mb-2"><strong>Winning a Quick Draw:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Lights Bounty</li>
                <li>Progresses toward Showdown Multiball (Get all 4 Bad Guys pop-ups)</li>
                <li>Score points based on Rank (500k → 750k → 1M → 1.5M → 2M)</li>
              </ul>
            </CardContent>

            <CardHeader id={`gun-fight`}>
              <CardTitle className="text-2xl font-semibold">
                Gun Fight
              </CardTitle>
            </CardHeader>
            <CardContent>
            <p className="mb-2">This is a hurry up (triggered by inlanes) where you have to shoot a bad guy pop up as fast as possible. If you do you increase your rank.</p>
              <p className="mb-2"><strong>Lit by:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Bounty Award</li>
                <li>Left Outlane (when lit)</li>
                <li>Defeating a Bart Brother</li>
              </ul>
            </CardContent>

            <CardHeader id={`ranking-up`}>
              <CardTitle className="text-2xl font-semibold">
                Ranking Up
              </CardTitle>
            </CardHeader>
            <CardContent>
            <p className="mb-2">Increasing rank is a small part of the game that increases the values of the wizard mode and quick draw</p>
            <p className="mb-2"><strong>Ranks:</strong> Stranger → Partner → Deputy → Sheriff → Marshal</p>
            <p>You can rank up by star skill shot, bounty (mystery award), winning gun fight.</p>
            </CardContent>

            <CardHeader id={`bounty`}>
              <CardTitle className="text-2xl font-semibold">
                Bounty Reward (Mystery Award)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Awarded by:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Lasso Skill Shot</li>
                <li>Defeating a Bad Guy in Quick Draw</li>
              </ul>
              <p className="mb-2"><strong>Possible awards:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Light Extra Ball</li>
                <li>Light Gun Fight</li>
                <li>Light Quick Draw</li>
                <li>Light Lock / Award Lock</li>
                <li>+5 Bonus X</li>
                <li>Increase Rank</li>
                <li>Points (250K–1M)</li>
                <li>1M Bonus</li>
              </ul>
            </CardContent>

            <CardHeader id={`bart-brothers`}>
              <CardTitle className="text-2xl font-semibold">
                Bart Brothers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Bart Brothers: Big Bart → Bandelero → Bubba Bart</strong></p>          
              <p className="mb-2"><strong>Defeat all three to:</strong> Qualify part of High Noon, the wizard mode (Only in the original versions, In the remastered versions you need to defeat Bionic Bart)</p>
              <div className="flex justify-center">
                <Image src={"/static/CactusCanyonBart.jpg"} alt={"Bart Brothers"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>

            <CardHeader id={`bionic-bart`}>
              <CardTitle className="text-2xl font-semibold">
                Bionic Bart (Only in remastered versions)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Bionic Bart is the final Bart Brother who must be defeated to complete Bart Brothers on the Sheriff Star in the Remastered versions.</p>
              <p className="mb-2"><strong>To defeat Bionic Bart:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Hit lit Jackpot shots, then hit the Bad Bart head in the saloon</li>
                <li>y(n) = n - 1 is the number of jackpot shots</li>
                <li>There are 4 rounds of this process</li>
              </ul>
            </CardContent>

            <CardHeader id={`save-polly`}>
              <CardTitle className="text-2xl font-semibold">
                Save Polly Peril
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Started by completing 3 shots on any ramp.</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Shoot Train Ramp to stop the train for a brief period of time</li>
                <li>Shoot Bank and/or River ramps as indicated by flashing lights</li>
              </ul>
              <p className="mb-2"><strong>Saving Polly:</strong> Lights Extra Ball</p>
            </CardContent>

            <CardHeader id={`gold-mine-multiball`}>
              <CardTitle className="text-2xl font-semibold">
                Gold Mine Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex justify-center">
                <Image src={"/static/CactusCanyonGoldMine.jpg"} alt={"Gold Mine Multiball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="mb-2">Hit the Gold Mine once to light the locks, then lock 3 balls at the Gold Mine (after first Gold mine multiball you will have to light each lock individually)</p>
              <p className="mb-2"><strong>During Multiball:</strong></p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>All ramps and loops score Jackpots</li>
                <li>Each Jackpot can be collected once per cycle</li>
                <li>Completing all resets them and lights Mother Lode</li>
              </ul>
            </CardContent>

            <CardHeader id={`showdown-multiball`}>
              <CardTitle className="text-2xl font-semibold">
                Showdown Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Started by shooting all 4 Bad Guys via Quick Draws. Multiball will start and all 4 Bad Guys will pop up. Shoot each to knock them down, once done a ball will be added to the multiball</p>
              <p className="mb-2"><strong>Starting Showdown:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Lights Extra Ball</li>
                <li>Qualifies part of High Noon</li>
              </ul>
            </CardContent>

            <CardHeader id={`stampede-multiball`}>
              <CardTitle className="text-2xl font-semibold">
                Stampede Multiball
              </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex justify-center">
                <Image src={"/static/CactusCanyonStampede.jpg"} alt={"Stampede Multiball"} width={320} height={240} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p className="mb-2"><strong>Qualified by completing all 5 major shots</strong></p>
              <p className="mb-2"><strong>During Stampede:</strong> All ramps and loops = Jackpots</p>
            </CardContent>

            <CardHeader id={`extra-balls`}>
              <CardTitle className="text-2xl font-semibold">
                Extra Balls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Collected at Gold Mine</p>
              <p className="mb-2"><strong>Lit by:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Save Polly Peril</li>
                <li>Skill Shot</li>
                <li>Starting Showdown Multiball</li>
              </ul>
            </CardContent>
            <CardHeader id={`high-noon`}>
              <CardTitle className="text-2xl font-semibold">
                High Noon (Wizard Mode)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>To light:</strong></p>
              <p className="mb-4">Complete the Sheriff&apos;s Badge:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Mother Lode (Gold Mine Multiball Super Jackpot)</li>
                <li>Showdown Multiball</li>
                <li>Combos (complete 10 combos)</li>
                <li>Stampede Multiball</li>
                <li>Bart Brothers (complete 3 brothers)</li>
              </ul>
              <p className="mb-2"><strong>Start at Gold Mine</strong></p>
              <p className="mb-2"><strong>High Noon Rules:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>All balls in play (auto-plunged if lost)</li>
                <li>All Bad Guys pop up</li>
                <li>All Jackpots lit</li>
              </ul>
              <p className="mb-2"><strong>Objective:</strong></p>
              <p className="mb-4">Shoot 20 Bad Guy targets</p>
              <p className="mb-2"><strong>Scoring:</strong></p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Completion = 20M</li>
                <li>Rank affects scoring</li>
              </ul>
              <p className="mb-2"><strong>Timer:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>30 seconds base</li>
                <li>+1 second per Bad Guy hit during the entire game</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

