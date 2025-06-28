
export interface GalleryImageType {
  id: number;
  url: string;
  alt: string;
  caption?: string;
  favorite?: boolean;
  aspectRatio?: "portrait" | "landscape" | "square";
  size?: "small" | "medium" | "large";
}
