import type {Config} from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    darkMode: 'class',
    theme: {
        // colors: {
            // primary: defaultTheme.colors.green
        //     primary: colors.blue,
        //     transparent: 'transparent',
        //     current: 'currentColor',
        //     neutral: colors.neutral,
        //     black: colors.black,
        //     white: colors.white,
        //     gray: colors.gray,
        //     green: colors.green,
        //     zinc: colors.zinc,
        //     lime: colors.lime,
        //     cyan: colors.cyan,
        //     teal: colors.teal,
        //     sky: colors.sky,
        //     blue: colors.blue,
        //     indigo: colors.indigo,
        //     amber: colors.amber,
        //     red: colors.red,
        //     pink: colors.pink
        // },
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}

