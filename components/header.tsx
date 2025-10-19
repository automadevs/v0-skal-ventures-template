import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  return (
    <div className="fixed z-50 pt-6 md:pt-8 top-0 left-0 w-full backdrop-blur-md border-b border-background bg-sidebar-primary">
      <header className="flex items-center justify-between container">
        <Link href="/">
          <Logo className="w-[100px] md:w-[120px] text-primary" />
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-8">
          {["Soluções", "Sobre", "ENTRE EM CONTATO"].map((item) => (
            <Link
              className="text-sm font-medium text-foreground/70 hover:text-primary duration-150 transition-colors ease-out"
              href={item === "ENTRE EM CONTATO" ? "https://wa.me/5538998056501" : `#${item.toLowerCase()}`}
              key={item}
              target={item === "ENTRE EM CONTATO" ? "_blank" : undefined}
              rel={item === "ENTRE EM CONTATO" ? "noopener noreferrer" : undefined}
            >
              {item}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}
