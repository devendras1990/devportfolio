export function ChatGPT3DIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cgBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10A37F" />
          <stop offset="0.5" stopColor="#0D8C6D" />
          <stop offset="1" stopColor="#085441" />
        </linearGradient>
        <radialGradient id="cgGlow" cx="24" cy="20" r="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#54F5CA" stopOpacity="0.8" />
          <stop offset="0.6" stopColor="#10A37F" stopOpacity="0.2" />
          <stop offset="1" stopColor="#10A37F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cgEdge" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7EFFDA" />
          <stop offset="1" stopColor="#094E3D" stopOpacity="0.4" />
        </linearGradient>
        <filter id="cgShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#10A37F" floodOpacity="0.45" />
        </filter>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#cgBg)" filter="url(#cgShadow)" />
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#cgGlow)" />
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="url(#cgEdge)" strokeWidth="1.5" />
      <g transform="translate(18, 17) scale(0.95)">
        <path
          d="M14.6 2.3a6.8 6.8 0 0 1 7.2 4.1l.3 1.1a1 1 0 0 0 .9.7 6.8 6.8 0 0 1 5.4 6.3v.8a1 1 0 0 0 .7.9 6.8 6.8 0 0 1-1.8 8.1l-.8.6a1 1 0 0 0-.4 1.1 6.8 6.8 0 0 1-7.2 4.1l-.4-.1a1 1 0 0 0-1.1.4 6.8 6.8 0 0 1-7.7-1.4l-.5-.6a1 1 0 0 0-1-.3 6.8 6.8 0 0 1-4.7-6.9v-.7a1 1 0 0 0-.6-.9 6.8 6.8 0 0 1 2.3-8.1l.7-.4a1 1 0 0 0 .5-1.1A6.8 6.8 0 0 1 14.6 2.3Z"
          fill="#063227"
          opacity="0.5"
        />
        <circle cx="15" cy="15.5" r="3" fill="#E6FFFA" />
        <path
          d="M15 4.5c4.5 0 7.8 2.6 8.5 6.5l-6.8 3.9a2.5 2.5 0 0 0-1.3-1.8l-.4-8.6Z"
          fill="#A7F3D0"
        />
        <path
          d="M25.5 10.5c2.3 3.9 1.7 8.2-.8 11.5l-6.8-3.9a2.5 2.5 0 0 0 .2-2.2l7.4-5.4Z"
          fill="#6EE7B7"
        />
        <path
          d="M25.5 20.5c-.3 4.5-3.8 7.5-7.7 7.5l-.1-7.8a2.5 2.5 0 0 0 1.5-.7l6.3 1Z"
          fill="#34D399"
        />
        <path
          d="M15 26.5c-4.5 0-7.8-2.6-8.5-6.5l6.8-3.9a2.5 2.5 0 0 0 1.3 1.8l.4 8.6Z"
          fill="#10B981"
        />
        <path
          d="M4.5 20.5c-2.3-3.9-1.7-8.2.8-11.5l6.8 3.9a2.5 2.5 0 0 0-.2 2.2l-7.4 5.4Z"
          fill="#059669"
        />
        <path
          d="M4.5 10.5c.3-4.5 3.8-7.5 7.7-7.5l.1 7.8a2.5 2.5 0 0 0-1.5.7l-6.3-1Z"
          fill="#34D399"
        />
      </g>
    </svg>
  );
}

export function Claude3DIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="clBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#35201A" />
          <stop offset="0.6" stopColor="#221410" />
          <stop offset="1" stopColor="#140B08" />
        </linearGradient>
        <radialGradient id="clGlow" cx="32" cy="30" r="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D97757" stopOpacity="0.45" />
          <stop offset="1" stopColor="#D97757" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="clEdge" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4A27E" />
          <stop offset="1" stopColor="#D97757" stopOpacity="0.3" />
        </linearGradient>
        <filter id="clShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#D97757" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#clBg)" filter="url(#clShadow)" />
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#clGlow)" />
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="url(#clEdge)" strokeWidth="1.5" />
      <g transform="translate(14, 14)">
        <polygon points="18,3 18,18 14,14" fill="#F4906A" />
        <polygon points="18,3 22,14 18,18" fill="#D97757" />
        <polygon points="33,18 18,18 22,14" fill="#FFB08E" />
        <polygon points="33,18 22,22 18,18" fill="#C25A38" />
        <polygon points="18,33 18,18 22,22" fill="#A34626" />
        <polygon points="18,33 14,22 18,18" fill="#88361B" />
        <polygon points="3,18 18,18 14,22" fill="#D97757" />
        <polygon points="3,18 14,14 18,18" fill="#E8825E" />
        <polygon points="28,8 18,18 22,14" fill="#FFCBB5" />
        <polygon points="28,28 18,18 22,22" fill="#B44F2E" />
        <polygon points="8,28 18,18 14,22" fill="#B95433" />
        <polygon points="8,8 18,18 14,14" fill="#F39C79" />
        <circle cx="18" cy="18" r="3.5" fill="#FFE5D9" />
      </g>
    </svg>
  );
}

