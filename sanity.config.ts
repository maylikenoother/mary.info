import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema"
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "yrv1mk2m",
    dataset: 'production',
    title: "My Personal Website",
    apiVersion: "2023-11-19",
    basePath: "/admin",
    plugins: [
        deskTool()
    ],
    schema: {types: schemas }
})

export default config;