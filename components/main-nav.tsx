import * as React from "react";
import Link from "next/link";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">
          UI Library Sandbox/Preview
        </span>
      </Link>
    </div>
  );
}
