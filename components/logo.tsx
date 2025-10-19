import type React from "react"
export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="flex items-center gap-2" {...(props as any)}>
      <img
        src="/images/design-mode/800%2B%20Programming%20%26%20Development%20Logos%20%28Community%29(1).png"
        alt="A Automa Logo"
        className="h-10 w-10 px-0 mx-0 my-0 py-0"
      />
      <span className="text-white font-bold text-lg leading-none py-0 px-0 my-0 mx-[-20px]">𝐀𝐔𝐓𝐎𝐌𝐀</span>
    </div>
  )
}
