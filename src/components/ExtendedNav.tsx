import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type NavProps = {
  menuTitle: string;
  tagline?: string;
  menu: {
    title: string;
    items: string[];
  }[];
  buttons: string[];
  bottomLinks?: string[];
  mobile?: boolean;
};

const ExtendedNav = ({
  menuTitle,
  menu,
  tagline,
  buttons,
  bottomLinks,
  mobile = false,
}: NavProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (mobile) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-bold">{menuTitle}</h3>
        <div className="space-y-4">
          {menu.map((section, i) => (
            <div key={section.title} className="border-b pb-2">
              <button
                className="w-full flex justify-between items-center font-semibold text-lg py-2"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {section.title}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="flex flex-col gap-2 pl-4 py-2">
                  {section.items.map((item) => (
                    <span key={item} className="text-base">
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="text-base cursor-pointer flex justify-between items-center w-full bg-black rounded-full text-white hover:text-black hover:bg-primary py-3 px-4 border-2 border-black transition-all"
            >
              {btn} <ArrowRight />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Desktop dropdown
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="hidden md:block absolute left-0 w-screen top-[100%] py-6 px-10 border-t border-gray-300 bg-white z-50 space-y-4"
    >
      <div>
        <h3 className="text-2xl flex items-center gap-2 font-extrabold font-paypal-pro">
          {menuTitle} <ArrowRight />
        </h3>
        <span className="text-sm text-gray-300">{tagline}</span>
      </div>
      <div className={`grid grid-cols-${Math.min(menu.length, 3)} gap-4`}>
        {menu?.map((section) => (
          <div key={section.title} className="space-y-4">
            <div className="border-b border-gray-300 pb-4">
              <p className="text-lg flex items-center gap-2 font-semibold ">
                {section.title} <ArrowRight />
              </p>
            </div>
            <div className="flex flex-col gap-2 font-[500]">
              {section.items.map((item) => (
                <span key={item} className="text-base">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 py-2 px-4 rounded-2xl">
        <div className=" grid grid-cols-2 gap-4">
          {buttons.map((btn) => (
            <span
              key={btn}
              className="text-base cursor-pointer flex justify-between items-center w-full bg-black rounded-full text-white hover:text-black hover:bg-primary py-4 px-4 border-2 border-black hover:border-black transition-all"
            >
              {btn} <ArrowRight />
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {bottomLinks?.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExtendedNav;

// import { ArrowRight } from "lucide-react";
// import { motion } from "motion/react";
// type NavProps = {
//   menuTitle: string;
//   tagline?: string;
//   menu: {
//     title: string;
//     items: string[];
//   }[];
//   buttons: string[];
//   bottomLinks?: string[];
// };
// const ExtendedNav = ({
//   menuTitle,
//   menu,
//   tagline,
//   buttons,
//   bottomLinks,
// }: NavProps) => {
//   return (
//     <motion.div
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       exit={{ y: -50, opacity: 0 }}
//       transition={{ duration: 0.3 }}
//       className="absolute left-0 w-screen top-[100%] py-6 px-10 border-t border-gray-300 bg-white z-50 space-y-4"
//     >
//       <div className="">
//         <h3 className="text-2xl flex items-center gap-2 font-extrabold font-paypal-pro">
//           {menuTitle} <ArrowRight />
//         </h3>
//         <span className="text-sm text-gray-300">{tagline}</span>
//       </div>
//       <div className={`grid grid-cols-${Math.min(menu.length, 3)} gap-4`}>
//         {menu?.map((menu) => (
//           <div className="space-y-4">
//             <div className="border-b border-gray-300 pb-4">
//               <p className="text-lg flex items-center gap-2 font-semibold ">
//                 {menu.title} <ArrowRight />
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 font-[500]">
//               {menu.items.map((item) => (
//                 <span className="text-base">{item}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="bg-gray-200 py-2 px-4 rounded-2xl">
//         <div className=" grid grid-cols-2 gap-4">
//           {buttons.map((btn) => (
//             <span className="text-base cursor-pointer flex justify-between items-center w-full bg-black rounded-full text-white hover:text-black hover:bg-primary py-4 px-4 border-2 border-black hover:border-black transition-all hover:scale-x-101">
//               {btn} <ArrowRight />
//             </span>
//           ))}
//         </div>
//         <div className="flex flex-col gap-2">
//           {bottomLinks?.map(() => (
//             <span></span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ExtendedNav;
