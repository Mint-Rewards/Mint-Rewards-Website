import { useEffect, useMemo, useRef, useState } from "react";

const THEME_COLORS = ["#0F3D94", "#349EB4", "#8CE4B5"];

const hexToRgba = (hex: string, alpha = 1) => {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function GlowingOrb() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const orbs = useMemo(
    () => [
      {
        size: 420,
        top: 50,
        left: -160,
        color: THEME_COLORS[0],
        animation: "drift 7s infinite ease-in-out",
      },
    ],
    []
  );

  return (
    <div
      ref={containerRef}
      className="absolute top-20 inset-0 flex items-center justify-center"
    >
      <style>{`
        @keyframes drift {
          0%   { transform: translate(0, 0) rotate(0deg) scale(1); }
          33%  { transform: translate(40px, -60px) rotate(10deg) scale(1.15); }
          66%  { transform: translate(-30px, 30px) rotate(-8deg) scale(0.9); }
          100% { transform: translate(0, 0) rotate(0deg) scale(1); }
        }

        @keyframes colorFlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulseFast {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          mix-blend-mode: normal;
          will-change: transform, opacity, background-position;
          background-size: 180% 180%;
        }
      `}</style>

      {/* Wrapper follows mouse with more responsiveness */}
      <div
        className="relative w-[600px] h-[600px]   transition-transform duration-500 ease-out"
        style={{
          transform: `translate(
            ${(mouse.x - window.innerWidth / 2) * 0.08}px,
            ${(mouse.y - window.innerHeight / 2) * 0.08}px
          )`,
        }}
      >
        {orbs.map((orb, idx) => (
          <div
            key={orb.color}
            className="blob"
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              opacity: 0.8 - idx * 0.15,
              background: `radial-gradient(circle at 35% 35%, ${hexToRgba(
                orb.color,
                0.7
              )}, ${hexToRgba(orb.color, 0.15)})`,
              boxShadow: `0 0 120px ${hexToRgba(orb.color, 0.4)}`,
              animation: `${orb.animation}, colorFlow ${
                4 + idx
              }s infinite linear`,
            }}
          />
        ))}

        {/* BRIGHT CORE - Center highlight */}
        <div
          className="blob w-[160px] h-[160px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #ffffff, #d4f7e6, transparent 70%)",
            filter: "blur(35px)",
            animation: "pulseFast 2s infinite ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
