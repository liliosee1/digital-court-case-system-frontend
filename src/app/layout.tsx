import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {ThemeToggle} from '@/components/layout/ThemeToggle';
import './globals.css';

const inter=localFont({src:'./fonts/InterVariable.woff2',weight:'100 900',display:'swap',variable:'--font-inter'});

export const metadata:Metadata={
  title:'DCCS | Gasabo Primary Court',
  description:'Digital Court Case Tracking and Scheduling System',
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
