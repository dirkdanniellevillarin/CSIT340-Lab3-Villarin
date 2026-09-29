import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="Where I have learned and worked."
      />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Studying web development, database systems, and networking while currently taking Cisco CCNA coursework."
        />
        <TimelineItem
          period="2026 – Present"
          title="Non-Academic Scholar"
          place="Civil Engineering Department, CIT-U"
          description="Assisting with departmental operations, administrative documentation, and office tasks."
        />
        <TimelineItem
          period="2022 – 2024"
          title="Vice-Governor for Robotics"
          place="University of Cebu"
          description="Led student robotics projects and competed in CESAFI Robotics. Passed TESDA NC II in Computer Hardware Servicing in 2022."
        />
      </ol>
    </section>
  );
}
