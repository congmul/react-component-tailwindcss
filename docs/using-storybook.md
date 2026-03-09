## Running Storybook locally

This project uses Storybook to document and preview components. The dev server runs on port 6006 by default.

Basic steps

1. Install dependencies (one time):

```bash
npm install
```

2. Start Storybook dev server:

```bash
npm run storybook
```

3. Open the UI in your browser:

http://localhost:6006

Tips and troubleshooting

- If port 6006 is already in use, run Storybook on a different port:

```bash
npx storybook dev -p 7007
```

- Storybook uses the `@storybook/react-vite` builder. If you change Storybook builder or upgrade Storybook, verify the builder's peer deps.

- To produce a static Storybook site for publishing:

```bash
npm run build
# static output will be in the directory configured by Storybook (usually `storybook-static`)
```

- Common warnings:
  - `punycode` deprecation: non-blocking.
  - SVG prop name warnings (e.g., `stroke-width` vs `strokeWidth`): fix the icon component props to use camelCase.

If you'd like, I can add a small `example/` app or a GitHub Actions workflow to build and publish Storybook to GitHub Pages or Azure Static Web Apps.
