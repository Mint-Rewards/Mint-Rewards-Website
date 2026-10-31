import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FeatureScrollSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.66, 1], [12, 4, 0]);

  const tasksY = useTransform(scrollYProgress, [0.15, 0.66], ["-100%", "0%"]);
  const goalsY = useTransform(scrollYProgress, [0.66, 1], ["-100%", "0%"]);

  const tasksOpacity = useTransform(scrollYProgress, [0.15, 0.48], [0, 1]);
  const goalsOpacity = useTransform(scrollYProgress, [0.66, 0.82], [0, 1]);

  /*
   * One source for the three steps, rendered twice.
   *
   * The sticky stack beside a scrolling column is a desktop effect — it needs
   * a second column to scroll past. On a phone everything is one column, so
   * there is nothing for the frame to sit beside and the pinned version just
   * pushed the copy under the header. Below `md` each step is therefore its
   * own block: the screen it describes, with its heading right next to it.
   */
  const steps = [
    {
      eyebrow: "Get Started",
      eyebrowClass: "bg-[#8CE4B5]/20 text-[#1D558E]",
      title: "Sign Up Free",
      tagline: "Create your account in seconds.",
      taglineClass: "text-[#3EBAB9]",
      body: "Join thousands of users who are already earning rewards while making a positive impact on the environment. Quick and easy signup process.",
      image: "/app-screens/app-signup.jpg",
      alt: "The Mint Rewards signup screen, with email, Google and Apple sign-in",
    },
    {
      eyebrow: "Schedule Pickup",
      eyebrowClass: "bg-[#3EBAB9]/20 text-[#1D558E]",
      title: "Recycle & Earn",
      tagline: "We collect recyclables from your doorstep weekly.",
      taglineClass: "text-[#1E7A5D]",
      body: "Convenient weekly collection service. Simply place your recyclables at your doorstep and we'll handle the rest while you earn points.",
      image: "/app-screens/app-home.jpg",
      alt: "The Mint Rewards home screen, showing points earned and waste recycled",
    },
    {
      eyebrow: "Browse Rewards",
      eyebrowClass: "bg-[#1D558E]/20 text-[#1D558E]",
      title: "Redeem Rewards",
      tagline: "Use points instantly at top brands.",
      taglineClass: "text-[#1D558E]",
      body: "Access exclusive discounts and vouchers from your favorite brands. Instant redemption with no waiting periods or complicated processes.",
      image: "/app-screens/app-coupon.jpg",
      alt: "A redeemed Mint Rewards coupon, ready to use in store",
    },
  ];

  return (
    <section ref={containerRef} className="relative ">
      {/* Section Heading */}
      <div className="text-center pt-16 pb-8 relative">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-[#8CE4B5]/20 via-[#3EBAB9]/20 to-[#1D558E]/20 text-[#1D558E] border border-[#3EBAB9]/30"
        >
          Simple as 1-2-3
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          <span className="text-gray-900">Recycle. </span>
          <span className="bg-gradient-to-r from-[#1D558E] via-[#3EBAB9] to-[#8CE4B5] bg-clip-text text-transparent">
            Earn.{" "}
          </span>
          <span className="text-gray-900">Repeat.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Turn your recyclables into rewards in just{" "}
          <span className="font-semibold text-[#3EBAB9]">three easy steps</span>
        </motion.p>
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-[200px] bg-gradient-to-r from-[#8CE4B5]/10 via-[#3EBAB9]/10 to-[#1D558E]/10 blur-3xl rounded-full"
        />
      </div>
      {/* Phones: each screen with its own heading beside it. */}
      <div className="mx-auto mt-10 max-w-7xl px-6 md:hidden">
        <ol className="flex flex-col gap-14">
          {steps.map((step, i) => (
            <li key={step.title} className="flex items-start gap-4">
              <img
                src={step.image}
                alt={step.alt}
                loading="lazy"
                className="h-[210px] w-auto max-w-none shrink-0 rounded-2xl shadow-lg"
              />
              <div className="min-w-0">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${step.eyebrowClass}`}
                >
                  {i + 1}. {step.eyebrow}
                </span>
                <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-black">
                  {step.title}
                  <br />
                  <span className={step.taglineClass}>{step.tagline}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Desktop: the sticky stack beside the scrolling copy. */}
      <div className="mx-auto mt-10 max-w-7xl px-6 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          {/*
            ALL THREE ARE REAL SCREENS. Two and three were pulled frame by
            frame out of the launch recording; one is an iOS screenshot,
            supplied, because it could not be captured the same way — Apple
            sign-in is iOS-only (the shared AppleSignInButton returns null
            everywhere else), so no web or Android render shows the pair of
            buttons this screen is here to show.

            THE CARDS MATCH ON HEIGHT, NOT ON SHAPE, and nothing is cropped.

            The signup frame is 9:20 — a real phone — against the 9:16 the
            video renders at. Three earlier attempts each paid for that
            mismatch somewhere: padding it to 9:16 made it read as a
            stretched, too-wide screen; cropping from the bottom removed the
            Google and Apple buttons it was chosen for; cropping from the
            centre cut the headline instead. The arithmetic is unforgiving
            either way — 12.6% of one dimension has to go.

            So the shapes are allowed to differ. The cards are set to one
            HEIGHT and each keeps its own width, which is what a stack of
            real phones looks like anyway. Nothing is cropped, nothing is
            padded and nothing is stretched.
          */}
          <div className="relative hidden md:block">
            {/*
              `h-[620px]`, not `h-screen`. A sticky element releases when its
              own bottom reaches the bottom of its container, so a taller box
              releases EARLIER — at full viewport height the phone unstuck
              and rode up behind the header while the third step was still
              being read. Sized just past the card itself, it stays put until
              the copy beside it is done.
            */}
            <div className="sticky top-40 flex justify-center items-start h-[620px]">
              {/*
                `overflow-hidden` clips the stack to the phone.

                The two upper cards animate `y` from -100%, so before they
                arrive they sit a full screen-height ABOVE this box — out in
                the page, sliding under the fixed header, which cut their
                tops off against the navigation. Clipping here turns the
                same motion into a reveal inside the phone, which is what it
                was always meant to look like, and nothing escapes the frame.

                The rounding moves here with it: the images are clipped by
                this box now, so the corners have to be cut on this box.
              */}
              <motion.div
                style={{ rotate }}
                className="relative h-[533px] w-[300px] overflow-hidden"
              >
                <img
                  src="/app-screens/app-signup.jpg"
                  alt="Three screens from the Mint Rewards app: creating an account, booking a collection, and redeeming a reward"
                  className="absolute inset-y-0 left-1/2 z-1 h-full w-auto max-w-none -translate-x-1/2 rounded-2xl drop-shadow-lg"
                />

                <motion.img
                  style={{ y: tasksY, opacity: tasksOpacity }}
                  src="/app-screens/app-home.jpg"
                  className="absolute inset-y-0 left-1/2 z-2 h-full w-auto max-w-none -translate-x-1/2 rounded-2xl shadow-lg"
                />
                <motion.img
                  style={{ y: goalsY, opacity: goalsOpacity }}
                  src="/app-screens/app-coupon.jpg"
                  className="absolute inset-y-0 left-1/2 z-3 h-full w-auto max-w-none -translate-x-1/2 rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-start text-left gap-[60vh] py-[30vh] z-99">
            {steps.map((step) => (
              <div key={step.title}>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm ${step.eyebrowClass}`}
                >
                  {step.eyebrow}
                </span>
                <h3 className="mt-6 text-4xl font-bold leading-tight text-black">
                  {step.title}
                  <br />
                  <span className={step.taglineClass}>{step.tagline}</span>
                </h3>
                <p className="mt-4 max-w-md text-black/60">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
