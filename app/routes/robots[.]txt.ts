import { SITE_URL } from "~/lib/seo";

export function loader() {
  const robots = `User-agent: *
Allow: /
Disallow: /action/

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
