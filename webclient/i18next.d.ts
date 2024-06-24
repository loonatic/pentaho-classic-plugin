import error from "../public/locales/en/error.json";
import welcome from "../public/locales/en/welcome.json";

import "i18next";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNs: "welcome";
        resources: {
            error: typeof error;
            welcome: typeof welcome;
        };
    }
}