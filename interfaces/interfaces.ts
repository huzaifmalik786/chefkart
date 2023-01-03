export interface PriceCard {
  heading: string;
  desc: string;
  price: number;
  points: string[];
  checkImg: string;
}

export interface BlogCardType {
  heading: string;
  subheading: string;
  img: string;
  date: string;
}

export interface ProfileCardType {
  image: string;
  name: string;
  designation: string;
  twitter_link: string;
  linkedin_link: string;
}

export interface CultureCardType {
  num: string;
  title: string;
  img: string;
  color: string;
}
export interface ReviewsCardType {
  quote: string;
  name: string;
  video: string;
  rev: boolean;
}
