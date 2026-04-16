/**
 * StructuredData — pre-computed JSON-LD LocalBusiness/WebSite/FAQ schema.
 * Generated at build time by the Lovable Builder assembler using research
 * and client data. Injected into the document head via layout.tsx.
 */
export default function StructuredData() {
  const json = "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"LocalBusiness\",\"@id\":\"https://napervillefreshmarket.com#business\",\"name\":\"Naperville Fresh Market\",\"url\":\"https://napervillefreshmarket.com\",\"telephone\":\"+16305551234\",\"email\":\"info@napervillefreshmarket.com\",\"priceRange\":\"$$\",\"currenciesAccepted\":\"USD\",\"paymentAccepted\":\"Cash, Credit Card, Check, Bank Transfer\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"Naperville, IL\",\"addressLocality\":\"Naperville, IL\",\"addressCountry\":\"US\"},\"areaServed\":[{\"@type\":\"City\",\"name\":\"Naperville, IL\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://napervillefreshmarket.com#website\",\"url\":\"https://napervillefreshmarket.com\",\"name\":\"Naperville Fresh Market\",\"publisher\":{\"@id\":\"https://napervillefreshmarket.com#business\"}}]}";
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
