"use client";

import React, { createContext, useContext, useState } from "react";
import { PhoneOTPModal } from "@/components/shared/PhoneOTPModal";

interface OtpModalContextType {
  openOtpModal: (phone?: string) => void;
  closeOtpModal: () => void;
}

const OtpModalContext = createContext<OtpModalContextType | null>(null);

export function OtpModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPhone, setInitialPhone] = useState("");

  const openOtpModal = (phone?: string) => {
    setInitialPhone(phone || "");
    setIsOpen(true);
  };

  const closeOtpModal = () => {
    setIsOpen(false);
    setInitialPhone("");
  };

  return (
    <OtpModalContext.Provider value={{ openOtpModal, closeOtpModal }}>
      {children}
      {isOpen && (
        <PhoneOTPModal isOpen={isOpen} onClose={closeOtpModal} initialPhone={initialPhone} />
      )}
    </OtpModalContext.Provider>
  );
}

export function useOtpModal() {
  const context = useContext(OtpModalContext);
  if (!context) {
    throw new Error("useOtpModal must be used within an OtpModalProvider");
  }
  return context;
}
