"use client";

import Snowfall from "react-snowfall";

function isChristmasSeason(): boolean {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate();
  // Del 1 de diciembre al 6 de enero
  return month === 12 || (month === 1 && day <= 6);
}

export default function SnowfallWrapper() {
  if (!isChristmasSeason()) return null;

  return (
    <Snowfall
      style={{ position: "fixed", zIndex: 9999 }}
      snowflakeCount={800}
      enable3DRotation
    />
  );
}
