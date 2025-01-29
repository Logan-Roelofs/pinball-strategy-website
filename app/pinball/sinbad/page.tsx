import BookReview from '../../../components/ui/custom/pinballreview';

const bookData = {
  title: "SinBad",
  chapters: [
    {
      number: 1,
      title: "Layout",
      summary: `Sinbad has a very simple layout that does not need explaining, the hardest shot in the game is the left orbit.\n
      1. Dead bounce a lot, but nudge the machine up every time you dead bounce.\n
      2. The hardest and most dangerous shot in the game is the left orbit.\n
      3. You can cradle the ball on the leftmost and rightmost flippers.`,
      image: "/static/sinbad.png"
    },
    {
      number: 2,
      title: "The strategy",
      summary: `Bonuses are the most important thing in Sinbad. Get your bonus multipliers and dead bounce with a nudge as much as you can.`,
      image: ""
    },
    {
      number: 3,
      title: "How to Multiply Bonuses",
      summary: "Hit the drop targets in order of white, yellow, blue, and red to get the bonus multipliers respectively. For example, if you have all of the drop targets down except for the white one, you will have no bonus multipliers.",
      image: "/static/sinbaddroptargets.png"
    },
    {
      number: 4,
      title: "How to add Bonuses",
      summary: "Other than drop targets, you can also get bonuses in 2 ways. The first way is to hit the 4 rollovers on the left side of the playfield to advance the bonus indicator in the middle of the playfield. The second way is to hit the spinner in the middle of the playfield to advance the bonus indicator. You need to advance the bonus indicator 5 times to get a bonus.", 
      image: "/static/sinbadaddbonuses.png"
    },
  ]
};

export default function Page() {
  return (
    <div>
      <BookReview 
        title={bookData.title} 
        chapters={bookData.chapters} 
      />
    </div>
  );
}