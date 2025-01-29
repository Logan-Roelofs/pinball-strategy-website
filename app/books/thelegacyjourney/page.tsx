import BookReview from '../../../components/ui/custom/bookreview';

const bookData = {
  title: "The Legacy Journey",
  author: "Dave Ramsey",
  chapters: [
    {
      number: 1,
      title: "1: The problem with God's Way of Handling Money",
      summary: "example"
    },
    {
      number: 2,
      title: "2: The War on Success",
      summary: "example"
    },{
      number: 3,
      title: "3: Snares and Dares",
      summary: "example"
    },{
      number: 4,
      title: "4: The Law of Great Gain",
      summary: "example"
    },{
      number: 5,
      title: "5: Your Work Matters",
      summary: "example"
    },{
      number: 6,
      title: "6: Safeguarding Your Legacy",
      summary: "example"
    },{
      number: 7,
      title: "7: Gbenerational Legacy",
      summary: "example"
    },{
      number: 8,
      title: "8: Called to Generosity",
      summary: "example"
    },{
      number: 9,
      title: "9: A Legacy Worth Leaving",
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