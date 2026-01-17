import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  twitterHandle?: string;
}

const SEO = ({
  title = "magadh.studio | Frontend & Web Experience Studio",
  description = "We craft digital experiences that drive growth. Custom web development, UI/UX design, and digital strategy for ambitious brands. Based in India, working globally.",
  keywords = "web development, frontend development, UI/UX design, digital agency, web design, React, Next.js, TypeScript, web experience studio, digital transformation, website development India",
  image = "/og-image.png",
  url = "https://magadh.studio",
  type = "website",
  author = "magadh.studio",
  twitterHandle = "@magadhstudio",
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "magadh.studio",
    description: description,
    url: url,
    logo: `${url}/logo.png`,
    image: `${url}${image}`,
    telephone: "+91-XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://twitter.com/magadhstudio",
      "https://linkedin.com/company/magadhstudio",
      "https://github.com/magadhstudio",
    ],
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 25.6093,
        longitude: 85.1376,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom websites and web applications built with modern technologies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "User-centered design that converts",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Branding & Identity",
            description: "Strategic brand development that captures your essence",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Strategy",
            description: "Data-driven strategies to grow your digital presence",
          },
        },
      ],
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "magadh.studio",
    url: url,
    logo: `${url}/logo.png`,
    description: description,
    founder: {
      "@type": "Person",
      name: "magadh.studio Team",
    },
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 15,
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "magadh.studio",
    url: url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="magadh.studio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${image}`} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#141414" />
      <meta name="msapplication-TileColor" content="#141414" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-BR" />
      <meta name="geo.placename" content="Patna" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
    </Helmet>
  );
};

export default SEO;
