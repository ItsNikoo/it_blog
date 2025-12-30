import js from "@eslint/js"
import tseslint from "typescript-eslint"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import nextPlugin from "@next/eslint-plugin-next"
import globals from "globals"

export default tseslint.config(
    // Базовые рекомендованные правила
    js.configs.recommended,
    ...tseslint.configs.recommended,

    // React
    {
        plugins: {
            react,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules, // для React 17+ (не нужен import React)
        },
    },

    // React Hooks
    {
        plugins: {
            "react-hooks": reactHooks,
        },
        rules: reactHooks.configs.recommended.rules,
    },

    // Next.js правила (core-web-vitals + recommended)
    {
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
        },
    },

    // Глобальные настройки
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },

    // Твои кастомные правила: УБИРАЕМ ТОЧКИ С ЗАПЯТОЙ
    {
        rules: {
            semi: ["error", "never"],
        },
    },

    // Игноры (как в eslint-config-next по умолчанию)
    {
        ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
    }
)