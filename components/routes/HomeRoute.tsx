"use client";

import ComponentLayout from "../ComponentLayout";
import Nav from "../Nav";

export default function HomeRoute() {
  return (
    <div className="w-screen h-screen flex">
      <Nav />
      <ComponentLayout>
        <div className="font-bold text-[44px]">Title</div>
      </ComponentLayout>
    </div>
  );
}
