function FindEmailDomain(address) {
  const lastAtIndex = address.lastIndexOf("@");

  return address.slice(lastAtIndex + 1, address.length);
}

console.log(FindEmailDomain("prttyandsimple@example.com"));
