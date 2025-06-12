"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./AsiaMapClient"), { ssr: false });

export default function AsiaMap() {
  return <DynamicMap />;
}