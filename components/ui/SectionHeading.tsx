import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="section-heading-eyebrow">
        {eyebrow}
      </div>
      <h2 className="section-heading-title">{title}</h2>
      {description ? <p className="section-heading-description">{description}</p> : null}
    </Reveal>
  );
}
