"use client";

export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow effect behind phone */}
      <div className="absolute inset-0 bg-gradient-to-br from-munch-red/20 to-munch-red-light/20 rounded-[3rem] blur-2xl scale-110" />

      {/* Phone frame */}
      <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-munch-dark rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-munch-cream rounded-[2.4rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-2">
            <span className="text-xs font-semibold text-munch-dark">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-munch-dark/30 rounded-sm" />
              <div className="w-4 h-2 bg-munch-dark/30 rounded-sm" />
              <div className="w-6 h-3 bg-munch-green rounded-sm" />
            </div>
          </div>

          {/* App content */}
          <div className="px-5 pt-2">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-munch-gray">Good morning</p>
                <p className="text-sm font-bold text-munch-dark">
                  What&apos;s for lunch? 🍽️
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-munch-red to-munch-red-dark" />
            </div>

            {/* Search bar */}
            <div className="bg-munch-warm rounded-xl px-4 py-2.5 mb-4">
              <p className="text-xs text-munch-gray">
                Search meals, cuisines...
              </p>
            </div>

            {/* Categories */}
            <div className="flex gap-2 mb-4">
              {["🍕 Pizza", "🍜 Asian", "🥗 Healthy"].map((cat) => (
                <div
                  key={cat}
                  className="px-3 py-1.5 rounded-full bg-munch-red/10 text-xs font-medium text-munch-red"
                >
                  {cat}
                </div>
              ))}
            </div>

            {/* Recommendation card */}
            <div className="bg-gradient-to-br from-munch-red to-munch-red-dark rounded-2xl p-4 mb-3">
              <p className="text-white/70 text-xs mb-1">Recommended for you</p>
              <p className="text-white font-bold text-sm mb-2">
                Spicy Miso Ramen Bowl
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-300 text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-white/60 text-xs">4.9</span>
              </div>
            </div>

            {/* Second card */}
            <div className="bg-gradient-to-br from-munch-green to-munch-green-dark rounded-2xl p-4">
              <p className="text-white/70 text-xs mb-1">Trending near you</p>
              <p className="text-white font-bold text-sm mb-2">
                Mediterranean Bowl
              </p>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-yellow-300 text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-white/60 text-xs">4.8</span>
              </div>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-3 px-4 bg-white border-t border-black/[0.08]">
            <div className="w-6 h-6 rounded-lg bg-munch-red/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-munch-red" />
            </div>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
            <div className="w-10 h-10 rounded-full bg-munch-red flex items-center justify-center -mt-4 shadow-lg shadow-munch-red/30">
              <span className="text-white text-lg">+</span>
            </div>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
