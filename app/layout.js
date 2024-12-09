import './globals.css'; // Import Tailwind or global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} {/* The content of the page */}
      </body>
    </html>
  );
}
