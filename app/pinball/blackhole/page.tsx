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
              <CardTitle className="text-3xl font-bold">Black Hole</CardTitle>
              <hr className="my-4 border-t border-gray-300" />
            </CardHeader>
            <CardContent>
              <nav>
                <p className="mb-4">My Highest Score: 562610</p>
                <ul className="space-y-2">
                  <li>
                    <Link href={`#chapter-1`} className="text-green-700 hover:underline">
                      The Game Plan
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-2`} className="text-green-700 hover:underline">
                      How to start MultiBall
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-3`} className="text-green-700 hover:underline">
                      Open Gate for Re-Entry
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-4`} className="text-green-700 hover:underline">
                      Bonus Multiplier and Bottom Playfield Multiplier
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-5`} className="text-green-700 hover:underline">
                      Making Drop targets Count
                    </Link>
                  </li>
                  <li>
                    <Link href={`#chapter-6`} className="text-green-700 hover:underline">
                      What I Do Not know
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
              <p>At the beginning of the game, your primary strategy should be to target the Black Hole drop targets in sequence. This should be your main focus. The secondary objective here is to inadvertently hit the correct targets to advance the multiball. If you manage to cradle the ball on the left flipper, take the opportunity to aim for the right-side targets to progress the multiball. Once multiball is activated, shift your focus to locking balls and initiating the multiball phase. During the lower playfield multiball, prioritize advancing bonus multipliers and completing all drop targets. Having many multipliers makes it worthwhile to attempt returning to the lower playfield to accumulate more bonuses. However, if your multipliers are few, continue to play your heart out in the upper playfield.</p>
            </CardContent>
            <CardHeader id={`chapter-2`}>
              <CardTitle className="text-2xl font-semibold">
                How to start MultiBall </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Hit the 4 targets on the right side of the board to light up the captive hole.</li>
                <div className="flex justify-center">
                  <img src={"/static/blackholehowtoopenthereentrygate.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
                <li>Shoot the ball into the captive hole to lock the first ball. Note: This ball lock will drain at the end of your turn, meaning this lock does not carry over.</li>
                <div className="flex justify-center">
                  <img src={"/static/blackholelockcaptiveball1.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
                <li>Go down to the bottom playfield and hit the left lock shot.</li>
                <li>Make sure to hold up your left flipper to ski pass the ball to your right flipper, making the lock shot easier.</li>
                <li>If playing with other people, be aware they can steal this bottom playfield ball lock. I only suggest going for it if you already have your top playfield locked, or you find yourself stuck in the bottom playfield.</li>
                <div className="flex justify-center">
                  <img src={"/static/blackholehowtogodown.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
                <div className="flex justify-center">
                  <img src={"/static/blackholehowtogodownandlock.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
                <li>Now that you have 2 balls locked, go back to the bottom playfield to start a 2-ball Multiball. You will need to open the re-entry gate if you want either of those balls to make it back to the top playfield for a 3-ball Multiball.</li>
                <li>See the section on how to open gate for Re-Entry</li>
                <div className="flex justify-center">
                  <img src={"/static/blackholereentery.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-3`}>
              <CardTitle className="text-2xl font-semibold">
                Open Gate for Re-Entry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p >Re-Entry is very important as it prevents your ball from draining once it sinks in the bottom playfield. There are 3 ways to accomplish Re-Entry:</p>
              <ul className="list-disc list-inside">
                <li>Hit the 4 targets on the right side of the board to light up the Open Gate shot, then hit that shot.</li>
                <div className="flex justify-center">
                  <img src={"/static/blackholehowtoopenthereentrygate.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
                <div className="flex justify-center">
                  <img src={"/static/blackholereenteryshot.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
                <li>Hit the 4 drop targets on the left side of the bottom playfield or the 3 drop targets on the right side of the bottom playfield.</li>
                <div className="flex justify-center">
                  <img src={"/static/blackholereenteryshotssss.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
                <p >If you have your re-entry gate open and the ball sinks, your ball will go back to the top playfield. When this happens try and hit the lower playfield shot again. If you do not hit any other switches the Re-Entry Gate will stay open and you have a free bottom playfield ball</p>
                <div className="flex justify-center">
                  <img src={"/static/blackholehowtogodown.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
                </div>
              </ul>
            </CardContent>
            <CardHeader id={`chapter-4`}>
              <CardTitle className="text-2xl font-semibold" >
                Bonus Multiplier and Bottom Playfield Multiplier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p >There are two ways to increase the bonus multiplier. The first way is to hit all three lanes at the top. The second way is to make a specific shot in the bottom playfield.</p>
              <div className="flex justify-center">
                <img src={"/static/blackholetopmult.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <div className="flex justify-center">
                <img src={"/static/blackholebotmult.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <p>To increase the Bottom Playfield Multiplier, spell out the Black Hole drop targets in order on the top playfield. This is generally considered to be a stroke of luck.</p>
              <ul className="list-disc list-inside">
                <p> NOTE: The 2x multiplier for the lower playfield will carry over from ball to ball. However, if you achieve a 3x multiplier and then drain, the multiplier will reset to 1x.</p>
              </ul>
              <div className="flex justify-center">
                <img src={"/static/blackholebotmultttttt.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
              <div className="flex justify-center">
                <img src={"/static/blackholebigpoints.png"} alt={"blackholepng"} className="mb-4 w-full h-auto max-w-xs" />
              </div>
            </CardContent>
            <CardHeader id={`chapter-5`}>
              <CardTitle className="text-2xl font-semibold" >
                Making Drop targets Count
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p >A non lit Black Hole drop target is worth 1k points while a lit one is worth 5k</p>
              <p >To lite a Black Hole drop target you just have to hit black hole in order and lite the orange arrow in front of the drop target</p>
              <p >This is the same idea with the bottom drop targets but you want to lite the right 4 targets on the top playfield to lite these drop targets on the bottom, they are normal worth 500 points but when they are lit they are worth 3k meaning if you lite your 5x bonus and your 3x playfield multiplier each drop target becomes 45k</p>
            </CardContent>
            <CardHeader id={`chapter-6`}>
              <CardTitle className="text-2xl font-semibold" >
                What I Do Not know
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p >There is definitely a non tournament high score strategy with specials and extra balls that I am not aware of, nor do I think I will ever try and become aware of.</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}