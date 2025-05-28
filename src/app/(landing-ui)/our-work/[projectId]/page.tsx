import { notFound } from "next/navigation";
import DeepspaceImage from "/public/assets/Deepspace.png";
import EridianImage from "/public/assets/Eridian.png";
import LolaImage from "/public/assets/Lola.png";
import Image from "next/image";

const workDetails = [
  {
    id: "deepspace",
    client: "deepspace",
    sector: "Marketing (Advertising Agency)",
    year: "2024",
    scope:
      "Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo. Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo.Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo. . Mauris facilisis eget varius diam amet purus mattis at turpis. commodo.",
    image: DeepspaceImage,
  },
  {
    id: "eridian",
    client: "deepspace",
    sector: "Marketing (Advertising Agency)",
    year: "2024",
    scope:
      "Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo. Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo.Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo. . Mauris facilisis eget varius diam amet purus mattis at turpis. commodo.",
    image: EridianImage,
  },
  {
    id: "lola",
    client: "deepspace",
    sector: "Marketing (Advertising Agency",
    year: "2024",
    scope:
      "Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo. Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo.Lorem ipsum dolor sit amet consectetur. Mauris facilisis eget varius diam amet purus mattis at turpis. Porttitor cursus massa mauris erat commodo. . Mauris facilisis eget varius diam amet purus mattis at turpis. commodo.",
    image: LolaImage,
  },
];

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = workDetails.find((p) => p.id === params.projectId);

  if (!project) return notFound();

  return (
    <div className="w-full p-10">
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center gap-5 md:gap-10">
          <div className="w-full flex justify-center">
            <Image
              alt="project image"
              src={project.image}
              className="w-full md:w-2/3"
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-5 md:gap-20">
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="uppercase font-[700] text-[1.2rem]">Client</h3>
                <p>{project.client}</p>
              </div>

              <div>
                <h3 className="uppercase font-[700] text-[1.2rem]">Sector</h3>
                <p>{project.sector}</p>
              </div>

              <div>
                <h3 className="uppercase font-[700] text-[1.2rem]">Year</h3>
                <p>{project.year}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="uppercase font-[700] text-[1.2rem]">Scope</h3>
              <p>{project.scope}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
