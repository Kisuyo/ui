import { useState } from "react";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState<string>("");
  return (
    <div className="p-4 pl-0 h-screen w-[70%]">
      <div className="bg-gray-100 text-[18px] drop-shadow-md font-bold p-2 text-black/60 w-full flex items-center justify-evenly gap-2 rounded-2xl h-[54px]">
        {["component", "code", "usage", "examples"].map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`${
              currentPage === page ? "text-black bg-gray-200" : "text-black/60"
            } hover:text-black w-[160px] transition-all duration-300 h-full rounded-lg`}
          >
            {page}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
