"use client";

import {
  LogInWithAnonAadhaar,
  LogInWithAnonAadhaarV2,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";
import { useEffect } from "react";

export default function Home() {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar);
  }, [anonAadhaar]);

  return (
    <main className="flex flex-col space-y-5 justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center space-y-2">
        <div className="bg-gray-600 rounded-xl px-4 py-6 space-y-5 flex flex-col justify-center items-center">
          <h2 className="text-lg">Login with Certificate and Adhaar pdf</h2>
          <LogInWithAnonAadhaar />
        </div>
        <div className="bg-gray-600 rounded-xl px-4 py-6 space-y-5 hover:cursor-pointer flex flex-col justify-center items-center">
          <h2 className="text-lg">Login with Adhaar pdf</h2>
          <LogInWithAnonAadhaarV2 />
        </div>
        <p>{anonAadhaar?.status}</p>
      </div>
      <div>
        {/* Render the proof if generated and valid */}
        {anonAadhaar?.status === "logged-in" && (
          <>
            <p>✅ Proof is valid</p>
            <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
          </>
        )}
      </div>
    </main>
  );
}
