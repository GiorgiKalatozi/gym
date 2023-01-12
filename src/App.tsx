import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}
