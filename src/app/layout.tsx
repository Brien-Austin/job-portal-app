import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';

import { ReactQueryClientProvider } from "./components/providers/reactquery";
import {ColorSchemeScript, MantineProvider, mantineHtmlProps} from '@mantine/core'


import { Suspense } from "react";




export const metadata: Metadata = {
  title: "Job Application App",
  description: "A Job Searching Platform",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
    
    <html lang="en" {...mantineHtmlProps}>
      <head><ColorSchemeScript/></head>
      <body
      
      >
       <MantineProvider> 
        <Suspense >
        {children}
        </Suspense>
       </MantineProvider>
      </body>
    </html>

    </ReactQueryClientProvider>
  );
}
