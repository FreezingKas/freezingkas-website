import {Handlers, PageProps} from "https://deno.land/x/fresh@1.1.2/server.ts";
import Header from "../../components/Header.tsx";
import Input from "../../islands/Input.tsx";
import {compareSync} from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import {config} from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import PopUp from "../../components/PopUp.tsx";
import MyHead from "../../components/MyHead.tsx";

export default function Admin(props: PageProps) {
    const result = props.data;
    return (
        <>
            <MyHead title="Admin"></MyHead>
            <Header active={"/"}></Header>
            <h1 class="text-4xl font-bold text-center my-8">Admin</h1>
            <PopUp alert={result}/>
            <div class="p-8 mx-auto max-w-screen-lg text-center items-center shadow-2xl rounded-xl">
                {/* File Upload */}
                <form class="flex flex-col items-center gap-4" action="/admin" method="post"
                      encType="multipart/form-data">

                    <label className="text-xl font-bold">Markdown File</label>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-1/2 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#FFFAFA]
                                hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                    className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Markdown File only</p>
                            </div>
                            <input id="dropzone-file" name="file" type="file" className="hidden"/>
                        </label>
                    </div>
                    <label class="text-xl font-bold">Password</label>
                    <Input type="password" name="password" id="password" class="w-80"/>
                    <button class="bg-black text-white font-bold p-2 rounded-lg">Upload</button>
                </form>
            </div>
        </>
    );
}

export const handler: Handlers = {
    GET(req, ctx) {
        return ctx.render(null);
    },
    async POST(req, ctx) {
        // Get Form Data
        const form = await req.formData();

        // Get env variables
        const passwordHash = config().PASSWORD_HASH;

        //compare password and hash
        const password = form.get("password");
        const passwordMatch = compareSync(password as string, passwordHash);

        // If password is incorrect, return false
        if (!passwordMatch) {
            console.log("Password incorrect");
            return ctx.render(false);
        }

        // Get file and filename
        const file = form.get("file") as File;
        const filename = file.name;
        // check if it is a MD file
        if (!file.name.endsWith(".md")) {
            console.log("File is not a markdown file");
            return ctx.render(false);
        }


        const fileData = new Uint8Array(await file.arrayBuffer());
        // check if begin tags markdown file
        if (new TextDecoder().decode(fileData.slice(0, 3)) !== "---") {
            console.log("File does not have begin tags");
            return ctx.render(false);
        }

        // check if file already exists
        for (const entry of Deno.readDirSync("./files/")) {
            if (entry.isFile && entry.name === filename) {
                console.log("File already exists");
                return ctx.render(false);
            }
        }
        await Deno.writeFile("./files/" + filename, fileData)

        return ctx.render(true);
    }
}