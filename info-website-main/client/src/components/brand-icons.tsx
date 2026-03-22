import {
  SiOpenai,
  SiAnthropic,
  SiGoogle,
  SiMeta,
  SiMistralai,
  SiApple,
  SiGarmin,
  SiStrava,
  SiFitbit,
  SiGooglegemini,
  SiOllama,
} from "react-icons/si";
import type { CSSProperties, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

function iconStyle(size: number | string = 18): CSSProperties {
  return { width: size, height: size, display: "inline-block", flexShrink: 0 };
}

export function OpenAIIcon({ size = 18, ...props }: IconProps) {
  return <SiOpenai style={iconStyle(size)} {...(props as any)} />;
}

export function AnthropicIcon({ size = 18, ...props }: IconProps) {
  return <SiAnthropic style={iconStyle(size)} {...(props as any)} />;
}

export function GeminiIcon({ size = 18, ...props }: IconProps) {
  return <SiGooglegemini style={iconStyle(size)} {...(props as any)} />;
}

export function GoogleIcon({ size = 18, ...props }: IconProps) {
  return <SiGoogle style={iconStyle(size)} {...(props as any)} />;
}

export function MetaIcon({ size = 18, ...props }: IconProps) {
  return <SiMeta style={iconStyle(size)} {...(props as any)} />;
}

export function MistralIcon({ size = 18, ...props }: IconProps) {
  return <SiMistralai style={iconStyle(size)} {...(props as any)} />;
}

export function AppleIcon({ size = 18, ...props }: IconProps) {
  return <SiApple style={iconStyle(size)} {...(props as any)} />;
}

export function GarminIcon({ size = 18, ...props }: IconProps) {
  return <SiGarmin style={iconStyle(size)} {...(props as any)} />;
}

export function StravaIcon({ size = 18, ...props }: IconProps) {
  return <SiStrava style={iconStyle(size)} {...(props as any)} />;
}

export function FitbitIcon({ size = 18, ...props }: IconProps) {
  return <SiFitbit style={iconStyle(size)} {...(props as any)} />;
}

export function OllamaIcon({ size = 18, ...props }: IconProps) {
  return <SiOllama style={iconStyle(size)} {...(props as any)} />;
}

export function WHOOPIcon({ size = 18, ...props }: IconProps) {
  const s = Number(size);
  return (
    <svg role="img" aria-label="WHOOP" viewBox="0 0 24 24" fill="currentColor" style={iconStyle(s)} {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
    </svg>
  );
}

export function OuraIcon({ size = 18, ...props }: IconProps) {
  const s = Number(size);
  return (
    <svg role="img" aria-label="Oura" viewBox="0 0 24 24" fill="currentColor" style={iconStyle(s)} {...props}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

export function WithingsIcon({ size = 18, ...props }: IconProps) {
  const s = Number(size);
  return (
    <svg role="img" aria-label="Withings" viewBox="0 0 24 24" fill="currentColor" style={iconStyle(s)} {...props}>
      <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3zm0 2a7 7 0 1 1 0 14A7 7 0 0 1 12 5zm-1 3v4H8l4 5 4-5h-3V8h-2z" />
    </svg>
  );
}

export function PolarIcon({ size = 18, ...props }: IconProps) {
  const s = Number(size);
  return (
    <svg role="img" aria-label="Polar" viewBox="0 0 24 24" fill="currentColor" style={iconStyle(s)} {...props}>
      <path d="M3 12h18M12 3v18M5.636 5.636l12.728 12.728M18.364 5.636 5.636 18.364" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function DexcomIcon({ size = 18, ...props }: IconProps) {
  const s = Number(size);
  return (
    <svg role="img" aria-label="Dexcom" viewBox="0 0 24 24" fill="currentColor" style={iconStyle(s)} {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-.5 3v5.293l3.354 3.353 1.06-1.06-2.914-2.915V7h-1.5z" />
    </svg>
  );
}

export function GoogleHealthIcon({ size = 18, ...props }: IconProps) {
  return <SiGoogle style={iconStyle(size)} {...(props as any)} />;
}

export function WHOOPSimpleIcon({ size = 18, ...props }: IconProps) {
  const s = Number(size);
  return (
    <svg viewBox="0 0 100 30" fill="currentColor" style={{ ...iconStyle(s), width: s * 2.5, height: s }} {...props}>
      <text x="0" y="24" fontSize="28" fontWeight="bold" fontFamily="sans-serif">WHOOP</text>
    </svg>
  );
}
