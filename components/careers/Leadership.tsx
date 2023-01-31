import React from 'react'
import Styles from '../../styles/components/careers/leaders.module.scss'
import { ProfileCardType } from '../../interfaces/interfaces'
import ProfileCard from '../ProfileCard'

const leaders : ProfileCardType[] = [
    {
        image:{
            data: {
                attributes: {
                    url: '/leader1.png',
                    alternativeText: ""
                }
            }
        } ,
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        social_media: [
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/Vector (10).png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/twitter.png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
        ]
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Rectangle 126 (1).png',
                    alternativeText: ""
                }
            }
        } ,
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        social_media: [
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/Vector (10).png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/twitter.png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
        ]
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Rectangle 126 (2).png',
                    alternativeText: ""
                }
            }
        } ,
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        social_media: [
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/Vector (10).png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/twitter.png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
        ]
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Rectangle 126 (3).png',
                    alternativeText: ""
                }
            }
        } ,
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        social_media: [
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/Vector (10).png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/twitter.png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
        ]
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/leader1.png',
                    alternativeText: ""
                }
            }
        } ,
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        social_media: [
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/Vector (10).png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/twitter.png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
        ]
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Rectangle 126 (1).png',
                    alternativeText: ""
                }
            }
        } ,
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        social_media: [
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/Vector (10).png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/twitter.png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
        ]
    },
    {
        image:{
            data: {
                attributes: {
                    url: '/Rectangle 126 (2).png',
                    alternativeText: ""
                }
            }
        } ,
        name: 'Lorum Ipsum Dolor',
        designation: 'Lorum Ipsum Dolor',
        social_media: [
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/Vector (10).png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
            {
            url: "#",
            icon: {
              data: {
                attributes: {
                  url: "/twitter.png",
                  alternativeText: "linkedin"
                }
              }
            }
    
          },
        ]
    },
    
]
type Props={
    data: {
        heading: string;
        array: ProfileCardType[]
    }
}
const Leadership = (props: Props) => {
  return (
    <div className={Styles.leaders_containers}>
        <h2>{props.data.heading || "Leadership"}</h2>
        
        <div className={Styles.leader_grid}>
            {
                (props.data.array || leaders).map((leader, key)=>{
                    return(
                        <ProfileCard key={key} card={leader} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Leadership