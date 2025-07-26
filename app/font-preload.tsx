export function FontPreload() {
  return (
    <>
      {/* Preload critical font weights */}
      <link
        rel="preload"
        href="/_next/static/media/geist-sans-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* Add font-display swap via CSS */}
      <style jsx global>{`
        @font-face {
          font-family: 'Geist Sans';
          font-display: swap;
        }
        @font-face {
          font-family: 'Geist Mono';
          font-display: swap;
        }
      `}</style>
    </>
  )
}