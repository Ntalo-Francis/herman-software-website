import { siteConfig } from "@/data/site-config";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-card border border-gray-light">
      <iframe
        src={siteConfig.googleMapsEmbedUrl}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="HERMAN Software Solutions Location"
        className="block"
      />
    </div>
  );
}