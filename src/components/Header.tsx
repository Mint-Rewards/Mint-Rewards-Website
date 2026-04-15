import { useEffect, useState, useRef } from "react";
import { Download } from "lucide-react";
import GlowingOrb from "./Orb";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTransform = (baseTransform: string, intensity: number) => {
    const moveX = mousePos.x * intensity;
    const moveY = mousePos.y * intensity;
    return `${baseTransform} translate(${moveX}px, ${moveY}px)`;
  };

  const handleMenuClick = (scrollTarget: string) => {
    const section = document.getElementById(scrollTarget);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const imageTransforms = {
    img3: isMobile
      ? "rotateY(-15deg) rotateX(12deg) rotateZ(8deg) translateX(30%) translateY(10px) translateZ(-150px)"
      : "rotateY(-30deg) rotateX(20deg) rotateZ(15deg) translateX(70%) translateY(40px) translateZ(-50px)",
    img2: isMobile
      ? "rotateY(-18deg) rotateX(14deg) rotateZ(8deg) translateX(-5%) translateZ(180px)"
      : "rotateY(-30deg) rotateX(20deg) rotateZ(15deg) translateZ(150px)",
    img1: isMobile
      ? "rotateY(-12deg) rotateX(10deg) rotateZ(6deg) translateX(8%) translateY(-30px) translateZ(0px)"
      : "rotateY(-30deg) rotateX(20deg) rotateZ(15deg) translateX(40%) translateY(-80px) translateZ(50px)",
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="mx-auto min-h-screen max-w-6xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-[375px]:px-4 max-[375px]:py-16 max-[375px]:gap-10">
        <div className="z-10">
          <h1 className="text-black font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight max-[375px]:text-3xl max-[375px]:leading-snug">
            Recycle Smart
            <br />
            Earn Rewards
          </h1>

          <p className="mt-6 max-w-xl text-gray-400 text-base sm:text-lg max-[375px]:text-sm">
            Transform your recyclables into amazing rewards. Save the planet
            while earning discounts at your favorite brands.
          </p>

          <div className="mt-10 flex items-center gap-4 flex-wrap max-[375px]:flex-col max-[375px]:items-stretch max-[375px]:gap-3">
            <a
              href="#onboarding"
              className="flex items-center gap-2 rounded-full bg-[#1D558E] px-6 py-3 text-white font-medium hover:bg-[#15406b] transition max-[375px]:w-full max-[375px]:justify-center"
            >
              <Download className="font-light w-4" />
              <span>Get the App</span>
            </a>

            <button
              onClick={() => handleMenuClick("how-it-works")}
              className="flex items-center gap-3 rounded-full bg-zinc-900 px-6 py-3 text-white font-medium hover:bg-zinc-800 transition max-[375px]:w-full max-[375px]:justify-center"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                &gt;
              </span>
              <span>Learn more</span>
            </button>
          </div>
        </div>

        <div className="relative p-30 flex justify-center lg:justify-end max-[480px]:mt-10 max-[480px]:p-0">
          <GlowingOrb />

          <div className="relative w-[200px] aspect-[9/16] [perspective:1000px] [transform-style:preserve-3d] -translate-x-24 max-[480px]:w-[150px] max-[480px]:-translate-x-0 max-[480px]:scale-90 max-[480px]:mx-auto">
            <img
              src="/Coupon Detail 15.png"
              style={{
                transform: getTransform(imageTransforms.img3, 15),
              }}
              className="absolute inset-0 z-10 rounded-3xl shadow-2xl transition-transform duration-700 ease-out opacity-80"
            />

            <img
              src="/img_2.jpg"
              style={{
                transform: getTransform(imageTransforms.img2, 30),
              }}
              className="absolute inset-0 z-20 rounded-3xl shadow-2xl transition-transform duration-700 ease-out"
            />

            <img
              src="/img_1.jpg"
              style={{
                transform: getTransform(imageTransforms.img1, 45),
              }}
              className="absolute inset-0 z-30 rounded-3xl shadow-2xl transition-transform duration-700 ease-out outline outline-1 outline-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
