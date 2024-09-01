"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, ReactNode } from "react";

interface RenderModelProps {
  children: ReactNode;
  className?: string;
}

const RenderModel: React.FC<RenderModelProps> = ({ children, className }) => {
  return (
    <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <ambientLight intensity={4} color="pink" />
    </Canvas>
  );
};

export default RenderModel;
