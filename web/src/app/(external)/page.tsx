"use client";

import { useEffect } from "react";

// Client-side redirect: a server redirect() cannot be statically exported for
// the root route (Next emits an error shell instead of index.html), which left
// the embedded dashboard iframe showing a broken-file icon. Navigating from the
// client exports cleanly and keeps the root path working everywhere.
export default function Home() {
  useEffect(() => {
    window.location.replace("/function/tasks/");
  }, []);
  return null;
}
