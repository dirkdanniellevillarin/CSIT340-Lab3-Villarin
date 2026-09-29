import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="DFS-Maze-Solver"
          description="A pathfinding algorithm that explores a maze by diving as deep as possible along each branch before backtracking. It is commonly used to generate mazes and to find solutions, though it does not guarantee the shortest path."
          tech="C++"
          link="https://github.com/dirkdanniellevillarin/DFS-Maze-Solver"
        />
        <ProjectCard
          year="2026"
          title="NASBGame"
          description="NASB Game is a Java Swing turn-based battle game about the Non Academic School Brawl squad fighting through waves of schoolwork monsters. The game opens with an animated title screen, includes a description page, and then moves into a party-vs-monster battle flow."
          tech="Java"
          link="https://github.com/SharkSnow-123/OOP2_NASBGame"
        />
        <ProjectCard
          year="2025"
          title="MovieTicketingSystem"
          description="This Java application manages movie theater operations, including ticket sales, seat booking, and administrative reports."
          tech="Java · MySQL"
          link="https://github.com/dirkdanniellevillarin/MovieTicketingSystem"
        />
        <ProjectCard
          year="2024"
          title="Bull's Coffee"
          description="A React + Express app for a university coffee shop: customers sign in with Clerk and get auto-registered against a PostgreSQL schema that models staff, menu, inventory, sales, and suppliers end to end."
          tech="TypeScript · PLpgSQL · Mermaid · CSS · HTML"
          link="https://github.com/ThomasDelamort/bullscoffee"
        />
      </div>
    </section>
  );
}
