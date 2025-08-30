export const metadata = { title: "Fantasy Survivor", description: "Survivor side game" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", padding: "20px" }}>
        {children}
      </body>
    </html>
  );
}
