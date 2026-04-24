import { Link } from 'react-router-dom';

const features = [
  {
    icon: '✦',
    title: 'Text-to-Architecture',
    description:
      'Describe any structure in natural language — homes, offices, pavilions — and watch it materialize as a 3D model.',
  },
  {
    icon: '◈',
    title: 'AI-Driven Generation',
    description:
      'Powered by Google Gemini AI to interpret spatial relationships, dimensions, and architectural intent from your prompts.',
  },
  {
    icon: '▣',
    title: 'Interactive 3D Viewer',
    description:
      'Explore generated models in a fully interactive Three.js viewport. Orbit, zoom, and inspect every detail.',
  },
  {
    icon: '◉',
    title: 'Rapid Iteration',
    description:
      'Refine your designs by adjusting prompts. Each generation takes seconds, enabling fast creative exploration.',
  },
];

const techStack = [
  'React',
  'Three.js',
  'TypeScript',
  'Google Gemini AI',
  'Vite',
  'Node.js',
];

const About = () => {
  return (
    <section className="page-wrapper px-6 sm:px-16">
      <div className="relative z-10 mx-auto max-w-5xl pt-32 pb-20">
        {/* Header */}
        <p className="fade-in-up text-[13px] font-medium uppercase tracking-[0.3em] text-[#555]">
          About the project
        </p>
        <h1 className="fade-in-up-delay-1 mt-4 text-[clamp(2rem,4vw,3.5rem)] font-black leading-[1.1] tracking-tight text-white">
          Building the future of
          <br />
          <span className="gradient-text">architectural design.</span>
        </h1>

        <p className="fade-in-up-delay-2 mt-8 max-w-2xl text-[16px] leading-[1.8] text-[#888]">
          AI Arch is an experimental platform that bridges the gap between
          imagination and architecture. By combining large language models with
          real-time 3D rendering, we enable anyone to generate architectural
          concepts from simple text descriptions — no CAD experience required.
        </p>

        {/* Features grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover rounded-xl bg-[#0a0a0a] p-8"
            >
              <span className="text-2xl">{feature.icon}</span>
              <h3 className="mt-4 text-[17px] font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-[#888]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-20">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.3em] text-[#555]">
            Built with
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#1a1a1a] px-4 py-2 text-[13px] font-medium text-[#888] transition-colors hover:border-[#333] hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-20">
          <h2 className="text-[13px] font-medium uppercase tracking-[0.3em] text-[#555]">
            How it works
          </h2>
          <div className="mt-8 grid gap-px sm:grid-cols-4">
            {[
              { step: '01', label: 'Describe', desc: 'Type your architectural vision as a text prompt' },
              { step: '02', label: 'Process', desc: 'AI interprets spatial layout and object placement' },
              { step: '03', label: 'Generate', desc: '3D model is built in real-time with Three.js' },
              { step: '04', label: 'Explore', desc: 'Interact with your design in the 3D viewport' },
            ].map((item) => (
              <div
                key={item.step}
                className="border-l border-[#1a1a1a] py-6 pl-6 first:border-l-0 first:pl-0"
              >
                <p className="text-[12px] font-semibold text-[#333]">{item.step}</p>
                <p className="mt-2 text-[15px] font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-10 text-center">
          <h2 className="text-2xl font-bold text-white">Ready to build?</h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] text-[#888]">
            Start generating 3D architectural models from text prompts right now.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/generate" className="btn-primary">
              Try It Now
            </Link>
            <Link to="/profile" className="btn-secondary">
              Set Up Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
