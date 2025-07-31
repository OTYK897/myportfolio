import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen max-w-[1980px] mx-auto w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
