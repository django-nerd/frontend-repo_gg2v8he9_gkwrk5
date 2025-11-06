import Spline from '@splinetool/react-spline';
import { Sparkles, Waves } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 via-sky-950/60 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <div className="backdrop-blur-sm bg-sky-900/20 border border-sky-300/20 rounded-2xl p-6 md:p-10 shadow-xl">
            <div className="flex items-center gap-3 text-sky-200">
              <Waves className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs md:text-sm">Welcome to the Realm</span>
            </div>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
              Azure Kingdoms
            </h1>
            <p className="mt-3 md:mt-4 text-sky-100/90 max-w-2xl">
              Dive into a vast ocean realm where kingdoms rise from the waves. Build, conquer, and forge alliances across shimmering shores and coral citadels.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#play"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-400 hover:bg-sky-300 text-sky-950 font-semibold px-5 py-3 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Play Now
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-sky-300/30 hover:border-sky-200/60 bg-sky-900/20 px-5 py-3"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-6 text-sm text-sky-200/80">
              IP: play.azure-kingdoms.gg • Version: 1.20+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
