import dynamic from "next/dynamic";
const LearningClient = dynamic(() => import("../../components/LearningClient"), { ssr: false });

export default function LearningPage() {
  return <LearningClient />;
} 