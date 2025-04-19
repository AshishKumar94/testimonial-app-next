"use client";

import Image from "next/image";
import ProfileImage from "../img/profile-thumbnail.jpeg";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundColor: "#e6e6e6" }}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div
          className="rounded-lg box-shadow-1 px-6 py-6 bg-white"
          style={{ width: "340px", height: "234px" }}
        >
          <div className="flex mb-4" style={{ height: "48px", width: "100%" }}>
            <Image
              className="mb-4 h-full"
              src={ProfileImage}
              alt="profile image"
              width={48}
              height={48}
              priority
            />
            <div className="flex flex-col ml-4">
              <h2 className="text-[18px] font-semibold text-black text-ellipsis">
                Sarah Doles
              </h2>
              <h3
                className="text-[14px] font-normal"
                style={{ color: "#525252" }}
              >
                @sarahdole
              </h3>
            </div>
          </div>
          <text
            className="text-[16px] font-normal text-grey"
            style={{ color: "#525252" }}
          >
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </text>
        </div>
      </main>
    </div>
  );
}
