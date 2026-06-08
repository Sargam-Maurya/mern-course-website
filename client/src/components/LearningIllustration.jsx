import React from 'react'

const LearningIllustration = ({ className = '' }) => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="60" y="80" width="380" height="260" rx="20" className="fill-violet-600/20" />
    <rect x="80" y="100" width="120" height="80" rx="8" className="fill-violet-500/30" />
    <rect x="210" y="100" width="120" height="80" rx="8" className="fill-violet-400/20" />
    <rect x="340" y="100" width="80" height="80" rx="8" className="fill-violet-300/20" />
    <rect x="80" y="195" width="340" height="4" rx="2" className="fill-violet-600/30" />
    <rect x="80" y="215" width="200" height="6" rx="3" className="fill-violet-500/40" />
    <rect x="80" y="230" width="250" height="6" rx="3" className="fill-violet-400/30" />
    <rect x="80" y="245" width="180" height="6" rx="3" className="fill-violet-300/30" />
    <rect x="80" y="270" width="100" height="30" rx="6" className="fill-violet-600/50" />
    <circle cx="410" cy="140" r="8" className="fill-violet-500" />
    <circle cx="430" cy="140" r="8" className="fill-violet-400" />
    <circle cx="450" cy="140" r="8" className="fill-violet-300" />
    <path d="M100 360 L120 340 L140 360 L160 340 L180 360" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500" fill="none" />
    <path d="M200 360 L220 330 L240 360 L260 320 L280 360" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400" fill="none" />
    <path d="M300 360 L320 335 L340 360 L360 310 L380 360" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500" fill="none" />
    <circle cx="120" cy="410" r="25" className="fill-violet-600/20" />
    <circle cx="120" cy="410" r="12" className="fill-violet-500/40" />
    <rect x="220" y="395" width="60" height="8" rx="4" className="fill-violet-600/30" />
    <rect x="220" y="412" width="60" height="8" rx="4" className="fill-violet-400/30" />
    <rect x="220" y="429" width="40" height="8" rx="4" className="fill-violet-300/30" />
    <circle cx="370" cy="410" r="25" className="fill-violet-600/20" />
    <circle cx="370" cy="410" r="12" className="fill-violet-500/40" />
    <path d="M250 460 C280 450 300 460 330 450" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-violet-600/50" fill="none" />
    <rect x="300" y="210" width="100" height="70" rx="10" className="fill-violet-600/20 stroke-violet-500/50" strokeWidth="2" />
    <path d="M320 240 L360 240" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-violet-500/60" />
    <path d="M320 253 L350 253" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-violet-400/60" />
    <path d="M320 266 L340 266" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-violet-300/60" />
  </svg>
)

export default LearningIllustration
