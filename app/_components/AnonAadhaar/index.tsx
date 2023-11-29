"use client";

import {
  LogInWithAnonAadhaar,
  LogInWithAnonAadhaarV2,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";
import { useEffect } from "react";

export default function AnonAadhar() {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar);
  }, [anonAadhaar]);

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-5 mt-20">
        <div className="bg-gray-600 rounded-xl px-4 py-6 space-y-5 flex flex-col justify-center items-center">
          <h2 className="text-lg">Login with Certificate and Adhaar pdf</h2>
          <LogInWithAnonAadhaar />
        </div>
        <div className="bg-gray-600 rounded-xl px-4 py-6 space-y-5 flex flex-col justify-center items-center">
          <h2 className="text-lg">Login with Certificate and Adhaar pdf</h2>
          <LogInWithAnonAadhaarV2 />
        </div>
        <p>{anonAadhaar?.status}</p>
      </div>
      <div className="my-7 ">
        {anonAadhaar?.status === "logged-in" && (
          <div className="text-center space-y-4 bg-slate-800 p-5 rounded-xl w-[65vw] my-5">
            <h2 className="text-xl">🔐 Proof</h2>
            <p className="break-words">
              {JSON.stringify(anonAadhaar?.pcd, null, 10)}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
