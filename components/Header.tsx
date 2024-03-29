import IconTerminal from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/terminal-2.tsx"

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Write-Ups", href: "/write-ups" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div class="bg-white w-full max-w-screen py-6 px-8 flex flex-col md:flex-row gap-4 mx-auto">
      <div class="flex items-center flex-1">
        <IconTerminal size={30} />
        <div class="text-3xl  ml-1 font-bold">
          FreezingKas
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}