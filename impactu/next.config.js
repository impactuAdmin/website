module.exports = {
  reactStrictMode: true,
  distDir: '.next',
  images: {
    deviceSizes: [480, 768, 1080],
  },
  async redirects() {
    return [
      {
        source: '/Recrutamento',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