export function Gemini3DIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gmBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B244A" />
          <stop offset="0.6" stopColor="#121833" />
          <stop offset="1" stopColor="#0B0E20" />
        </linearGradient>
        <radialGradient id="gmGlow" cx="32" cy="30" r="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5B8DEF" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#9B72CF" stopOpacity="0.3" />
          <stop offset="1" stopColor="#5B8DEF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gmEdge" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9B72CF" />
          <stop offset="1" stopColor="#3C5DB5" stopOpacity="0.4" />
        </linearGradient>
        <filter id="gmShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#5B8DEF" floodOpacity="0.45" />
        </filter>
        <linearGradient
          id="gmStarLight"
          x1="10"
          y1="10"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4E4FF" />
          <stop offset="0.5" stopColor="#7FA8F5" />
          <stop offset="1" stopColor="#5B8DEF" />
        </linearGradient>
        <linearGradient
          id="gmStarPurple"
          x1="32"
          y1="32"
          x2="54"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C49BFF" />
          <stop offset="0.5" stopColor="#9B72CF" />
          <stop offset="1" stopColor="#673AB7" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#gmBg)" filter="url(#gmShadow)" />
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#gmGlow)" />
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="url(#gmEdge)" strokeWidth="1.5" />
      <g transform="translate(14, 14)">
        <path d="M18 2 C18 10 10 18 2 18 C10 18 18 18 18 18 Z" fill="url(#gmStarLight)" />
        <path d="M18 2 C18 10 26 18 34 18 C26 18 18 18 18 18 Z" fill="#9FBDF7" />
        <path d="M34 18 C26 18 18 26 18 34 C18 26 18 18 18 18 Z" fill="url(#gmStarPurple)" />
        <path d="M18 34 C18 26 10 18 2 18 C10 18 18 18 18 18 Z" fill="#7551B5" />
        <line x1="18" y1="2" x2="18" y2="34" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.8" />
        <line x1="2" y1="18" x2="34" y2="18" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.8" />
        <circle cx="18" cy="18" r="2.5" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function Figma3DIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="faBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#251733" />
          <stop offset="0.6" stopColor="#181120" />
          <stop offset="1" stopColor="#0E0A14" />
        </linearGradient>
        <radialGradient id="faGlow" cx="32" cy="28" r="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A259FF" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#F24E1E" stopOpacity="0.2" />
          <stop offset="1" stopColor="#A259FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="faEdge" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C48BFF" />
          <stop offset="1" stopColor="#A259FF" stopOpacity="0.3" />
        </linearGradient>
        <filter id="faShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#A259FF" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#faBg)" filter="url(#faShadow)" />
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#faGlow)" />
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="url(#faEdge)" strokeWidth="1.5" />
      <g transform="translate(19, 14)">
        <path d="M0 6C0 2.7 2.7 0 6 0H13V12H6C2.7 12 0 9.3 0 6Z" fill="#F24E1E" />
        <path d="M13 0H20C23.3 0 26 2.7 26 6C26 9.3 23.3 12 20 12H13V0Z" fill="#FF7262" />
        <path d="M0 18C0 14.7 2.7 12 6 12H13V24H6C2.7 24 0 21.3 0 18Z" fill="#A259FF" />
        <circle cx="19.5" cy="18" r="6.5" fill="#1ABCFE" />
        <path
          d="M0 30C0 26.7 2.7 24 6 24H13V31C13 34.3 10.3 37 7 37C3.7 37 0 34.3 0 31V30Z"
          fill="#0ACF83"
        />
        <path
          d="M0 6C0 2.7 2.7 0 6 0H20C23.3 0 26 2.7 26 6L13 18L0 6Z"
          fill="#FFFFFF"
          opacity="0.18"
        />
      </g>
    </svg>
  );
}

export function Adobe3DIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="aaBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#35141D" />
          <stop offset="0.6" stopColor="#220D13" />
          <stop offset="1" stopColor="#14060A" />
        </linearGradient>
        <radialGradient id="aaGlow" cx="32" cy="28" r="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF0044" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#FF5555" stopOpacity="0.25" />
          <stop offset="1" stopColor="#FF0044" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="aaEdge" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4A78" />
          <stop offset="1" stopColor="#FF0044" stopOpacity="0.3" />
        </linearGradient>
        <filter id="aaShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#FF0044" floodOpacity="0.45" />
        </filter>
        <linearGradient id="aaPrism" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3366" />
          <stop offset="0.5" stopColor="#FF0033" />
          <stop offset="1" stopColor="#990022" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#aaBg)" filter="url(#aaShadow)" />
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#aaGlow)" />
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="url(#aaEdge)" strokeWidth="1.5" />
      <g transform="translate(16, 16)">
        <polygon points="16,3 2,31 10,31 16,19" fill="#FF5E85" />
        <polygon points="16,3 30,31 22,31 16,19" fill="url(#aaPrism)" />
        <polygon points="16,19 12,27 20,27" fill="#FFAEC0" />
        <polygon points="16,3 16,19 20,27 22,31" fill="#FFFFFF" opacity="0.25" />
      </g>
    </svg>
  );
}

