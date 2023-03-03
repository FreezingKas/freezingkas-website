import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-twitter.tsx";
import RootMe from "./Icons/RootMe.tsx";
import Icon3dCubeSphere from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/3d-cube-sphere.tsx"

export default function Socials() {
    const style_icon = "text-4xl text-gray-500 mx-2 group-hover:text-white transition ease-in-out delay-150 duration-500";
    const size_icon = 75;
    return (
        <div className="flex flex-row justify-center items-center gap-6">
            <Link href="https://github.com/FreezingKas"
                  children={<IconBrandGithub size={size_icon} class={style_icon}/>}/>
            <Link href={"https://twitter.com/FreezingKas"}
                  children={<IconBrandTwitter size={size_icon} class={style_icon}/>}/>
            <Link href={"https://root-me.org/FreezingKas"}
                  children={<RootMe size={size_icon} class={style_icon}/>}/>
            <Link href={"https://app.hackthebox.com/users/472492"} children={<Icon3dCubeSphere size={size_icon} class={style_icon}/>}/>
        </div>
    )
}

function Link({
                  href, children
              }: {
    href: string,
    children: any
}) {

    return (
        <div className="group">
            <a href={href} target="_blank" rel="noopener noreferrer"
               className="flex justify-center items-center w-32 h-32 rounded-full shadow-2xl group-hover:bg-black transition ease-in-out delay-150 duration-300 ">
                {children}
            </a>
        </div>
    )
}