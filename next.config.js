/** @type {import('next').nextconfig} */
const nextconfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: [
      "content.jdmagicbox.com",
      "images1-fabric.practo.com",
      "drive.google.com",
    ],
  },
};

module.exports = nextconfig;
