import type { Config } from "tailwindcss";
import { join } from "path";
import { skeleton } from "@skeletonlabs/tw-plugin";
import forms from "@tailwindcss/forms";

export default {
    darkMode: "class",
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}"),
    ],

    theme: {
        extend: {},
    },

    plugins: [
        require("@tailwindcss/typography"),
        skeleton({
            themes: { preset: ["gold-nouveau"] },
        }),
        forms,
    ],
} as Config;
