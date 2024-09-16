import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiWebcam,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: (
      <div className="bg-blue-200 p-4 rounded-full">
        <PiWebcam className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Update",
    description: "We frequently update our site.",
  },
  {
    icon: (
      <div className="bg-blue-200 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "E Store",
    description: "The Production of MU Magazine will be available shortly",
  },
  {
    icon: (
      <div className="bg-blue-200 p-4 rounded-full">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Authentication",
    description:
      "MUU Security respect and Value your privacy your login details and information a kept safely ",
  },
  {
    icon: (
      <div className="bg-blue-200 p-4 rounded-full">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Social Media",
    description: "We are on Various Social Media you can check us out",
  },
  {
    icon: (
      <div className="bg-blue-200 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Mobile App",
    description:
      "Mobile Application of MUU Security will be available in a short period of time.",
  },
  {
    icon: (
      <div className="bg-blue-200 p-4 rounded-full">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Support",
    description:
      "Feel free to Contact Us on our Platforms and we will reach out to you as soon as possible.",
  },
];