export function Lovable3DIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lvBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#381026" />
          <stop offset="0.6" stopColor="#240A18" />
          <stop offset="1" stopColor="#14040E" />
        </linearGradient>
        <radialGradient id="lvGlow" cx="32" cy="28" r="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3388" stopOpacity="0.5" />
          <stop offset="0.6" stopColor="#9922FF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#FF3388" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lvEdge" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF66AA" />
          <stop offset="1" stopColor="#FF3388" stopOpacity="0.3" />
        </linearGradient>
        <filter id="lvShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#FF3388" floodOpacity="0.45" />
        </filter>
        <linearGradient id="lvHeart" x1="16" y1="12" x2="48" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4D94" />
          <stop offset="0.45" stopColor="#FF2A7A" />
          <stop offset="1" stopColor="#9B26FF" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#lvBg)" filter="url(#lvShadow)" />
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#lvGlow)" />
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="url(#lvEdge)" strokeWidth="1.5" />
      <g transform="translate(15, 16)">
        <path
          d="M17 31 C17 31 3 22 3 12 C3 6.5 7.5 2 13 2 C16.5 2 17 4.5 17 4.5 C17 4.5 17.5 2 21 2 C26.5 2 31 6.5 31 12 C31 22 17 31 17 31 Z"
          fill="url(#lvHeart)"
        />
        <path
          d="M13 2 C16.5 2 17 4.5 17 4.5 L17 17 L8 10 C6 7.5 9 3 13 2 Z"
          fill="#FFA3C8"
          opacity="0.75"
        />
        <path
          d="M21 2 C25 3 28 7.5 26 10 L17 17 L17 4.5 C17 4.5 17.5 2 21 2 Z"
          fill="#E01B6B"
          opacity="0.6"
        />
        <polygon points="17,17 17,31 8,10" fill="#FF1A75" opacity="0.8" />
        <polygon points="17,17 17,31 26,10" fill="#7A00E6" opacity="0.8" />
        <circle cx="11" cy="7" r="2" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export function ClaudeCode3DIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ccBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2D1F17" />
          <stop offset="0.6" stopColor="#1B120D" />
          <stop offset="1" stopColor="#0F0A07" />
        </linearGradient>
        <radialGradient id="ccGlow" cx="32" cy="28" r="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" stopOpacity="0.45" />
          <stop offset="0.6" stopColor="#D97757" stopOpacity="0.25" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ccEdge" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="1" stopColor="#D97757" stopOpacity="0.35" />
        </linearGradient>
        <filter id="ccShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#F59E0B" floodOpacity="0.4" />
        </filter>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#ccBg)" filter="url(#ccShadow)" />
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#ccGlow)" />
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="url(#ccEdge)" strokeWidth="1.5" />
      <g transform="translate(15, 16)">
        <polygon points="17,2 32,10 17,18 2,10" fill="#4A3428" />
        <polygon points="2,10 17,18 17,32 2,24" fill="#2E1F18" />
        <polygon points="17,18 32,10 32,24 17,32" fill="#20150F" />
        <path
          d="M10 10 L15 13 L10 16"
          stroke="#FDE68A"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="18"
          y1="15"
          x2="24"
          y2="15"
          stroke="#F59E0B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="17" cy="25" r="2.5" fill="#34D399" />
      </g>
    </svg>
  );
}

export function GoogleAIStudio3DIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gsBg" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E2748" />
          <stop offset="0.6" stopColor="#131830" />
          <stop offset="1" stopColor="#0B0E1E" />
        </linearGradient>
        <radialGradient id="gsGlow" cx="32" cy="28" r="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" stopOpacity="0.5" />
          <stop offset="0.6" stopColor="#818CF8" stopOpacity="0.25" />
          <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gsEdge" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DD3FC" />
          <stop offset="1" stopColor="#38BDF8" stopOpacity="0.3" />
        </linearGradient>
        <filter id="gsShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#38BDF8" floodOpacity="0.45" />
        </filter>
        <linearGradient
          id="gsAtomRing"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38BDF8" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#C084FC" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#gsBg)" filter="url(#gsShadow)" />
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#gsGlow)" />
      <rect x="7" y="7" width="50" height="50" rx="15" stroke="url(#gsEdge)" strokeWidth="1.5" />
      <g transform="translate(16, 16)">
        <ellipse
          cx="16"
          cy="16"
          rx="15"
          ry="6"
          transform="rotate(-30 16 16)"
          stroke="url(#gsAtomRing)"
          strokeWidth="1.8"
          opacity="0.85"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="15"
          ry="6"
          transform="rotate(30 16 16)"
          stroke="url(#gsAtomRing)"
          strokeWidth="1.8"
          opacity="0.85"
        />
        <circle cx="27" cy="10" r="2.2" fill="#E0F2FE" />
        <circle cx="5" cy="22" r="2.2" fill="#E0F2FE" />
        <circle cx="16" cy="16" r="6" fill="#38BDF8" />
        <circle cx="16" cy="16" r="4" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
