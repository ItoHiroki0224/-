import { motion } from "motion/react";
import { DinosaurProfile, DinosaurType } from "../types";
import { RefreshCcw, Share2, Award, Info, Sparkles, Heart, MapPin, Footprints } from "lucide-react";
import { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { DINOSAUR_PROFILES } from "../constants";

interface ResultProps {
  profile: DinosaurProfile;
  onReset: () => void;
}

const COMPATIBILITY_MAP: Record<DinosaurType, DinosaurType> = {
  "T-Rex": "Triceratops",
  "Triceratops": "T-Rex",
  "Stegosaurus": "Zavacephale",
  "Zavacephale": "Stegosaurus",
  "Brachiosaurus": "Pteranodon",
  "Pteranodon": "Brachiosaurus",
  "Velociraptor": "Pinacosaurus",
  "Pinacosaurus": "Velociraptor",
};

export function Result({ profile, onReset }: ResultProps) {
  const [aiMessage, setAiMessage] = useState<string>("");
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);

  const compatibleType = COMPATIBILITY_MAP[profile.type];
  const compatibleProfile = DINOSAUR_PROFILES.find(p => p.type === compatibleType);

  useEffect(() => {
    async function generateContent() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
        
        // Generate Message
        const messagePromise = ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `あなたは「大恐竜展」の案内人です。診断結果が「${profile.name}」だったユーザーに対して、その性格を恐竜の生態に例えながら、温かく、かつ博学な雰囲気で150文字程度のメッセージを送ってください。
          【重要】「ようこそ大恐竜展へ」という挨拶は含めないでください。日本語でお願いします。`,
        });

        // Generate Image
        const imagePromise = ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: `A high-quality, realistic illustration of a ${profile.scientificName} dinosaur in its natural prehistoric habitat. Cinematic lighting, detailed scales and texture, vibrant environment.`,
              },
            ],
          },
        });

        const [messageResponse, imageResponse] = await Promise.all([messagePromise, imagePromise]);
        
        setAiMessage(messageResponse.text || "");
        
        // Extract Image
        for (const part of imageResponse.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setGeneratedImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (error) {
        console.error("AI generation failed", error);
        setAiMessage(profile.description);
      } finally {
        setLoading(false);
        setImageLoading(false);
      }
    }
    generateContent();
  }, [profile]);

  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-12">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-[#e5ddd3]"
      >
        {/* Header Image */}
        <div className="relative h-64 md:h-80 overflow-hidden bg-[#f9f7f2]">
          {imageLoading ? (
            <div className="w-full h-full flex items-center justify-center animate-pulse bg-[#e5ddd3]">
              <Sparkles className="text-[#8b5e3c] animate-spin" size={48} />
            </div>
          ) : (
            <img 
              src={generatedImageUrl || profile.imageUrl} 
              alt={profile.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <div className="flex items-center gap-2 text-white/80 text-sm font-bold uppercase tracking-widest mb-1">
              <Award size={16} />
              Your Dinosaur Match
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
              {profile.name}
            </h2>
            <p className="text-white/60 font-mono text-sm">
              {profile.scientificName}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-10">
          <div className="flex flex-wrap gap-2">
            {profile.traits.map((trait, idx) => (
              <span 
                key={idx}
                className="px-4 py-1.5 rounded-full text-sm font-bold bg-[#f9f7f2] text-[#8b5e3c] border border-[#e5ddd3]"
              >
                #{trait}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#4a5d23] font-bold">
              <Info size={20} />
              <h3>性格診断結果</h3>
            </div>
            <div className="bg-[#fdf8f1] p-6 rounded-2xl border-l-4 border-[#4a5d23] relative">
              {loading ? (
                <div className="flex items-center gap-3 text-[#8b5e3c] animate-pulse">
                  <div className="w-2 h-2 bg-current rounded-full" />
                  <div className="w-2 h-2 bg-current rounded-full" />
                  <div className="w-2 h-2 bg-current rounded-full" />
                  <span>化石を復元中...</span>
                </div>
              ) : (
                <p className="text-[#4a3728] leading-relaxed whitespace-pre-wrap">
                  {aiMessage}
                </p>
              )}
            </div>
          </div>

          {/* Compatibility Section */}
          {compatibleProfile && (
            <div className="bg-[#f9f7f2] p-6 rounded-3xl border-2 border-dashed border-[#e5ddd3]">
              <div className="flex items-center gap-2 text-[#ec4899] font-bold mb-4">
                <Heart size={20} fill="currentColor" />
                <h3>あなたと相性抜群の恐竜</h3>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md shrink-0">
                  <img 
                    src={compatibleProfile.imageUrl} 
                    alt={compatibleProfile.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#4a3728] mb-1">
                    {compatibleProfile.name}
                  </h4>
                  <p className="text-sm text-[#6b5a4a] leading-tight">
                    {compatibleProfile.description.split('。')[0]}。お互いの個性を尊重し合える最高のパートナーです。
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Exhibition CTA */}
          <div className="bg-[#4a5d23] p-8 rounded-3xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2 opacity-80 text-xs font-bold tracking-widest uppercase">
                <MapPin size={14} />
                Special Event
              </div>
              <h3 className="text-2xl font-black mb-3">
                本物の迫力を、その目で。
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                「大恐竜展」では、今回診断された{profile.name}をはじめ、数多くの貴重な全身骨格化石を展示中。
                太古の息吹を感じる圧倒的なスケールを、ぜひ会場で体感してください。
              </p>
              <button className="px-6 py-2.5 bg-white text-[#4a5d23] font-bold rounded-xl text-sm hover:bg-[#fdf8f1] transition-colors">
                展示会の詳細を見る
              </button>
            </div>
            <Footprints size={120} className="absolute -bottom-10 -right-10 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <button
              onClick={onReset}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#8b5e3c] text-white font-bold rounded-2xl hover:bg-[#7a4e2c] transition-colors shadow-lg"
            >
              <RefreshCcw size={20} />
              もう一度診断する
            </button>
            <button
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#e5ddd3] text-[#6b5a4a] font-bold rounded-2xl hover:bg-[#f9f7f2] transition-colors"
            >
              <Share2 size={20} />
              結果をシェアする
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
