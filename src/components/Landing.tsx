import { motion } from "motion/react";
import { Footprints, Sparkles, Compass } from "lucide-react";

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 relative">
      {/* Decorative Footprints */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-10 left-10 -rotate-12 pointer-events-none"
      >
        <Footprints size={120} className="text-[#8b5e3c]" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-20 right-10 rotate-45 pointer-events-none"
      >
        <Footprints size={180} className="text-[#4a5d23]" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 max-w-2xl"
      >
        <div className="inline-flex items-center justify-center p-6 bg-[#8b5e3c] rounded-[2rem] shadow-2xl mb-8 relative group">
          <Compass size={80} className="text-[#fdf8f1] group-hover:rotate-180 transition-transform duration-1000" />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2 bg-[#4a5d23] p-2 rounded-full border-4 border-[#fdf8f1]"
          >
            <Sparkles size={24} className="text-white" />
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-[#4a3728] tracking-tighter mb-6 leading-none">
          <span className="text-[#8b5e3c]">大恐竜展</span>
          <span className="block text-3xl md:text-4xl mt-4 bg-[#4a5d23] text-white px-6 py-2 rounded-xl inline-block transform -rotate-2">
            恐竜性格診断
          </span>
        </h1>

        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border-2 border-[#e5ddd3] mb-10 shadow-sm">
          <p className="text-xl text-[#6b5a4a] leading-relaxed font-medium">
            10の質問で、あなたの性格を徹底分析。<br className="hidden md:block" />
            現代に蘇る、<span className="text-[#8b5e3c] font-black underline decoration-wavy decoration-[#4a5d23]">あなただけの恐竜</span>を見つけよう。
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="group relative px-16 py-5 bg-[#4a3728] text-white font-black text-2xl rounded-2xl shadow-[0_10px_0_0_#2a1f17] hover:shadow-[0_5px_0_0_#2a1f17] hover:translate-y-[5px] transition-all overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            自分の恐竜に会いに行く
            <Footprints size={24} className="group-hover:translate-x-2 transition-transform" />
          </span>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-16 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-black uppercase tracking-[0.4em] text-[#8b5e3c]">
          Natural History Museum Special Project
        </span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#4a5d23] rounded-full opacity-30" />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
