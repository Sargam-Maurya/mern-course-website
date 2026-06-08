import React from 'react'

const ContactIllustration = ({ className = '' }) => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="60" y="60" width="380" height="380" rx="30" className="fill-violet-600/10" />
    <rect x="90" y="90" width="320" height="50" rx="12" className="fill-violet-600/15" />
    <circle cx="120" cy="115" r="14" className="fill-violet-500" />
    <path d="M114 115 L120 121 L132 109" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="150" y="105" width="100" height="5" rx="2.5" className="fill-violet-400/40" />
    <rect x="150" y="115" width="70" height="5" rx="2.5" className="fill-violet-400/30" />
    <circle cx="350" cy="115" r="10" className="fill-violet-400/30" />
    <path d="M346 115 L354 115 M350 111 L350 119" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-violet-500" />
    <rect x="90" y="160" width="320" height="50" rx="12" className="fill-violet-600/15" />
    <circle cx="120" cy="185" r="14" className="fill-violet-500" />
    <rect x="150" y="175" width="130" height="5" rx="2.5" className="fill-violet-400/40" />
    <rect x="150" y="185" width="90" height="5" rx="2.5" className="fill-violet-400/30" />
    <rect x="90" y="230" width="320" height="100" rx="12" className="fill-violet-600/15" />
    <circle cx="120" cy="255" r="14" className="fill-violet-500" />
    <rect x="150" y="245" width="200" height="5" rx="2.5" className="fill-violet-400/40" />
    <rect x="150" y="258" width="180" height="5" rx="2.5" className="fill-violet-400/30" />
    <rect x="150" y="271" width="160" height="5" rx="2.5" className="fill-violet-400/30" />
    <rect x="150" y="284" width="140" height="5" rx="2.5" className="fill-violet-400/20" />
    <rect x="150" y="297" width="120" height="5" rx="2.5" className="fill-violet-400/20" />
    <rect x="90" y="350" width="160" height="45" rx="10" className="fill-violet-600" />
    <text x="170" y="378" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="sans-serif">Send Message</text>
    <circle cx="330" cy="372" r="22" className="fill-violet-100/15" />
    <path d="M310 372 L325 387 L350 358" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M80 435 L110 415 L140 435 L170 415 L200 435 L230 415 L260 435 L290 415 L320 435 L350 415 L380 435 L410 415" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-violet-500/40" fill="none" />
    <circle cx="110" cy="415" r="4" className="fill-violet-500/50" />
    <circle cx="200" cy="435" r="4" className="fill-violet-500/50" />
    <circle cx="290" cy="415" r="4" className="fill-violet-500/50" />
    <circle cx="380" cy="435" r="4" className="fill-violet-500/50" />
    <rect x="370" y="160" width="30" height="50" rx="6" className="fill-violet-500/20" />
    <rect x="373" y="165" width="24" height="4" rx="2" className="fill-violet-400/40" />
    <rect x="373" y="175" width="24" height="4" rx="2" className="fill-violet-400/30" />
    <rect x="373" y="185" width="18" height="4" rx="2" className="fill-violet-400/20" />
    <rect x="373" y="195" width="12" height="4" rx="2" className="fill-violet-400/20" />
  </svg>
)

export default ContactIllustration
