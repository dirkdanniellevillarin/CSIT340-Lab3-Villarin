import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up right here in Cebu City. I picked IT because I enjoy building
        things that combine software and hardware, solving practical problems,
        and bringing ideas to life. I am into robotic and more into hardware
        stuffs. I like coding a little bit but I fell inlove with networking
        stuffs.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}
