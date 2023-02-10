import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import Header from "../../components/Header.tsx";
import Input from "../../islands/Input.tsx";
import {compareSync} from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import PopUp from "../../components/PopUp.tsx";
import MyHead from "../../components/MyHead.tsx";

export default function Admin(props: PageProps) {
  const result = props.data;
  return (
    <>
        <MyHead title="Admin"></MyHead>
      <Header active={""}></Header>
      <h1 class="text-4xl font-bold text-center my-8">Admin</h1>
      <PopUp alert={result}/>
      <div class="p-8 mx-auto max-w-screen-lg text-center items-center shadow-2xl rounded-xl">
        {/* File Upload */}
        <form class="flex flex-col items-center gap-4" action="/admin" method="post">
            <label class="text-xl font-bold">Upload File</label>
            <textarea name="file" id="file" class="block p-2.5 w-full h-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            <label class="text-xl font-bold">File Name</label>
            <Input type="filename" name="filename" id="filename" class="w-80" />
            <label class="text-xl font-bold">Password</label>
            <Input type="password" name="password" id="password" class="w-80" />
            <button class="bg-black text-white font-bold p-2 rounded-lg">Upload</button>
        </form>
      </div>
    </>
  );
}

export const handler : Handlers = {
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
        if(!passwordMatch){
            console.log("Password incorrect");
            return ctx.render(false);
        }

        // Get file and filename
        const file = form.get("file");
        const filename = form.get("filename");

        // Write string to file
        await Deno.writeTextFile("./files/"+filename, file as string);

        return ctx.render(true);
    }
}