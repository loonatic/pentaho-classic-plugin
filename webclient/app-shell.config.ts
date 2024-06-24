import type {HvAppShellConfig} from "@hitachivantara/app-shell-vite-plugin";

export default (): HvAppShellConfig => ({
    name: "uikit-test-plugin",

    baseUrl: "/",

    mainPanel: {
        maxWidth: "xl",
        views: [
            {
                bundle: "@self/pages/Welcome.js",
                route: "/welcome"}
        ]
    },

    menu: [
        {label: "key_welcome", target: "/welcome"}
    ],

    translations: {
        en: {
            key_welcome: "Welcome"
        },
        pt: {
            key_welcome: "Bem-Vindo"
        }
    }
});