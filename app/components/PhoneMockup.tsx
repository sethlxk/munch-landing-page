"use client";

export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Subtle shadow behind phone */}
      <div className="absolute inset-0 bg-munch-dark/10 rounded-[3rem] blur-2xl scale-105 translate-y-4" />

      {/* Phone frame */}
      <div className="relative w-[260px] sm:w-[300px] h-[540px] sm:h-[620px] bg-munch-dark rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.4rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1">
            <span className="text-[10px] font-semibold text-munch-dark">9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-3 h-2 bg-munch-dark/30 rounded-sm" />
              <div className="w-3 h-2 bg-munch-dark/30 rounded-sm" />
              <div className="w-5 h-2.5 bg-munch-green rounded-sm" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-5 pt-1 pb-3">
            <span className="text-base font-extrabold text-munch-red tracking-tight">munch</span>
            <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
              <span className="text-[8px] text-gray-400">🔔</span>
            </div>
          </div>

          {/* Feed content */}
          <div className="px-4 space-y-3 overflow-hidden">
            {/* Post 1 */}
            <div className="border-t border-gray-100 pt-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-300 to-orange-500" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-munch-dark">Derrick</span>
                      <span className="text-[8px] text-munch-green font-semibold">60% match</span>
                    </div>
                    <span className="text-[7px] text-gray-400">16 hours ago</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-munch-green flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">6.4</span>
                </div>
              </div>
              <p className="text-[11px] font-bold text-munch-dark mb-2">Pizza Hut</p>
              <div className="flex gap-1.5 mb-2">
                <div className="w-[30%] h-14 rounded-lg bg-gradient-to-br from-yellow-200 to-orange-300" />
                <div className="w-[30%] h-14 rounded-lg bg-gradient-to-br from-orange-200 to-red-300" />
                <div className="w-[30%] h-14 rounded-lg bg-gradient-to-br from-yellow-300 to-orange-400" />
              </div>
              <p className="text-[8px] text-munch-gray leading-relaxed">
                Decent overall. The pizza was fine but nothing special—good enough for a casual meal.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-[8px] text-gray-400">♡ 2</span>
                <span className="text-[8px] text-gray-400">💬</span>
                <span className="text-[8px] text-gray-400">↗</span>
                <div className="ml-auto">
                  <span className="text-[7px] px-2 py-0.5 rounded-full bg-amber-700 text-white font-semibold">Munch It!</span>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="border-t border-gray-100 pt-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-300 to-blue-500" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] font-bold text-munch-dark">Sarah</span>
                      <span className="text-[8px] text-munch-green font-semibold">40% match</span>
                    </div>
                    <span className="text-[7px] text-gray-400">Yesterday</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-munch-red flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white">10.0</span>
                </div>
              </div>
              <p className="text-[11px] font-bold text-munch-dark mb-2">The Carpenter Bar</p>
              <div className="flex gap-1.5">
                <div className="w-[30%] h-14 rounded-lg bg-gradient-to-br from-orange-200 to-yellow-300" />
                <div className="w-[30%] h-14 rounded-lg bg-gradient-to-br from-amber-200 to-orange-300" />
                <div className="w-[30%] h-14 rounded-lg bg-gradient-to-br from-green-200 to-emerald-300" />
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-2.5 px-6 bg-white border-t border-gray-100">
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-4 h-4 rounded-sm bg-munch-red/80" />
              <span className="text-[6px] font-semibold text-munch-red">Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-4 h-4 rounded-full bg-gray-300" />
              <span className="text-[6px] text-gray-400">Search</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="w-4 h-4 rounded-full bg-gray-300" />
              <span className="text-[6px] text-gray-400">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
