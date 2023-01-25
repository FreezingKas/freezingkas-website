import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
    return (
      <input
        {...props}
        disabled={!IS_BROWSER || props.disabled}
        class={`px-3 py-2 bg-white rounded border-gray-500 border-2 ${
          props.class ?? ""
        }`}
      />
    );
  }