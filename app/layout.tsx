export const metadata = {
  title: 'Metropolitana Px Demo',
  description: 'Demo executiva da Metropolitana'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          background: '#f4efe8',
          color: '#1f1f1f',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
