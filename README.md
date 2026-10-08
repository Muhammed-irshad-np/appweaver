# AppWeavers Labs

Website for **AppWeavers Labs**, an AI product lab in Kochi, India building agentic AI, physical AI and AI-native mobile and web apps. Makers of [ReadyDM](https://www.readydm.com).

Udyam Registration No. **UDYAM-KL-02-0104042** · contact@appweavers.in

## Develop

```sh
npm i
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
```

Built with Vite, React, TypeScript and Tailwind CSS.

## Editing content

All company facts, products, research tracks and recognition entries live in `src/data/site.ts`.
To add a publication, grant, press mention or programme acceptance, append it to the `recognition`
array; it renders automatically as a backlink in the Recognition section.
