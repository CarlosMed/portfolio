export default function About() {
  return (
    <section className="max-w-lg space-y-8 text-xs h-auto rounded-lg bg-olive p-4  text-eggshell md:bg-eggshell md:text-olive md:text-sm">
      <p>
        A passionate{" "}
        <span className="font-bold text-tan">Fullstack Engineer at Method</span>{" "}
        (not the soap company), a boutique consultancy agency specializing in
        innovative tech solutions.{" "}
        <span className="font-bold text-tan md:hidden">
          - <span className="underline underline-offset-4">MOAR ABOUT ME </span>
        </span>
      </p>
      <div className="hidden md:block space-y-8">
        <p>
          With a keen eye for detail and an eye for frontend development, I thrive in crafting seamless user experiences while architecting robust backend systems.
        </p>
        <p>Beyond coding, I embrace a collaborative approach, thriving in dynamic teams where knowledge sharing and innovation flourish. I&apos;m constantly exploring new technologies and seeking to push the boundaries of what&apos;s possible in the digital landscape. I have had the great pleasure in working on a diverse background collaboration with top industry leaders. </p>
      </div>
    </section>
  );
}
