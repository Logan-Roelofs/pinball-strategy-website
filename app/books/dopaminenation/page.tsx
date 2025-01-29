import BookReview from '../../../components/ui/custom/bookreview';

const bookData = {
  title: "Dopamine Nation",
  author: "Anna Lembke",
  chapters: [
    {
      number: 1,
      title: "1: Our Masturbation Machines",
      summary: "The author, a psychiatrist, presents the case of a patient who has developed an addiction to a self-created masturbation machine, a device that offers unparalleled pleasure. This narrative serves as a metaphor for the author's broader argument: in today's society, we all possess our own 'Masturbation Machines' in the form of smartphones, social media, or even romance novels, which provide us with instant gratification. The author suggests that we often find ourselves ensnared by these 'Machines' unable to break free despite frequently feeling worse after indulging in them. This compulsion towards overindulgence, the author argues, is becoming increasingly prevalent, leading to what is described as a dopamine crisis. The author cites that 70% of global deaths are linked to modifiable behavioral risk factors such as smoking, physical inactivity, and poor diet, illustrating a grim picture of how our addictions to these 'Masturbation Machines' are metaphorically, and quite literally, contributing to our demise."
    },
    {
      number: 2,
      title: "2: Running from Pain",
      summary: "Coming soon"
    },{
      number: 3,
      title: "3: The Pleasure-Pain Balance",
      summary: "Coming soon"
    },{
      number: 4,
      title: "4: Dopamine Fasting",
      summary: "Coming soon"
    },{
      number: 5,
      title: "5: Space, Time, and Meaning",
      summary: "Coming soon"
    },{
      number: 6,
      title: "6: A Broken Balance?",
      summary: "Coming soon"
    },{
      number: 7,
      title: "7: Pressing on the Pain Side",
      summary: "Coming soon"
    },{
      number: 8,
      title: "8: Radical Honesty",
      summary: "Coming soon"
    },{
      number: 9,
      title: "9: Prosocial Shame",
      summary: "Coming soon"
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