import Button from "../components/Button";
import dynamic from "next/dynamic";

const RemoteAButton = dynamic(() => import("remoteA/Button"), {
  ssr: false,
});

const RemoteBButton = dynamic(() => import("remoteB/Button"), {
  ssr: false,
});

export default function Home() {
  return (
    <div style={{ padding: "2%" }}>
      <h1>Next JS and React</h1>
      <h2>Host - Microfront</h2>
      <Button />
      <h2>RemoteA - Microfront</h2>
      <RemoteAButton />
      <h2>RemoteB - Microfront</h2>
      <RemoteBButton />
    </div>
  );
}
