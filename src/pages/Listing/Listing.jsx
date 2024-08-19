import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";
import "./listing.scss";

const Listing = ({ variant }) => {
  const companies = [
    { name: "Apple", postCount: 120, link: "https://www.apple.com" },
    { name: "Microsoft", postCount: 95, link: "https://www.microsoft.com" },
    { name: "Google", postCount: 150, link: "https://www.google.com" },
    { name: "Amazon", postCount: 80, link: "https://www.amazon.com" },
    { name: "Facebook", postCount: 60, link: "https://www.facebook.com" },
    { name: "Tesla", postCount: 45, link: "https://www.tesla.com" },
    { name: "Netflix", postCount: 30, link: "https://www.netflix.com" },
    { name: "Uber", postCount: 25, link: "https://www.uber.com" },
    { name: "Adobe", postCount: 40, link: "https://www.adobe.com" },
    { name: "Airbnb", postCount: 20, link: "https://www.airbnb.com" },
    { name: "Alibaba", postCount: 70, link: "https://www.alibaba.com" },
    { name: "AMD", postCount: 55, link: "https://www.amd.com" },
    { name: "Atlassian", postCount: 35, link: "https://www.atlassian.com" },
    { name: "Baidu", postCount: 25, link: "https://www.baidu.com" },
    { name: "Cisco", postCount: 85, link: "https://www.cisco.com" },
    { name: "Dell", postCount: 65, link: "https://www.dell.com" },
    { name: "Dropbox", postCount: 15, link: "https://www.dropbox.com" },
    { name: "eBay", postCount: 50, link: "https://www.ebay.com" },
    { name: "Electronic Arts", postCount: 30, link: "https://www.ea.com" },
    { name: "Expedia", postCount: 10, link: "https://www.expedia.com" },
    { name: "GitHub", postCount: 75, link: "https://www.github.com" },
    { name: "HP", postCount: 95, link: "https://www.hp.com" },
    { name: "IBM", postCount: 120, link: "https://www.ibm.com" },
    { name: "Intel", postCount: 110, link: "https://www.intel.com" },
    { name: "LinkedIn", postCount: 90, link: "https://www.linkedin.com" },
    { name: "Lyft", postCount: 25, link: "https://www.lyft.com" },
    { name: "NVIDIA", postCount: 80, link: "https://www.nvidia.com" },
    { name: "Oracle", postCount: 100, link: "https://www.oracle.com" },
    { name: "PayPal", postCount: 60, link: "https://www.paypal.com" },
    { name: "Qualcomm", postCount: 45, link: "https://www.qualcomm.com" },
    { name: "Salesforce", postCount: 70, link: "https://www.salesforce.com" },
    { name: "SAP", postCount: 65, link: "https://www.sap.com" },
    { name: "Slack", postCount: 35, link: "https://www.slack.com" },
    { name: "Snap", postCount: 20, link: "https://www.snap.com" },
    { name: "Spotify", postCount: 50, link: "https://www.spotify.com" },
    { name: "Square", postCount: 40, link: "https://www.squareup.com" },
    { name: "Stripe", postCount: 30, link: "https://www.stripe.com" },
    { name: "Tencent", postCount: 55, link: "https://www.tencent.com" },
    { name: "Twitter", postCount: 85, link: "https://www.twitter.com" },
    { name: "Uber", postCount: 25, link: "https://www.uber.com" },
    { name: "VMware", postCount: 15, link: "https://www.vmware.com" },
    { name: "WhatsApp", postCount: 10, link: "https://www.whatsapp.com" },
    { name: "Xiaomi", postCount: 50, link: "https://www.mi.com" },
    { name: "Yahoo", postCount: 60, link: "https://www.yahoo.com" },
    { name: "Yelp", postCount: 45, link: "https://www.yelp.com" },
    { name: "Zoom", postCount: 35, link: "https://www.zoom.us" },
    { name: "Zynga", postCount: 20, link: "https://www.zynga.com" },
    // more listing
  ];
  const regions = [
    {
      name: "Amsterdam",
      postCount: 75,
      link: "https://en.wikipedia.org/wiki/Amsterdam",
    },
    {
      name: "Athens",
      postCount: 65,
      link: "https://en.wikipedia.org/wiki/Athens",
    },
    {
      name: "Bangkok",
      postCount: 95,
      link: "https://en.wikipedia.org/wiki/Bangkok",
    },
    {
      name: "Barcelona",
      postCount: 85,
      link: "https://en.wikipedia.org/wiki/Barcelona",
    },
    {
      name: "Beijing",
      postCount: 110,
      link: "https://en.wikipedia.org/wiki/Beijing",
    },
    {
      name: "Berlin",
      postCount: 90,
      link: "https://en.wikipedia.org/wiki/Berlin",
    },
    {
      name: "Buenos Aires",
      postCount: 80,
      link: "https://en.wikipedia.org/wiki/Buenos_Aires",
    },
    {
      name: "Cairo",
      postCount: 105,
      link: "https://en.wikipedia.org/wiki/Cairo",
    },
    {
      name: "Cape Town",
      postCount: 50,
      link: "https://en.wikipedia.org/wiki/Cape_Town",
    },
    {
      name: "Chicago",
      postCount: 120,
      link: "https://en.wikipedia.org/wiki/Chicago",
    },
    {
      name: "Dubai",
      postCount: 70,
      link: "https://en.wikipedia.org/wiki/Dubai",
    },
    {
      name: "Dublin",
      postCount: 60,
      link: "https://en.wikipedia.org/wiki/Dublin",
    },
    {
      name: "Hong Kong",
      postCount: 100,
      link: "https://en.wikipedia.org/wiki/Hong_Kong",
    },
    {
      name: "Istanbul",
      postCount: 130,
      link: "https://en.wikipedia.org/wiki/Istanbul",
    },
    {
      name: "Jakarta",
      postCount: 115,
      link: "https://en.wikipedia.org/wiki/Jakarta",
    },
    {
      name: "Kyoto",
      postCount: 55,
      link: "https://en.wikipedia.org/wiki/Kyoto",
    },
    {
      name: "Lisbon",
      postCount: 65,
      link: "https://en.wikipedia.org/wiki/Lisbon",
    },
    {
      name: "London",
      postCount: 150,
      link: "https://en.wikipedia.org/wiki/London",
    },
    {
      name: "Los Angeles",
      postCount: 140,
      link: "https://en.wikipedia.org/wiki/Los_Angeles",
    },
    {
      name: "Madrid",
      postCount: 85,
      link: "https://en.wikipedia.org/wiki/Madrid",
    },
    {
      name: "Mexico City",
      postCount: 130,
      link: "https://en.wikipedia.org/wiki/Mexico_City",
    },
    {
      name: "Moscow",
      postCount: 125,
      link: "https://en.wikipedia.org/wiki/Moscow",
    },
    {
      name: "Mumbai",
      postCount: 115,
      link: "https://en.wikipedia.org/wiki/Mumbai",
    },
    {
      name: "New York",
      postCount: 160,
      link: "https://en.wikipedia.org/wiki/New_York_City",
    },
    {
      name: "Paris",
      postCount: 145,
      link: "https://en.wikipedia.org/wiki/Paris",
    },
    {
      name: "Rome",
      postCount: 135,
      link: "https://en.wikipedia.org/wiki/Rome",
    },
    {
      name: "San Francisco",
      postCount: 110,
      link: "https://en.wikipedia.org/wiki/San_Francisco",
    },
    {
      name: "Seoul",
      postCount: 125,
      link: "https://en.wikipedia.org/wiki/Seoul",
    },
    {
      name: "Sydney",
      postCount: 95,
      link: "https://en.wikipedia.org/wiki/Sydney",
    },
    {
      name: "Tokyo",
      postCount: 170,
      link: "https://en.wikipedia.org/wiki/Tokyo",
    },
  ];

  let listing = [];
  if (variant === "companies") listing = companies;
  if (variant === "regions") listing = regions;
  listing.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="listing-page">
      <Section className={"listing-heading-section"}>
        <h1>{variant}</h1>
      </Section>
      <Section className={"listing-section"}>
        <div className="company-grid">
          {listing.map((company) => (
            <div key={company.name} className="company-item">
              <Link href={company.link} target="_blank">
                {company.name} ({company.postCount} posts)
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Listing;
