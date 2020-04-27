// GoDaddy makes a lot of diffrent top-level domains available to its customers.
// A top-leel domain is one that goes directly after the last dot('.')in the domain name,
// for example .com in example.com.  To help users chosose from available domains
// GoDaddy is introducing a new feature that shows the type of the cohose top-level domain. You have to implement this feature.
// To begin with, you want to write a function that lables the domain as 'commercial', 'organization', 'network',or 'information' for .com, .org, .net, .info,

/// EXAMPLE:
//  for domain =['en.wiki.org','codefights.com','happy.net','code.info'] the output should be
//// domainTypes(domains) =['organization','commercial','network','information']

function domainTypes(domains) {
  const domainType = [];

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split(".");
    // console.log(domain);
    const lastDomain = domain[domain.length - 1];
    // console.log(lastDomain)

    if (lastDomain === "org") {
      domainType.push("organization");
    } else if (lastDomain === "com") {
      domainType.push("commercial");
    } else if (lastDomain === "net") {
      domainType.push("network");
    } else if (lastDomain === "info") {
      domainType.push("information");
    }
  }
  return domainType;
}

console.log(
  domainTypes(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
);
