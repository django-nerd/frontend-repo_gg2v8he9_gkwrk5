import { Discord, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-t from-slate-950 to-sky-950">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold">Azure Kingdoms</h4>
          <p className="text-sky-100/80 text-sm">Ocean kingdoms. Endless adventures.</p>
        </div>
        <div className="flex items-center gap-3">
          <SocialLink href="#" label="Discord"><Discord className="w-5 h-5" /></SocialLink>
          <SocialLink href="#" label="YouTube"><Youtube className="w-5 h-5" /></SocialLink>
          <SocialLink href="#" label="Twitter"><Twitter className="w-5 h-5" /></SocialLink>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-sky-100/50">© {new Date().getFullYear()} Azure Kingdoms. Not affiliated with Mojang or Microsoft.</p>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-900/30 border border-sky-300/20 hover:bg-sky-900/50 transition-colors"
    >
      {children}
    </a>
  );
}
