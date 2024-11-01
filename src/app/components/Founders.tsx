import { AnimatedTooltip } from "@/components/ui/AnimatedTooltip";


const Founders = () => {
  const founders = [
    {
      id: 1,
      name: "Ayush Singh",
      designation: "Software Engineer",
      image:
        "/Ayushavatar.jpg",
    },
    {
      id: 2,
      name: "Ayush Singh",
      designation: "Software Engineer",
      image:
        "/Ayushavatar.jpg",
    },
    {
      id: 3,
      name: "Ayush Singh",
      designation: "Software Engineer",
      image:
        "/Ayushavatar.jpg",
    },
    {
      id: 4,
      name: "Ayush Singh",
      designation: "Software Engineer",
      image:
        "/Ayushavatar.jpg",
    },
    {
      id: 5,
      name: "Ayush Singh",
      designation: "Software Engineer",
      image:
        "/Ayushavatar.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-6">
       <h2 className="text-center text-3xl sm:text-3xl font-extrabold text-white mb-3">
            Our Team
          </h2>
          <div className="w-14 h-1 bg-green-500 rounded-full mx-auto mb-7 pb-1.5 "></div>
          <div className="flex flex-row items-center justify-center mb-10 w-full pt-20">
          <AnimatedTooltip items={founders}/>
          </div>
    </div>
  );
};

export default Founders;
