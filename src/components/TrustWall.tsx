import React from 'react'

export const TrustWall: React.FC = () => {
  const techLogos = [
    {
      name: 'Bun Runtime',
      svg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current">
          <path d="M50 15C32 15 18 28 18 45c0 10 5 18 12 23v7c0 3 2 5 5 5h30c3 0 5-2 5-5v-7c7-5 12-13 12-23 0-17-14-30-32-30zm-15 35a5 5 0 110-10 5 5 0 010 10zm30 0a5 5 0 110-10 5 5 0 010 10z" />
        </svg>
      ),
    },
    {
      name: 'React',
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 stroke-current fill-none stroke-[1.2]">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </svg>
      ),
    },
    {
      name: 'Vite',
      svg: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current">
          <path d="M29.5 5.5L16.8 28.2a1 1 0 01-1.7 0L2.5 5.5a1 1 0 011-1.5h25a1 1 0 011 1.5zm-13.5 18l8.2-15H7.8l8.2 15z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.72 13.91h-3.1v6.94H6.84v-6.94H3.72V11.6h8.5v2.31zm8.06 1.48c-.68-.38-1.52-.67-2.34-.67-.9 0-1.39.38-1.39.95 0 .61.54.84 1.76 1.25 1.73.57 2.76 1.34 2.76 2.85 0 1.94-1.54 3.07-3.9 3.07a7.7 7.7 0 0 1-3.32-.74l.64-2.23c.8.44 1.78.78 2.65.78 1 0 1.53-.41 1.53-1.02 0-.67-.53-.9-1.84-1.34-1.74-.58-2.68-1.42-2.68-2.76 0-1.86 1.48-2.97 3.65-2.97a7.3 7.3 0 0 1 2.9.59l-.42 2.24z" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm-2.953 0h2.118a.185.185 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.076a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186zm-2.954 0h2.119a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.185H5.122a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186zM23.95 12.3c-.347-.467-1.396-1.02-2.836-.732-.303-1.03-1.082-1.782-2.138-2.072l-.398-.106-.242.34c-.812 1.139-1.258 2.502-1.285 3.916H.58a.58.58 0 00-.58.58 8.04 8.04 0 004.91 7.426 15.65 15.65 0 0011.09 1.488c5.443-1.378 8.008-6.103 7.994-10.426.04-.142.02-.284-.044-.414" />
        </svg>
      ),
    },
  ]

  return (
    <section 
      className="py-10 border-y border-white/10 glass-surface relative z-10"
      aria-label="Supported Modern Web Ecosystem"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
          Engineered natively for high-velocity modern stacks
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-400">
          {techLogos.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center justify-center transition-all duration-300 hover:text-white hover:scale-110"
              title={tech.name}
              aria-label={tech.name}
            >
              <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                {tech.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
