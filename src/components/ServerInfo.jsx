import { Server, Users, Globe } from 'lucide-react';

export default function ServerInfo() {
  return (
    <section id="play" className="relative py-16 md:py-24 bg-gradient-to-b from-slate-950 to-sky-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            icon={<Server className="w-6 h-6" />}
            title="Always Online"
            desc="High-performance servers in NA & EU regions for smooth adventures."
          />
          <InfoCard
            icon={<Users className="w-6 h-6" />}
            title="Community"
            desc="Friendly players, active staff, and seasonal kingdom events."
          />
          <InfoCard
            icon={<Globe className="w-6 h-6" />}
            title="Cross-Play"
            desc="Java 1.20+ support with Bedrock gateway coming soon."
          />
        </div>

        <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-sky-300/20 bg-sky-900/10 p-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Join the Azure Kingdoms</h3>
            <p className="text-sky-100/80">Add to server list: play.azure-kingdoms.gg • Port: 25565</p>
          </div>
          <CopyIpButton ip="play.azure-kingdoms.gg" />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-sky-300/20 bg-sky-900/10 p-6">
      <div className="text-sky-300">{icon}</div>
      <h4 className="mt-3 text-xl font-semibold">{title}</h4>
      <p className="mt-1 text-sky-100/80">{desc}</p>
    </div>
  );
}

function CopyIpButton({ ip }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      alert('Server IP copied to clipboard');
    } catch (e) {
      alert('Copy failed. Please copy manually: ' + ip);
    }
  };

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg bg-sky-400 hover:bg-sky-300 text-sky-950 font-semibold px-5 py-3 transition-colors"
    >
      Copy IP
    </button>
  );
}
