import type { StorybookConfig } from "@storybook/react-vite";
import { GlobalWrapper } from "../src/decorators/GlobalWrapper";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/addon-docs",
        "@storybook/addon-a11y",
        "@storybook/addon-vitest",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};

export default config;
