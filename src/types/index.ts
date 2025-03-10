export type NavItemsType = {
  path: string;
  title: string;
};
export type FeatureCardProps = {
  iconSrc: string;
  title: string;
  description: string;
};
export type BlogCardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

export type PartnerType = {
  image: string;
  altText: string;
};

export type VisionMission = {
  title: string;
  content: string[];
  image: string;
};
export interface HowitWorksType {
  title: string;
  description: string[];
  image: string;
}
