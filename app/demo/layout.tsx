export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container mx-auto wrapper flex flex-col min-h-screen px-3">
      <header className="min-h-[100px] flex justify-between items-center">
        <a href="#" className="text-lg font-semibold text-red-800">Evil Bank</a>
        <nav>
          <ul className="flex gap-7">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Business</a></li>
            <li><a href="#" className="hover:underline">Contacts</a></li>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="min-h-[100px] flex items-center">
        EBank deals with your life. All rights reserved©
      </footer>
    </div>
  )
}
