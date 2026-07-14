import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = (props: IconProps) => ({ viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, ...props });

export function ToothIcon(props: IconProps) { return <svg {...base(props)}><path d="M12 9c4-5 9-4 12-2 3-2 8-3 12 2 6 8 0 16-2 23-2 7-5 10-8 2l-2-7-2 7c-3 8-6 5-8-2-2-7-8-15-2-23Z"/><path d="M20 10c2 1 5 1 8 0"/></svg>; }
export function ImplantIcon(props: IconProps) { return <svg {...base(props)}><path d="M13 8c4-4 8-3 11-1 3-2 7-3 11 1 5 6 1 13-1 18-1 3-3 5-6 4"/><path d="M20 30c-3 1-5-1-6-4-2-5-6-12-1-18"/><path d="M24 17v22m-5-17h10m-9 5h8m-7 5h6m-4 7h2"/></svg>; }
export function SmileIcon(props: IconProps) { return <svg {...base(props)}><path d="M9 15c4 3 9 4 15 4s11-1 15-4"/><path d="M10 25c7 10 21 13 29 1"/><path d="M14 28c6 5 14 7 21 1"/></svg>; }
export function VeneerIcon(props: IconProps) { return <svg {...base(props)}><path d="M17 7c4-3 10-3 14 0 5 7 0 12-1 20-1 7-3 13-6 13s-5-6-6-13c-1-8-6-13-1-20Z"/><path d="M29 9c-5 4-7 15-5 27"/></svg>; }
export function BracesIcon(props: IconProps) { return <svg {...base(props)}><path d="M10 10c4-4 9-2 14 0 5-2 10-4 14 0 3 6 0 18-5 25-3 4-6 1-9-2-3 3-6 6-9 2-5-7-8-19-5-25Z"/><path d="M10 22h28M16 18v8m8-8v8m8-8v8"/><rect x="14" y="20" width="4" height="4"/><rect x="22" y="20" width="4" height="4"/><rect x="30" y="20" width="4" height="4"/></svg>; }
export function ClockIcon(props: IconProps) { return <svg {...base(props)}><circle cx="24" cy="24" r="17"/><path d="M24 14v11l8 5"/></svg>; }
export function GraduationIcon(props: IconProps) { return <svg {...base(props)}><path d="m6 18 18-9 18 9-18 9L6 18Z"/><path d="M13 22v10c7 6 15 6 22 0V22M42 18v12"/></svg>; }
export function ShieldIcon(props: IconProps) { return <svg {...base(props)}><path d="M24 6c5 4 10 5 16 6v10c0 10-6 17-16 21C14 39 8 32 8 22V12c6-1 11-2 16-6Z"/><path d="m16 24 5 5 11-12"/></svg>; }
export function CareIcon(props: IconProps) { return <svg {...base(props)}><path d="M24 39 9 25c-8-8 4-20 12-11l3 4 3-4c8-9 20 3 12 11L24 39Z"/><path d="M15 27c5-3 13-3 18 0"/></svg>; }
export function LocationIcon(props: IconProps) { return <svg {...base(props)}><path d="M38 20c0 11-14 23-14 23S10 31 10 20a14 14 0 1 1 28 0Z"/><circle cx="24" cy="20" r="5"/></svg>; }

export const dentalIcons = { tooth: ToothIcon, implant: ImplantIcon, smile: SmileIcon, veneer: VeneerIcon, braces: BracesIcon, clock: ClockIcon, graduation: GraduationIcon, shield: ShieldIcon, care: CareIcon, location: LocationIcon };
