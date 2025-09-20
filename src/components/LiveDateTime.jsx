import React, { useEffect, useState } from "react";
import { format } from "date-fns";

export default function LiveDateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const datePart = format(now, "EEEE, MMMM d, yyyy");
  const timePart = format(now, "hh:mm:ss a");

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-2 text-xl  mt-5 font-semibold">
      {/* Date */}
      <span className="text-[var(--color-primary)] text-center md:text-left">
        {datePart},
      </span>

      <span className="flex items-center justify-center gap-1 text-[var(--color-secondary)] md:hidden">
        {timePart}
        <span className="text-[var(--color-accent)] font-bold">(Live)</span>
      </span>

      <span className="hidden md:inline text-[var(--color-secondary)]">
        {timePart}
      </span>

      <span className="hidden md:inline text-[var(--color-accent)] font-bold">
        (Live)
      </span>
    </div>
  );
}
