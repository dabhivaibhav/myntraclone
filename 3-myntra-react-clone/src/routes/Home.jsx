import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

export default function Home() {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} homeitem={item} />
        ))}
      </div>
    </main>
  );
}
