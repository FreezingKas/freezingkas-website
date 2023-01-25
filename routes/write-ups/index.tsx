import Header from "../../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

export default function Read(props: PageProps) {
  const writeUps = props.data;
  console.log(writeUps);
  return (
    <>
      <Head>
        <title>Write Ups</title>
      </Head>
      <Header active={"/write-ups"}></Header>
      <h1 class="text-4xl font-bold text-center my-8">Write-Ups</h1>
      <div class="p-4 mt-4 mx-auto max-w-screen-md justify-center flex flex-wrap">
        {writeUps.map((writeUp: any) => (
          <a
            href={`/write-ups/${writeUp.name}`}
            class="text-black text-center font-bold w-64 h-64 flex flex-col items-center justify-center bg-white shadow-xl text-2xl p-4 text-center rounded-xl
                transform transition duration-500 hover:scale-110 hover:shadow-2xl m-4"
          >
            {writeUp.title}
            <i>
              {writeUp.tags.map((tag: string) => (
                <span class="text-xs text-gray-500">#{tag} </span>
              ))} 
            </i>
          </a>
        ))}
      </div>
    </>
  );
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const decoder = new TextDecoder("utf-8");
    const writeUps: WriteUp[] = [];

    for (const entry of Deno.readDirSync("./files/")) {
      if (entry.isFile && entry.name.endsWith(".md")) {
        var markdown = decoder.decode(
          await Deno.readFile(`./files/${entry.name}`),
        );

        var markup = await Marked.parse(markdown);

        const wu: WriteUp = {
            name: entry.name.replace(".md", ""),
            title: markup.meta.title,
            tags: markup.meta.tags,
            publish_date: markup.meta.publish_date,
            authors: markup.meta.authors,
        };

        writeUps.push(wu);
      }
    }
    return ctx.render(writeUps);
  },
};

interface WriteUp {
  name: string;
  title: string;
  tags: string[];
  publish_date: string;
  authors: string[];
}
