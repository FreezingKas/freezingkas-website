import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/external-link.tsx"
import IconDeviceLaptop from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/device-laptop.tsx"
import IconDeviceGamepad from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/device-gamepad-2.tsx"
import IconCup from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/cup.tsx"
import IconFlag from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/flag.tsx"
import KubeIcon from "./Icons/Kube.tsx";

export default function Hero() {
    return (
        <div
            class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white mt-16 shadow-2xl"
            style="background-image:linear-gradient(rgba(0, 0, 40, 0.7),rgba(0, 0, 40, 0.7)), url('/hero-back.jpg');"
        >
            <h1 class="text-4xl inline-block font-bold">Cybersecurity Student</h1>
            <div class="text-center space-y-1">
                <div class="flex flex-row gap-2 items-center justify-center">
                    <IconDeviceLaptop/>
                    <p className="text-xl max-w-lg text-blue-100">
                        CTF Player | DevSecOps | ENSIBS
                    </p>
                </div>

                <div className="flex flex-row gap-2 items-center justify-center">
                    <KubeIcon size={30}/>
                    <p className="text-xl max-w-lg text-blue-100">
                        Kubernetes Lover
                    </p>
                </div>

                <div className="flex flex-row gap-2 items-center justify-center">
                    <IconFlag/>
                    <p className="text-xl max-w-lg text-blue-100">
                        MAK'HACK CTF Team Member
                    </p>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <IconCup/>
                    <p className="text-xl max-w-lg text-blue-100">
                        Coffee Addict
                    </p>
                </div>

            </div>

            <div>
                <a
                    href="https://makhack.fr"
                    class="block mt-4 gap-1 cursor-pointer inline-flex items-center group text-black bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
                >
                    MAK'HACK{" "} <IconExternalLink/>
                </a>

            </div>
        </div>
    );
}