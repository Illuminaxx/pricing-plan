import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/button";


type PricingCardProps = {
  interval: string;
  details: {
    main: boolean;
    title: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
  };
};

const BackgroundElements = ({ main }: { main: boolean }) => (
  <>
    {main && (
      <>
        <div className="absolute -translate-x-[55%] -translate-y-[35%] bg-main-card-linear size-[600px] rounded-full border-[0.8px] border-[#0959E5]/30"></div>
        <div className="absolute -translate-x-[10%] -translate-y-[15%] bg-main-card-second-linear size-[700px] rounded-full border-[0.8px] border-[#0959E5]/40 opacity-50"></div>
      </>
    )}
  </>
);

const Icon = ({ main }: { main: boolean }) => (
  <div className={`relative overflow-hidden rounded-lg p-2 ${main ? 'bg-white' : 'bg-[#0959E5]'}`}>
    <p className="relative z-40">
      <Image
        src={main ? "/gem.svg" : "/bullseye-arrow.svg"}
        alt="Icon"
        width={24}
        height={24}
      />
    </p>
    {!main && (
      <>
        <div className="size-16 absolute -left-2/3 -top-1/2 bg-icon-linear rounded-full"></div>
        <div className="size-16 absolute left-1/2 top-1/3 -translate-x-1/2 bg-icon-linear rounded-full"></div>
      </>
    )}
  </div>
);

const Pricing = ({ interval, details }: PricingCardProps) => {
  const main = details.main;

  return (
    <div className="mx-auto w-full justify-center gap-8">
      <div
        className={cn(
          "relative flex flex-1 flex-col gap-4 overflow-hidden rounded-2xl border-[0.5px] p-6",
          main ? "bg-[#A3D7FD]" : "bg-card-radial"
        )}
      >
        <BackgroundElements main={main} />
        <div className="relative z-50 flex flex-col gap-4 items-start">
          <Icon main={main} />
          <div className="flex gap-3">
            <h2 className="text-3xl font-medium leading-7">{details.title}</h2>
            {main && (
              <div className="bg-white/10 border border-white rounded-md px-2 flex items-center justify-center">
                <p className="text-sm">Best Offer</p>
              </div>
            )}
          </div>
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          key={interval}
          variants={{
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.4,
            delay: 0.05,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-row gap-1 relative z-40"
        >
          <span className="text-4xl font-medium">
            ${interval === "year" ? details.yearlyPrice : details.monthlyPrice}
            <span className="text-xs"> / {interval}</span>
          </span>
        </motion.div>
        <hr className="relative z-40 m-0 h-px w-full border-none bg-gradient-to-r from-white/0 via-white/80 to-white/0" />
        <ul className="flex relative z-40 flex-col gap-2 font-normal">
          {details.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-md font-light">
              <img
                src="/check.svg"
                alt="Check"
                className="h-5 w-5 shrink-0 rounded-full"
              />
              <span className="flex">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          size="lg"
          className={cn("group relative w-full gap-2 overflow-hidden border-white/80", {
            "variant-ghost": !main,
          })}
        >
          <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
          <p>Je m&apos;abonne</p>
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
