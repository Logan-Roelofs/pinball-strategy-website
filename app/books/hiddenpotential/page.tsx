import BookReview from '../../../components/ui/custom/bookreview';

const bookData = {
  title: "Hidden Potential",
  author: "Adam Grant",
  chapters: [
    {
      number: 1,
      title: "1: Creatures of Discomfort",
      summary: "example"
    },
    {
      number: 2,
      title: "2: Human Sponges",
      summary: "example"
    },{
      number: 3,
      title: "3: The Imperfectionists",
      summary: "example"
    },{
      number: 4,
      title: "4: Transforming the Daily Grind",
      summary: "example"
    },{
      number: 5,
      title: "5: Getting Unstuck",
      summary: "example"
    },{
      number: 6,
      title: "6: Defying Gravity",
      summary: "example"
    },{
      number: 7,
      title: "7: Every Child Gets Ahead",
      summary: "example"
    },{
      number: 8,
      title: "8: Mining for Gold",
      summary: "example"
    },{
      number: 9,
      title: "9: Diamonds in the Rough",
      summary: "example"
    },
  ]
};

export default function Page() {
  return (
    <div>
      <BookReview 
        title={bookData.title} 
        author={bookData.author} 
        chapters={bookData.chapters} 
      />
    </div>
  );
}