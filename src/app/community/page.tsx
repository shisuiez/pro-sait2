import dynamic from "next/dynamic";
const CommunityClient = dynamic(() => import("../../components/CommunityClient"), { ssr: false });

export default function CommunityPage() {
  return <CommunityClient />;
} 