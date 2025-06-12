import dynamic from "next/dynamic";
const TrackerClient = dynamic(() => import("../../components/TrackerClient"), { ssr: false });

export default function TrackerPage() {
  return <TrackerClient />;
} 