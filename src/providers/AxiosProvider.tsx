"use client";

import React, { createContext, useContext, useMemo } from "react";
import axios, { AxiosInstance } from "axios";

const AxiosContext = createContext<AxiosInstance | null>(null);

interface AxiosProviderProps {
  children: React.ReactNode;
}

export function AxiosProvider({ children }: AxiosProviderProps) {
  const axiosInstance = useMemo(() => {
    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "/api/v1/open-market",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
}

export function useAxios() {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
}
