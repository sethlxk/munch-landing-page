"use client";

import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Subtle shadow behind phone */}
      <div className="absolute inset-0 bg-munch-dark/10 rounded-[3rem] blur-2xl scale-105 translate-y-4" />

      {/* Phone frame */}
      <div className="relative w-[260px] sm:w-[300px] h-[540px] sm:h-[570px] bg-munch-dark rounded-[3rem] p-3 shadow-2xl">
        {/* Screen with imported image */}
        <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-white">
          <Image
            src="/home.png"
            alt="Munch app screenshot"
            style={{ objectFit: "contain" }}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
}
