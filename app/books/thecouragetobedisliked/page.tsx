import BookReview from '../../../components/ui/custom/bookreview';

const bookData = {
  title: "The Courage to be Disliked",
  author: "Ichiro Kishimi and Fumitake Koga",
  chapters: [
    {
      number: 1,
      title: "Night 1: Deny Trauma",
      summary: "example"
    },
    {
      number: 2,
      title: "Night 2: All problems are interpersonal relationship problems",
      summary: "example"
    },{
      number: 3,
      title: "Night 3: Discard other people's tasks",
      summary: "example"
    },{
      number: 4,
      title: "Night 4: Where the center of the world is",
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