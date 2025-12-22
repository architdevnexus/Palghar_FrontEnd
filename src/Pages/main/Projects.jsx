import ProjectHero from "../../Components/Projects/ProjectHero";
import GetInTouch from "../../Components/Form/GetInTouch";
import ProjectCard from "../../Components/Cards/ProjectCard";

export default function Projects() {
  const projectData = [
    {
      id: 1,
      projectname: "Yogesh Signature",
      address: "Near Juhu Circle, Gulmohar Lane, Mumbai",
      img: "https://i.pinimg.com/736x/51/5d/bd/515dbd1e135853ef04eefb0bd320e362.jpg",
      locationUrl: "https://maps.google.com/?q=Near+Juhu+Circle+Mumbai",
      status: "COMING SOON..."
    },
    {
      id: 2,
      projectname: "Skyline Avenue",
      address: "Opp. Golden Nest Circle, Mira Road East",
      img: "https://i.pinimg.com/736x/ff/97/bf/ff97bfc29aeeef0e5948e36228911f7d.jpg",
      locationUrl: "https://maps.google.com/?q=Mira+Road+East",
      status: "NEW LAUNCH"
    },
    {
      id: 3,
      projectname: "Green Valley Homes",
      address: "Near Vasai Phatak, Vasai West",
      img: "https://i.pinimg.com/736x/51/5d/bd/515dbd1e135853ef04eefb0bd320e362.jpg",
      locationUrl: "https://maps.google.com/?q=Vasai+West",
      status: "BOOKING OPEN"
    },
    {
      id: 4,
      projectname: "Palm Residency",
      address: "Behind Maxus Mall, Bhayandar West",
      img: "https://i.pinimg.com/736x/ff/97/bf/ff97bfc29aeeef0e5948e36228911f7d.jpg",
      locationUrl: "https://maps.google.com/?q=Bhayandar+West",
      status: "SOLD OUT"
    },
    {
      id: 5,
      projectname: "Elite Heights",
      address: "Ambadi Road, Vasai West",
      img: "https://i.pinimg.com/736x/51/5d/bd/515dbd1e135853ef04eefb0bd320e362.jpg",
      locationUrl: "https://maps.google.com/?q=Ambadi+Road+Vasai+West",
      status: "POSSESSION SOON"
    },
    {
      id: 6,
      projectname: "Ocean View Towers",
      address: "Near Arnala Beach, Virar West",
      img: "https://i.pinimg.com/736x/ff/97/bf/ff97bfc29aeeef0e5948e36228911f7d.jpg",
      locationUrl: "https://maps.google.com/?q=Arnala+Beach+Virar",
      status: "COMING SOON..."
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* HERO SECTION */}
      <ProjectHero />

      {/* PROJECT GRID */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-10 bg-[#C9ECF0]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Your Dream Home Coming Soon 
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map(({ id, img, projectname, address, locationUrl, status }) => (
            <ProjectCard
              key={id}
              img={img}
              projectname={projectname}
              address={address}
              locationUrl={locationUrl}
              status={status}
            />
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <GetInTouch />
    </div>
  );
}
