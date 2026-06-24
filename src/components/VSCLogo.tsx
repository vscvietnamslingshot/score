import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export const VSCLogo: React.FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-md hover:scale-105 transition-transform duration-200`}
    >
      {/* Outer elegant golden shield border */}
      <path
        d="M60 4C78 12 104 14 110 32C116 50 112 85 60 116C8 85 4 50 10 32C16 14 42 12 60 4Z"
        fill="url(#shield_bg)"
        stroke="url(#gold_grad)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      
      {/* Inner red decorative shield border */}
      <path
        d="M60 10C74 17 96 19 101 34C106 49 102 78 60 104C18 78 14 49 19 34C24 19 46 17 60 10Z"
        fill="url(#red_grad)"
        stroke="url(#inner_gold)"
        strokeWidth="2.5"
      />

      {/* Gold Star at top part - Vietnam flag inspired */}
      <polygon
        points="60,18 64,28 75,28 66,35 70,45 60,39 50,45 54,35 45,28 56,28"
        fill="url(#gold_grad)"
        stroke="#f59e0b"
        strokeWidth="0.5"
      />

      {/* Cross Slingshot outline overlay inside the shield */}
      <path
        d="M38 52 C38 65, 45 76, 54 78 L54 94 C54 97, 66 97, 66 94 L66 78 C75 76, 82 65, 82 52"
        stroke="rgba(251, 191, 36, 0.3)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bold Stylized letter VSC */}
      <g transform="translate(60, 68)">
        <text
          textAnchor="middle"
          className="font-black"
          style={{
            fontFamily: "'Outfit', 'Inter', sans-serif",
            fontSize: "30px",
            fill: "url(#gold_text_grad)",
            fontWeight: 900,
            letterSpacing: "-1px",
            filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.5))"
          }}
        >
          VSC
        </text>
      </g>

      {/* Small ribbon caption under initials VSC */}
      <rect x="35" y="78" width="50" height="9" rx="3.5" fill="#1e1b4b" stroke="url(#gold_grad)" strokeWidth="1" />
      <text
        x="60"
        y="85"
        textAnchor="middle"
        style={{
          fontFamily: "'Outfit', 'Inter', sans-serif",
          fontSize: "5.5px",
          fill: "#fef08a",
          fontWeight: 800,
          letterSpacing: "0.5px"
        }}
      >
        VIETNAM CHAMPS
      </text>

      {/* Definitions of beautiful gradients */}
      <defs>
        <radialGradient id="shield_bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
        <linearGradient id="red_grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b91c1c" />
          <stop offset="50%" stopColor="#991b1b" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
        <linearGradient id="gold_grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="inner_gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="gold_text_grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#fef08a" />
          <stop offset="75%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SlingshotIcon: React.FC<LogoProps> = ({ className = "", size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-md`}
    >
      {/* Background radial glow */}
      <circle cx="60" cy="60" r="50" fill="url(#circle_glow)" />

      {/* Target bulls-eye background circle lines */}
      <circle cx="60" cy="50" r="30" stroke="rgba(244, 63, 94, 0.25)" strokeWidth="1" strokeDasharray="3,3" />
      <circle cx="60" cy="50" r="18" stroke="rgba(244, 63, 94, 0.4)" strokeWidth="1.5" />
      <circle cx="60" cy="50" r="6" fill="#f43f5e" />

      {/* Slingshot Body (Wood Grain & Gunmetal finish Y-Shape Frame) */}
      {/* Right Fork */}
      <path
        d="M82 40 L70 65 C68 69, 64 73, 60 73"
        stroke="url(#slingshot_body_grad)"
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      {/* Left Fork */}
      <path
        d="M38 40 L50 65 C52 69, 56 73, 60 73"
        stroke="url(#slingshot_body_grad)"
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      {/* Handle */}
      <path
        d="M60 70 L60 102"
        stroke="url(#slingshot_handle_grad)"
        strokeWidth="11"
        strokeLinecap="round"
      />
      {/* Golden Screw/Rings cap on handle */}
      <circle cx="60" cy="74" r="3" fill="#f59e0b" />
      <circle cx="60" cy="94" r="3" fill="#f59e0b" />

      {/* Fork Tips metallic brackets */}
      <rect x="34" y="36" width="8" height="6" rx="1.5" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
      <rect x="78" y="36" width="8" height="6" rx="1.5" fill="#475569" stroke="#94a3b8" strokeWidth="1" />

      {/* Heavy Red Rubber Bands drawn in action tension */}
      {/* Left band */}
      <path
        d="M38 39 L60 50"
        stroke="#f43f5e"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="animate-pulse"
      />
      {/* Right band */}
      <path
        d="M82 39 L60 50"
        stroke="#f43f5e"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="animate-pulse"
      />

      {/* Leather projectile pouch holding bullet */}
      <path
        d="M54 48 C56 46, 64 46, 66 48 L63 53 C62 54, 58 54, 57 53 Z"
        fill="#78350f"
        stroke="#451a03"
        strokeWidth="1"
      />
      
      {/* Shiny silver steel ball projectile loaded inside the pouch */}
      <circle cx="60" cy="50" r="3.5" fill="url(#steel_ball)" />

      {/* Glow gradient definition */}
      <defs>
        <radialGradient id="circle_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
        <linearGradient id="slingshot_body_grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="slingshot_handle_grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="45%" stopColor="#d97706" />
          <stop offset="80%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
        <radialGradient id="steel_ball" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </radialGradient>
      </defs>
    </svg>
  );
};
