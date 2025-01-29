import BookReview from '../../../components/ui/custom/pinballreview';

const bookData = {
  title: "SinBad",
  chapters: [
    {
      number: 1,
      title: "Layout",
      summary: "",
      image: "/sinbad.jpg"
    },
    {
      number: 2,
      title: "skill shot",
      summary: "Coming soon",
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