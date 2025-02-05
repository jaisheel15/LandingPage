import Navigation from "./Navigation";
import { motion } from "framer-motion";
import {Button} from "./components/ui/button";
const FuzzyOverlayExample = () => {
  return (

    <div className="relative overflow-hidden h-screen border-b-2 border-stone-700 ">
      <Navigation  />
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("src/assets/black-noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
      <motion.p 

    initial={{width:0}}
    animate={{width:"100%"}}
    transition={{duration:2 , ease:"easeInOut"}}
      
      className="text-center text-6xl font-black text-neutral-50 overflow-hidden whitespace-nowrap">
        Hero Section
      </motion.p>
      <motion.p
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:3 , ease:"easeInOut"}}

      className="text-center text-neutral-400">
         fuzzy overlay 📺
      </motion.p>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:4 , ease:"easeInOut"}}

      className="flex items-center justify-center gap-3">
        <Button className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800">
          Pricing
        </Button>
        <Button className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50">
          Try it free
        </Button>
      </motion.div>
    </div>
  );
};

export default FuzzyOverlayExample;