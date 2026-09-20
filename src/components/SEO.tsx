import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  schemaJson?: object;
}

export function SEO({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
  schemaJson
}: SEOProps) {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes("MEXTECH")
      ? title
      : `${title} | MEXTECH Security System & IT Solutions`;
    document.title = formattedTitle;

    // 2. Meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", description);

    // 3. Open Graph Tags
    const ogTags: Record<string, string> = {
      "og:title": formattedTitle,
      "og:description": description,
      "og:type": ogType,
      "og:image": ogImage,
      "og:url": window.location.origin + canonicalPath
    };

    Object.entries(ogTags).forEach(([prop, val]) => {
      let meta = document.querySelector(`meta[property="${prop}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", prop);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", val);
    });

    // 4. Twitter tags
    const twitterTags: Record<string, string> = {
      "twitter:title": formattedTitle,
      "twitter:description": description,
      "twitter:image": ogImage
    };

    Object.entries(twitterTags).forEach(([name, val]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", val);
    });

    // 5. Optional JSON-LD Structured Data
    if (schemaJson) {
      let script = document.getElementById("page-schema-json");
      if (!script) {
        script = document.createElement("script");
        script.id = "page-schema-json";
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaJson);
    }
  }, [title, description, canonicalPath, ogType, ogImage, schemaJson]);

  return null;
}
