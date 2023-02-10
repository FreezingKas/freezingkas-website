import {Head} from "$fresh/src/runtime/head.ts";

export interface MyHeadProps {
    title: string;
}

export default function MyHead(props: MyHeadProps) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="MAK'HACK Member"></meta>
            <meta property="og:title" content="FreezingKas"></meta>
            <meta property="og:description" content="MAK'HACK Member"></meta>
            <meta property="og:image" content="/hero-back.jpg"></meta>
            <meta property="og:url" content="/"></meta>
            <meta name="twitter:card" content="summary_large_image"/>
            <link rel="stylesheet" href="/main.css"/>
        </Head>
    )
}