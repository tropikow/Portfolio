"use client";

import Wave from "react-wavify";

export default function WaveBackground() {
  return (
    <div className="absolute bottom-0 w-full h-[75vh] -z-10">
      <Wave
        fill="#38bdf8"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.2,
          points: 5,
        }}
        className="w-full h-full opacity-20"
      />
    </div>
  );
}
