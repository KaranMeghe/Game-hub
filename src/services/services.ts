/** @format */
import noImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp';

// "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
//"https://media.rawg.io/media/crop/600/400/games/562/562553814dd54e001a541e4ee83a591c.jpg"

// SET CROPPED IMG URL
export const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = 'media/';
  const index = url.indexOf(target);

  if (index === -1) return url;

  return url.slice(0, index + target.length) + 'crop/600/400/' + url.slice(index + target.length);
};
