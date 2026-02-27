import { useEffect, useState } from 'react';
import './Photography.css';

const photos = [
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963841/IMG_4430_ykc7eh.heic', loc: 'Paris, France', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963840/IMG_5271_inc2jg.heic', loc: 'Montmartre, Paris', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963839/IMG_5506_obeji0.heic', loc: 'Eiffel Tower, Paris', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963839/IMG_5419_tjcvau.heic', loc: 'Jardin des Tuileries, Paris', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963841/IMG_4714_r6ltis.heic', loc: 'Notre-Dame Cathedral, Paris', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963840/IMG_4804_qv8n6j.heic', loc: 'Paris, France', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963839/IMG_5361_jpxu89.heic', loc: 'Paris, France', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963839/IMG_5192_rahvfy.heic', loc: 'Paris, France', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765963839/IMG_5145_fiiz2o.heic', loc: 'Arc de Triomphe, Paris', date: 'March 2025' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954649/IMG_0846_t8d23u.heic', loc: 'Tokyo, Japan', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954652/IMG_0482_svs8vc.heic', loc: 'Tokyo, Japan', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954651/IMG_1002_szjm3u.heic', loc: 'Osaka, Japan', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954651/IMG_0493_wpmeil.heic', loc: 'Kabukicho, Shinjuku', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954650/IMG_1012_rwnger.heic', loc: 'Osaka, Japan', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954650/IMG_1022_hamz6c.heic', loc: 'Osaka, Japan', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954648/IMG_1880_ae5ler.heic', loc: 'Asakusa, Tokyo', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954648/IMG_1093_uhazzm.heic', loc: 'Osaka Castle, Osaka', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954648/IMG_1593_iy262h.heic', loc: 'Kinkaku-ji, Kyoto', date: 'Sep 2024' },
  { url: 'https://res.cloudinary.com/dp67k01qy/image/upload/f_auto,q_auto/v1765954648/IMG_1286_oiapzo.heic', loc: 'Kyoto, Japan', date: 'Sep 2024' }
];

// Automatically injects a resize parameter (w_600) into your Cloudinary URL
const getThumbUrl = (url) => url.replace('/upload/', '/upload/c_scale,w_600/');

export default function Photography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction) => {
    setImageOpacity(0.5);
    setCurrentIndex((prev) => (prev + direction + photos.length) % photos.length);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    const rect = e.target.getBoundingClientRect();
    const isLeft = (e.clientX - rect.left) < (rect.width * 0.4);
    navigateLightbox(isLeft ? -1 : 1);
  };

  const activePhoto = photos[currentIndex];

  return (
    <div className="photography-wrapper">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="grid-item" 
            onClick={() => openLightbox(index)}
          >
            <img 
              src={getThumbUrl(photo.url)} /* Loads the lightweight 600px version */
              alt={photo.loc} 
              loading={index < 4 ? "eager" : "lazy"} 
              fetchPriority={index < 4 ? "high" : "auto"}
              decoding="async" /* Prevents scroll stuttering */
              style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
              onLoad={(e) => e.target.style.opacity = 1}
            />
            <div className="grid-caption">
              <span className="grid-location">{photo.loc}</span>
              <span className="grid-date">{photo.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div 
        className={`lightbox ${lightboxOpen ? 'active' : ''}`} 
        onClick={() => setLightboxOpen(false)}
      >
        <button className="lightbox-close">&times;</button>
        
        {activePhoto && (
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              className="lightbox-img" 
              src={activePhoto.url} /* Loads the massive, full-res original */
              alt={activePhoto.loc} 
              decoding="async"
              style={{ opacity: imageOpacity }}
              onLoad={() => setImageOpacity(1)}
              onClick={handleImageClick}
            />
            <div className="lightbox-caption">
              <div className="lightbox-loc">{activePhoto.loc}</div>
              <div className="lightbox-date">{activePhoto.date}</div>
              <div className="lightbox-hint">Use arrow keys or click sides to navigate</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}