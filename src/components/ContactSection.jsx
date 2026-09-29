import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:dirkdannielle.villarin@cit.edu"
          text="dirkdannielle.villarin@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/dirkdanniellevillarin"
          text="github.com/dirkvillarin"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/dirk-dannielle-villarin-177870331/"
          text="linkedin.com/in/dirkvillarin"
        />
      </ul>
    </section>
  );
}
