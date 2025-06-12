import dynamic from "next/dynamic";
const AnalyticsClient = dynamic(() => import("../../components/AnalyticsClient"), { ssr: false });

export default function AnalyticsPage() {
  return <AnalyticsClient />;
} 