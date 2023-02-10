import {Head} from "$fresh/src/runtime/head.ts";

export interface MyHeadProps {
    title: string;
}

export default function MyHead(props: MyHeadProps) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Welcome to the jungle !"></meta>
            <meta property="og:title" content="FreezingKas"></meta>
            <meta property="og:description" content="Welcome to the jungle !"></meta>
            <meta property="og:image" content="/hero-back.jpg"></meta>
            <meta property="og:url" content="/"></meta>
            <link rel="stylesheet" href="/main.css"/>
        </Head>
    )
}