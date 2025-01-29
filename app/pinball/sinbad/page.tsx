import BookReview from '../../../components/ui/custom/pinballreview';

const bookData = {
  title: "SinBad",
  chapters: [
    {
      number: 1,
      title: "Layout",
      summary: `Sinbad has a very simple layout that does not need explaning, the hardest shot in the game is the left orbit
      1. Dead bounce a lot, but nudge the machine up every time you dead bounce 
      2. The hardest and most dangerous shot in the game is the left orbit
      3. You can cradle the ball on the leftmost and right most flippers`,
      image: "/pinball/static/sinbad.png"
    },
    {
      number: 2,
      title: "The strategy",
      summary: `Bounes are the most important thing in Sinbad. Get your bounes multipliers and dead bounce with a nudge as much as you can.`,
      image: ""
    },
    {
      number: 3,
      title: "How to Multiply Bounes",
      summary: "Hit the dropt targets in order of white, yellow, blue, and red to get the bounes multipliers respectively. For example, if you have all of the drop targets down except for the white one, you will have no bounes multipliers",
      image: "/static/sinbaddroptargets.png"
    },{
      number: 4,
      title: "How to add Bounes",
      summary: "Other than drop targets, you can also get bounes in 2 ways. The first way is to hit the 4 rollovers on the left side of the playfild to advance the bounes indecator in the middle of the playfild. The second way is to hit the spinner in the middle of the playfild to advance the bounes indecator. You need to advance the bounes indecator 5 times to get a bounes", 
      image: "static/sinbadadaddbounes.png"
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