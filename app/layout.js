import "./globals.css";


export default function RootLayout({ children,
}
) {
  return (
    <html lang="en">
      <body className="p-10">
             {children}
      </body>
    </html>
  );
}
