import Header from "../../components/Header.tsx";
import {Handlers, PageProps} from "$fresh/server.ts";
import {Marked} from "../../markdown/mod.ts";
import MyHead from "../../components/MyHead.tsx";

export default function Read(props: PageProps) {
    const writeUps = props.data;
    return (
        <>
            <MyHead title="Write-Ups"></MyHead>
            <Header active={"/write-ups"}></Header>
            <h1 class="text-4xl font-bold text-center my-8">Write-Ups</h1>
            <div class="p-4 mt-4 mx-auto max-w-screen-md justify-center flex flex-wrap">
                {writeUps.map((writeUp: WriteUp) => (
                    <a
                        href={`/write-ups/${writeUp.name}`}
                        class="text-black bg-[#FFFAFA] text-center font-bold w-64 h-64 flex flex-col items-center justify-center shadow-xl text-2xl p-4 text-center rounded-xl
                transform transition duration-500 hover:scale-110 hover:shadow-2xl m-4"
                    >
                        {writeUp.title}
                        <i>
                            {writeUp.tags.map((tag: string) => (
                                <span class="text-xs text-gray-500">#{tag}{" "}</span>
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

        // read all files in ./files
        for (const entry of Deno.readDirSync("./files/")) {
            // check if file is markdown
            if (entry.isFile && entry.name.endsWith(".md")) {
                const markdown = decoder.decode(
                    await Deno.readFile(`./files/${entry.name}`),
                );

                // parse
                const markup = await Marked.parse(markdown);

                // Create write-up object
                const wu: WriteUp = {
                    name: entry.name.replace(".md", ""),
                    title: markup.meta.title,
                    tags: markup.meta.tags,
                    publish_date: markup.meta.publish_date,
                    authors: markup.meta.authors,
                };

                // check integrity if all fields are present
                if (wu.name && wu.title && wu.tags && wu.publish_date && wu.authors) {
                    writeUps.push(wu);
                }
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
