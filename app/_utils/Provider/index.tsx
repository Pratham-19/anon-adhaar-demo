// ("");
"use client";

import { AnonAadhaarProvider } from "anon-aadhaar-react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // Add the Country Identity Provider at the root of your app
    <AnonAadhaarProvider>{children}</AnonAadhaarProvider>
  );
};

export default Providers;
