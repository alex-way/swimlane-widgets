# Swimlane Widgets Storybook

This repo is an extremely simple starter for a Swimlane Widgets Storybook.

:warning: Disclaimer: This was put together in a few hours and is not intended to be a production ready solution. It is intended to be a starting point for a more robust solution.

## Getting Started

```bash

pnpm i
pnpm start
```

Once the storybook server has started you should be able to access it at <http://localhost:6006>. You can also run `pnpm build-storybook` to build the storybook.

:warning: When performing a deployment of any of the widgets, you will need to add a `@1` to the end of the import statements. This is because the way swimlane handles imports within the widgets conflicts with standard development.

> For example:
>
> import { SwimlaneElement, css, html, svg } from "@swimlane/swimlane-element";
> import { directive } from "lit-html";
>
> Becomes:
>
> import { SwimlaneElement, css, html, svg } from "@swimlane/swimlane-element@1";
> import { directive } from "lit-html@1";

## Todo

- Deploy the storybook to GitHub Pages
- Proxy requests to the Swimlane API when running in a development environment
- Proxy/auto replace the swimlane-element and lit-element imports to the local versions
