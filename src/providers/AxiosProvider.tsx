"use client";

import React, { createContext, useContext, useMemo } from "react";
import axios, { AxiosInstance } from "axios";

const AxiosContext = createContext<AxiosInstance | null>(null);

interface AxiosProviderProps {
  children: React.ReactNode;
}

export function AxiosProvider({ children }: AxiosProviderProps) {
  const axiosInstance = useMemo(() => {
    // Standard adapter fallback
    const defaultAdapter = axios.defaults.adapter;

    const customAdapter: any = async (config: any) => {
      const url = config.url || "";
      
      // Mock the wishlist count endpoint
      if (url.endsWith("/web/total/wishlist")) {
        return {
          data: { success: true, data: { total: 428 } },
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        };
      }

      // Mock the send OTP endpoint
      if (url.endsWith("/web/wishlist/send-otp")) {
        return {
          data: { success: true, message: "OTP sent successfully" },
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        };
      }

      // Mock the verify OTP endpoint
      if (url.endsWith("/web/wishlist/verify-otp")) {
        return {
          data: { success: true, message: "OTP verified successfully" },
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        };
      }

      // Fallback to default xhr/http adapter
      if (typeof defaultAdapter === "function") {
        return (defaultAdapter as any)(config);
      }
      if (Array.isArray(defaultAdapter)) {
        // Axios can have an array of adapters (e.g. ['xhr', 'http'])
        for (const adapter of defaultAdapter) {
          try {
            if (typeof adapter === "function") {
              return (adapter as any)(config);
            }
          } catch (e) {
            // Try next adapter
          }
        }
      }

      // Fallback fetch adapter if Axios defaults are not populated
      const response = await fetch((config.baseURL || "") + url, {
        method: config.method?.toUpperCase() || "GET",
        headers: config.headers as any,
        body: config.data ? JSON.stringify(config.data) : undefined,
      });
      const data = await response.json();
      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: {},
        config,
      };
    };

    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "https://backend.openmarket.co.in/api/v1",
      headers: {
        "Content-Type": "application/json",
      },
      adapter: customAdapter,
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
