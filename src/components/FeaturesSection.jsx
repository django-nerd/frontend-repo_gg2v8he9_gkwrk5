import { Shield, Crown, Anchor, Compass } from 'lucide-react';

const features = [
  {
    icon: <Crown className="w-6 h-6" />,
    title: 'Kingdoms & Clans',
    desc: 'Form alliances, claim land, levy taxes, and wage sea-faring wars.'
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    title: 'Naval Exploration',
    desc: 'Chart routes, discover islands, and battle pirates on the open sea.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Custom Gear',
    desc: 'Earn enchanted gear from dungeons hidden beneath coral reefs.'
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Events & Seasons',
    desc: 'Ranked seasons with unique rewards and server-wide festivals.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold">Features of the Azure Kingdoms</h2>
        <p className="mt-2 text-sky-100/80 max-w-2xl">A balanced mix of survival, roleplay, and conquest set in a breathtaking ocean world.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-sky-300/20 bg-sky-900/10 p-6 hover:bg-sky-900/20 transition-colors">
              <div className="text-sky-300">{f.icon}</div>
              <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
              <p className="mt-1 text-sky-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
