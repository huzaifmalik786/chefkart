import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/articles/article.module.scss'
import Reveal from '../Reveal'
import UseWindowDimensions from '../WindowSize'
import { image_type } from '../../interfaces/interfaces'

const content = {
	article_content:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nisi id tortor dapibus, sodales finibus neque suscipit. Sed sodales magna id tincidunt ultricies. Donec semper nunc a mauris mollis, sit amet facilisis lacus ullamcorper. Aenean eu justo viverra, pulvinar urna a, congue mauris. Nunc mauris odio, placerat id felis sit amet, tempus fringilla mi. Vestibulum at est ante. Praesent sodales dictum dolor ut cursus. Ut orci libero, pharetra non tristique a, aliquam eu magna.\nNunc laoreet ac quam sit amet rutrum. Donec convallis mollis ultrices. Donec ex orci, vulputate ultricies dapibus id, laoreet eu odio. Aliquam erat justo, iaculis egestas venenatis sit amet, malesuada sit amet nisl. Nulla ac elit a tortor commodo venenatis a eget leo. Fusce vel libero auctor, iaculis odio eu, blandit justo. Quisque pharetra purus quis est elementum finibus. Nam efficitur egestas tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\nPellentesque ultricies interdum congue. Integer auctor blandit dolor, id sodales velit scelerisque ut. Maecenas malesuada faucibus nunc, eu volutpat leo egestas tincidunt. Phasellus id nunc et felis rhoncus mattis ac sit amet neque. Nunc imperdiet egestas magna, vel volutpat massa convallis in. Aliquam mattis pretium purus ut congue.\nInteger nec purus feugiat ligula mattis malesuada nec ac dui. Vivamus faucibus lorem nec porttitor porta. Duis id sagittis augue. Nullam rhoncus enim tellus, nec vehicula tortor molestie et. Maecenas leo diam, efficitur a tortor vitae, convallis vehicula nibh. Integer commodo purus lorem, in semper tortor commodo ac. Nunc neque lacus, accumsan a orci a, commodo dictum justo. Curabitur scelerisque, dui sed cursus consectetur, odio orci tempor purus, a gravida lorem erat id turpis.\nPellentesque imperdiet, nulla et placerat malesuada, urna dolor feugiat sapien, at laoreet enim magna ac magna. Ut aliquam tristique ex, eu scelerisque enim convallis a. Vivamus vehicula vel lacus a bibendum. Aliquam dapibus sit amet ipsum sed faucibus. Cras nec tempus dui, a interdum urna. Quisque pretium laoreet mi,\neget varius turpis gravida ac. Morbi gravida imperdiet facilisis. Cras congue, ligula nec faucibus suscipit, turpis mauris egestas sem, in elementum est metus quis ante. Etiam iaculis sollicitudin lacinia. Etiam bibendum sapien lorem, et semper est ultrices non. Quisque quis elit in ex rhoncus sagittis eu non justo. Aliquam luctus tellus sapien, quis malesuada purus lobortis elementum. Mauris eget ipsum enim. Fusce vitae arcu eu lectus vestibulum tinciduntDonec eget mi consequat, fermentum ligula varius, rutrum lorem. Nunc eu auctor orci, at semper turpis.\nSuspendisse potenti. Nam sit amet fermentum lorem. Curabitur dignissim metus in felis pharetra aliquam. Curabitur finibus finibus odio nec aliquam. Aliquam aliquam consequat luctus. Fusce ullamcorper facilisis tristique. In erat erat, finibus vel dapibus quis, suscipit tincidunt velit. Sed id vestibulum nunc. Nullam et porttitor est.",
};

type Props = {
    data: {
        subtitle: string;
        title: string;
        image: image_type,
        content: string;
        release_date: string;
        slug: string
    };
    social_icon: {
        heading: string;
        icons: {
            url: string;
            icon: image_type
        }[]

        like: image_type
    }
    // like: image_type
}

const icons_array = [
    {
        url: "#",
        icons: {
            data: {
                attributes: {
                    url: '/fb.png'
                }
            }
        }
    },
    {
        url: "#",
        icons: {
            data: {
                attributes: {
                    url: '/Vector (11).png'
                }
            }
        }
    },
    {
        url: "#",
        icons: {
            data: {
                attributes: {
                    url: '/Vector (12).png'
                }
            }
        }
    },
    {
        url: "#",
        icons: {
            data: {
                attributes: {
                    url: '/Vector (13).png'
                }
            }
        }
    },
    {
        url: "#",
        icons: {
            data: {
                attributes: {
                    url: '/Vector (14).png'
                }
            }
        }
    },
]
const Article = (props: Props) => {
    const {width}= UseWindowDimensions();

    function changeFormat(d: string){
        let date = new Date(d);
        let formatter = new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
        let newDate = formatter.format(date);
        return newDate
    }
    
  return (
    <div className={Styles.article_container}>
        <header>
            <div className={Styles.heading}>
                <h5>{props.data?.subtitle || "Lorum Ipsum"}</h5>
                <h1>{props.data?.title || "Love in the Time of Quarantine"}</h1>
            </div>

            <p>{changeFormat(props.data?.release_date) || "November 18, 2022"}</p>
        </header>

        <div className={Styles.article_image}>
            <Image src={props.data?.image?.data?.attributes?.url || '/Rectangle 153.png'} alt={props.data?.image?.data?.attributes?.alternativeText || 'no'} fill />
        </div>

        <div className={Styles.main}>
            <div className={Styles.social}>
                <span>{props.social_icon.heading || "Share"}</span>
				<div className={Styles.right}>
                    {/* <div className={Styles.fb}>
                        <Image src='/fb.png' alt='' fill />
                    </div>
                    <div className={Styles.twitter}>
                        <Image src='/Vector (11).png' alt='' fill />
                    </div>
                    <div className={Styles.linkedin}>
                        <Image src='/Vector (12).png' alt='' fill />
                    </div>
                    <div className={Styles.mail}>
                        <Image src='/Vector (13).png' alt='' fill />
                    </div>
                    <div className={Styles.link}>
                        <Image src='/Vector (14).png' alt='' fill />
                    </div> */}
                    {
                        icons_array.map((item, key)=>{
                            return(
                                <div key={key} className={Styles.fb} style={{ backgroundImage: `url("${item.icons.data.attributes.url}")`}}>
                                    {/* <Image src={item.icons.attributes.data.url} alt="" fill /> */}
                                </div>
                            )
                        })
                    }
                </div>
            
                <div className={Styles.left}>
                    <div className={Styles.fb_like}>
                        <Image src={props.social_icon?.like?.data?.attributes?.url || '/Facebook like.png'} alt='' fill />
                    </div>
                </div>
            </div>
            <article>
                {
                    (props.data?.content || content.article_content).split('\n').map((item, key)=>{
                        return(
                            <Reveal key={key}>
                            <p key={key}>{item}</p>
                            </Reveal>
                        )
                    })
                }
            </article>
        {/* </div> */}
    </div>
    </div>
  )
}

export default Article;
