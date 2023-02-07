export interface PriceCard {
  heading: string;
  subheading: string;
  price: string;
  features: {
    feature: string
  }[];
  // checkImg: string;
  button: {
    button_text: string
  }
}

export interface BlogCardType {
  attributes: {
  title: string;
  subtitle: string;
  image: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      }
    }
  }
  release_date: string;
  slug: string;
  category: string
}
}

export interface ProfileCardType {
  name: string;
  designation: string;
  image: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      }
    }
  }
  social_media: {
    url: string;
    icon: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
  }[]
}

export interface CultureCardType {
  text: string;
  image: image_type
}
export interface ReviewsCardType {
  review: string;
    name: string;
    video: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
}

export interface chefType {
  id: number;
  image: string;
  name: string;
  rating: number;
  experience: string;
  specialization: {
    feature: string;
  }[];
  
}

export interface blogType{
  image: image_type;
  heading: string;
  read_time: string;
  tag: string;
  id: number;
}

export interface features_icon{
  image: {
    data: {
        attributes: {
            url: string
            alternativeText: string;
        }
    }
  }
  text: string
}

export interface table_content{
  content: string;
  Popular: boolean;
  Premium: boolean;
}

export interface QUESTIONS{
  id: number;
  heading: string;
  description: string;
};

export interface investor_type{
  heading: string;
    description: string;
    name: string;
    designation: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        }
      }
    }
    company_logos: {
      data:{
        attributes: {
          url: string;
          alternativeText: string;

        }
      }[]
    }
}

export interface image_type{
  data: {
    attributes: {
      url: string;
      alternativeText: string;
    }
  }
}