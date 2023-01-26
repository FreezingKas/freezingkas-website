import { ErrorPageProps } from "$fresh/server.ts";
import {Head} from "$fresh/src/runtime/head.ts";
import Header from "../components/Header.tsx";

export default function Error500Page(props : ErrorPageProps) {
    return (
        <>
            <Head>
                <title>500 Internal Error</title>
            </Head>
            <Header active={""}></Header>
            <div class="p-4 mx-auto max-w-screen-md">
                <h1 class="text-4xl font-bold text-center my-8">500 Internal Error</h1>
                <h2 className="text-2xl font-bold text-center my-8">The developer behind this website is probably a complete moron</h2>
            </div>
        </>
    )
}