export interface FeatureImageProps {
  node: {
    id: string;
    sourceUrl: string;
    slug: string;
  };
}

export interface PostProps {
  id: string;
  link: string;
  title: string;
  slug: string;
  excerpt: string;
}

export interface CarouselPostDto extends PostProps {
  featuredImage: FeatureImageProps;
}

export interface DetailNewsDto extends PostProps {
  featuredImage: FeatureImageProps;
  content: string;
  date: any;
  modified: any;
  author: {
    node: {
      name: string;
    };
  };
}
