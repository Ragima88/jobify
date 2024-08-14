import Section from "../../components/Section/Section";
import Slider from "../../components/Slider/Slider";
import "./slider-section.scss";
import photo_1 from "../../assets/images/testimonial-1-100x100.jpg";
import photo_2 from "../../assets/images/testimonial-2-100x100.jpg";
import photo_3 from "../../assets/images/testimonial-3-100x100.jpg";
import photo_4 from "../../assets/images/testimonial-4-100x100.jpg";
import photo_5 from "../../assets/images/testimonial-5-100x100.jpg";

const SliderSection = () => {
  const items = [
    {
      id: 1,
      name: "John Wick",
      content:
        "Without Jobify i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite believe the service level that they offer!.",
      photo: photo_1,
    },
    {
      id: 2,
      name: "Jane Doe",
      content:
        "Jobify offer an amazing service and I couldn’t be happier! They are dedicated to helping recruiters find great candidates, wonderful service!",
      photo: photo_2,
    },
    {
      id: 3,
      name: "Alice Smith",
      content:
        "Wow just Wow! Jobify is an excellent service that offers personal one to one help finding a job and they know how to please, i’d use them again!",
      photo: photo_3,
    },
    {
      id: 4,
      name: "Bob Johnson",
      content:
        "If I didn’t find Jobify I’m pretty sure i’d be no where, they helped me find a job in less than 2 days and the job is amazing,  amazing service!",
      photo: photo_4,
    },
    {
      id: 5,
      name: "Charlie Brown",
      content:
        "Excellent service offering a personal touch, if I had an issue they were no longer than a phone call away and were always quick to respond.",
      photo: photo_5,
    },
  ];
  return (
    <Section className={"slider-section"}>
      <h2 className="slider-section-title">Kind Words From Happy Candidates</h2>
      <p className="slider-section-desc">
        What other people thought about the service provided by Jobify
      </p>
      <Slider items={items} />
    </Section>
  );
};
export default SliderSection;
