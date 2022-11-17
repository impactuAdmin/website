module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    deviceSizes: [480, 768, 1080],
  },
  async redirects() {
    return [
      {
        source: '/recrutamento',
        destination: '/',
        permanent: true,
      },
    ]
  }
}
