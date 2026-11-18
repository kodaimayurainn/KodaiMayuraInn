import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { PAGES_SEO, PageSEO } from '../src/seo/seoData';

async function prerender() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found! Run "vite build" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');

  console.log(`Starting static prerendering for ${Object.keys(PAGES_SEO).length} routes...`);

  for (const [route, seo] of Object.entries(PAGES_SEO)) {
    console.log(`Prerendering ${route}...`);

    // Render React component tree to static markup
    const appHtml = renderToString(React.createElement(App, { initialPath: route }));

    // Inject route-specific metadata and pre-rendered markup
    let pageHtml = template;

    // Title
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/, `<title>${seo.title}</title>`);

    // Meta description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${seo.description}" />`
    );

    // Canonical link
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${seo.canonicalUrl}" />`
    );

    // OpenGraph
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${seo.ogTitle}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${seo.ogDescription}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${seo.canonicalUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:image" content="${seo.ogImage}" />`
    );

    // Twitter
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${seo.ogTitle}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${seo.ogDescription}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:image"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:image" content="${seo.ogImage}" />`
    );

    // JSON-LD structured data
    const schemaJson = JSON.stringify(seo.schema, null, 2);
    pageHtml = pageHtml.replace(
      /<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">\n${schemaJson}\n    </script>`
    );

    // Inject rendered React root HTML
    pageHtml = pageHtml.replace(
      /<div\s+id="root">\s*<\/div>/,
      `<div id="root">${appHtml}</div>`
    );

    // Write out the file
    let outPath: string;
    if (route === '/') {
      outPath = templatePath;
    } else {
      const cleanRoute = route.replace(/^\/|\/$/g, '');
      const routeDir = path.join(distDir, cleanRoute);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      outPath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(outPath, pageHtml, 'utf-8');
    const stats = fs.statSync(outPath);
    console.log(`✓ Generated ${path.relative(distDir, outPath)} (${(stats.size / 1024).toFixed(1)} KB)`);
  }

  console.log('\nAll static pages successfully prerendered!');
}

prerender().catch((err) => {
  console.error('Prerender error:', err);
  process.exit(1);
});
