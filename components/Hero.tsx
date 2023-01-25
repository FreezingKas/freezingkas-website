import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/external-link.tsx"

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 h-96 justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white mt-8 shadow-2xl"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.7),rgba(0, 0, 40, 0.7)), url('/hero-back.jpg');"
    >
    <h1 class="text-4xl inline-block font-bold">Cybersecurity Student</h1>
      <div class="text-center spece-y-1">
        
        <p class="text-xl max-w-lg text-blue-100">
          CTF Player | Developer | Student | Coffee Addict
        </p>
        <p class="text-xl max-w-lg text-blue-100">
            Bad Video Games Player
        </p>
        <p class="text-xl max-w-lg text-blue-100">
            MAK'HACK CTF Team Member
        </p>
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