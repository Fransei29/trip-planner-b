/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Esta es la nueva opción para exportar estáticamente
  images: {
    unoptimized: true, // Si usas next/image, asegúrate de deshabilitar la optimización de imágenes
  },
};

module.exports = nextConfig;
