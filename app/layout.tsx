"use client"
/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import { ReactNode } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-[var(--color-background-page)]">
        <Provider store={store}>
          {children}
            <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
        </Provider>
      </body>
    </html>
  );
}
