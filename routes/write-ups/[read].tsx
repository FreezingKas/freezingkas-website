import {Handlers, PageProps} from "https://deno.land/x/fresh@1.1.2/server.ts";
    import {Marked} from "../../markdown/mod.ts";
import Header from "../../components/Header.tsx";
import MyHead from "../../components/MyHead.tsx";

export default function Read(props: PageProps) {
    const body = props.data;

    return (
        <>
            <MyHead title="Write-Ups"></MyHead>
            <Header active={"/write-ups"}></Header>
            <div
                data-color-mode="light"
                data-light-theme="light"
                data-dark-theme="dark"
                class="markdown-body max-w-screen-lg mx-auto p-4 my-8"
                dangerouslySetInnerHTML={{__html: body.content}}
            >
            </div>
        </>
    );
}

export const handler: Handlers = {
    async GET(req, ctx) {
        // get name param
        const read = ctx.params.read;

        // read file
        const decoder = new TextDecoder("utf-8");
        // handle file not found
        let markdown;
        try {
            markdown = decoder.decode(Deno.readFileSync(`./files/${read}.md`));
        } catch (e) {
            return ctx.renderNotFound();
        }

        // parse markdown
        const markup = Marked.parse(markdown);

        return ctx.render(markup);
    },
};
