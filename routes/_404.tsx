import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { UnknownPageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import Header from "../components/Header.tsx";

export default function NotFoundPage({ url } : UnknownPageProps) {
    return (
        <>
            <Head>
                <title>404 Not Found</title>
            </Head>
            <Header active={""}></Header>
            <div class="p-4 mx-auto max-w-screen-md">
                <h1 class="text-4xl font-bold text-center my-8">Lost in Control</h1>
                <h2 className="text-2xl font-bold text-center my-8"> {url} does not exist</h2>
            </div>
        </>
    );
}