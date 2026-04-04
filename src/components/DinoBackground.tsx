import { motion } from "motion/react";

export function DinoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fdf8f1]">
      {/* Texture Overlay: Ancient Paper/Stone */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      {/* Large Abstract Shapes */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#8b5e3c] blur-[120px]"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#4a5d23] blur-[120px]"
      />

      {/* Floating Particles (Dust/Pollen) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            y: [null, "-20%", "20%"],
            x: [null, "10%", "-10%"],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-1 h-1 bg-[#8b5e3c] rounded-full blur-[1px]"
        />
      ))}

      {/* Jungle Leaves (Abstract) */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.07] pointer-events-none rotate-12">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#4a5d23]">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 21 2c-2.4 4-3 5.5-4.1 11.2A7 7 0 0 1 11 20z" />
          <path d="M11 20l2-2" />
          <path d="M11 20l-2-2" />
          <path d="M15 15l3-3" />
          <path d="M7 10l-3 3" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 p-12 opacity-[0.05] pointer-events-none -rotate-12">
        <svg width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b5e3c]">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 21 2c-2.4 4-3 5.5-4.1 11.2A7 7 0 0 1 11 20z" />
          <path d="M11 20l2-2" />
          <path d="M11 20l-2-2" />
        </svg>
      </div>
    </div>
  );
}
