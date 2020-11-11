import { useRouter } from 'next/router';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { UserIcon } from '../../components/user-icon';
import { RoundedButton } from '../../components/rounded-button';
import { UpvoteItem } from '../../components/upvote-item';
import { ActivityCard } from '../../components/activity-card';

import { AiFillHeart } from 'react-icons/ai';

import styles from '../../styles/Activity.module.css';

const Activity = () => {
    const act = { id: 1, title: "Cooking salads", date: "November 9, 2020", image: "https://source.unsplash.com/uQs1802D0CQ",
        country: "Ukraine", city: "Zhytomyr", location: "Ukraine, Zhytomyr",
        host: { firstname: "Ivan", lastname: "Tsiupa", fullname: "Ivan Tsiupa", profileLink: "/profile/1",
        icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"} };
    const router = useRouter();
    const { activityId } = router.query;

    return (
        <div className="page">
            <Header isLoggedIn={false} isHost={false} />
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2>Outside * Tours | Ivan Tsiupa | Ukraine, Zhytomyr</h2>
                        <ul>
                            <li><UserIcon image={"https://www.theglobeandmail.com/resizer/a1tsouRgbsPGVK8OvdFYJqxNhEo=/4415x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/5HSZVXDII5BRRHH4S6KE4WZ7RE.jpg"}/></li>
                            <li><UserIcon image={"https://api.time.com/wp-content/uploads/2017/12/rose-mcgowan-person-of-year-2017-time-magazine-2.jpg"}/></li>
                            <li><UserIcon image={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUVFRUVFhUVFRUVFRUVFRUXFhYVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFy0dHR8tLS0rLS0tKy0tKy0tLS0tKy0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLf/AABEIAPYAzQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAADAQIEBQAGBwj/xAA/EAABAwEGAwUFBwQBAwUAAAABAAIRAwQFEiExQVFhcQYigZGhEzKxwfAHFEJSYtHhI3KC8bKSosIIFTNDY//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgIDAAIDAAAAAAAAAAABAhEDMRIhQRNxIlFh/9oADAMBAAIRAxEAPwDmYCPTCG0IzFjWsYQkIT0kJArUQBNa1ECSocwJyxqdClRIWYU4JUj0EAigIb6gGaAbdwCcxtK5SJRYkwqP98frlHRCfePT65J+NT5xMwrCFXm8z+XylSaVtYeXVHjS8oNCaQiFNISMFwQ4RyE3CgAwlRC1JgQZqSEXCswJGC9qEVLLUEhAMYiAJrQnK9o0cEoCRoTwEHooT2hNAT2hTauQ4NTsKxZVfAS7Pr2FXtAblEuOgHz4BRa9pOk57wNOSR5iT58T+w/lZZLCXd9+mwjLy3WkkjK25BDEcxod8vTkoz7Xhybmdzr5FWVsok9OB18QolWhAGpPLI/wPJPZXFDNof4/RyTiXEe96/BObZ9ScvhHAcU14jb6+tk9l40I9fiT65JW1tpB6lCc12wjwTMLjr6z6JpsWVmtxZkZI+tFcU3BwkZgrVWiN1a3Pbcyw9VOWP08br0t/ZpMKMwg6JC1ZNdAQlwIuBOAQIC5qQJ7gmNagzHNQ3BHLU3AgAYVkJSUoVkwBOakWNKRjBOCG0p7VNOHoRY5zo4acOfXfySvqQRnHHjByy9VBbbZJjeQBMQ0ZTy3V4z1tGeW7oWpTxuwj3RAJO/Lx18FJpW6SQ0CNBO22m6y5rO6piyMCdtTH15q7odmXOgDu8f3Syyka4cVs2qS6Mok7jIR5/XJCk7Buev0ZjqtpsvYkl0uqmMts8sldWfsvQZsXHmVPm0/E5nVsLnnJpP10zRqVy1BnGfSIC6W6xsbkGgBRqtIHYI860nBi5466XccvFRKl3kbZcVvVroidFV2qzomVLLijT69iVbUGF0FbXXpKhvuz6ELTHJycmCRdtuc3J0kc/kr9kEAgyCtNY8kDlp028tPELYriryMJ6joUs8fqML8WMJYT0pCy220juCwNT3MSQjY0Y5qYU9xQyU4SKVgWArAc1ZHJCslOAQZzSnBNDU8JBBtGIuJHIDllmYSWWzavdmScvDbxMeHVLTp6mdScjyykKwsVMOqUhqMQHrMnrkfBa31GOPvJvFw3a2lRYI70STvJzM+itaLc0NhyClUomVy33XoyagwMIdatGykUmynVrPyCNKlm/amq1+QQKj5RrU0AnL1UWnBO4Q09INobmoVr0V1Us44lVlqoCM002NftIzVTelKWlXNqafBQ6zJHgrjkzntq9KnDTO0+v8ApWNzvPtG+P18VFrMiW81YXFSmoCNm5+P+1rlfTlk/lpsQalDU4JVyurQZahuajEJjgqiaiuCGQjvQCriKhpzU1gRAFQIGojUgTgkZzQnEJGqbd1m9pUayYBOZ4ACT6BBSbulDTPvTrJbnyIJ9JVhdJd7amSI70xGxJj4eivL3uSnUpe1sv4ScQgjEW5Tn8VQ2Wq+lUxObiEkyJJZOL8O+qvy8oPx3DKbdPZxTDbGNzc7ITl+6hWC+rO9pPtaZgSYeDECTI1yUK0vfVZLA1jTmC8Oc5wO+AEQOp8Fh4uu5f0PaO3FJhMNcc42j0KbR7eMeYwOjlB9JVPVupsf1KrAeApj5lVD7tGKadVhI2LCD5h3yVTSL5N5ZeVOp7s57HIrGGCtVu69MJiszCBq9pxNb/dkCOsRzWyvtTAJDgRGvFKxrjlsa01RE8FT2y20xqc+XzOypr77QBsgZ/utWq2ypU2OfMD4Sqxx2z5ObXqL613rTkifmPMJlKs12hBVGygSc2DxcfTuqVZu4ZwEDiIcPTP0V6jn8st+0e3iKh5QfNWXZlshzugHqVT260A1DnlA8VsnZ+mBRncmen1r4oz9Ypwm81iAshOASlc7cN6Ynu5JqcTUaqEAqRVzQ8KuIqE0JVkLCFRFanAJrSitQZzArfs2wOrtafxNqDzY5VICn3LULa9N3B7fUwfilelY+spW8XWwNoNAboBPDPLNa1Rukm0OL/d2HiQI9PCFtttu0PbTBJAdEx/CgXm3DVaM/dn1MKZbHRnMcrKpu09x0XUy/wBm0Pc+kHPAwuc11VjSHEagjLNWV8scxpwieHVSrVQ9rSfSDoLmENdrhdBwujkYPgmi3Nr05jC4d2ow+9TqAd5jht10IgjIpW3R6/k1GrcbnsxE43hwJY9xaxwAMiRsqe7rncwEvIDhpBGs8GkgcF0WhZwRnCi1rAJhoknkqmd1orw43LyUt2WQAvqvMsDXB0iMQjORpGqpLF2atX3VlQ2ksDmhzaeGYacxiOuY8ls152cvIsrTIMGueDJ9zqdPPgVZW33I2iEb0rHimf6jjFUvLjiJLgSOOhVj7KowNiQSfytLcMayZOKZEcuaNeVkDbQf1GR/cNvrmrqxTEBxHitbk5Px3dm9Kt7XhoxgZxnEZ8CFIoqRaLOTmc00UoE/7UbVcdKBtmxVXZ5Az4a/utwu+lhpgnfPpwCo7HRBxHdwPkdFsrGw0DgAEuS/C48dQgKaVhSBZLrEJwRJSgJpqK4JiO9uaYWK4mq1oRcKVrUQhPZaADE9qcnU2o2eihqPZzBB4EHyKa1qIxqi1WnRjahgYN2quv539Zn9qNdNfHSY4QcgHTxblKDetE42SdQfinHRfh9kdn4I1tuijWOJzRjAjG0ljwNhjaQY5TCiUnQfJWVCoiDaorXBWA/p2uq3l3Xx4ubPqo9C4apP9S2VnDcNwMkdWtlbTaqgAnZape18nGKdPVxjL1KVmmuPv2sqVip0hgpiBrrJJ0lxOZPMpatMFpWMe2JLs8kpqtDTnmmvdjQO0liBcZGXwjcKBZaNYD+nVa4cHtn1C2G/3tK1c2gU6jcJycJ6EK5vTm5JPNY4LV+L2Q5hp+EqPUoEmXvLo/D7rfIa+JVrRr4mqFXOaInkmobZmZg8T8CrV1RVllaZbw/k/sFPwqM+0ToQaJcKRifKkzIWArJzSuQmh1QhohKGWq4iorQsclTCUBgRGobUZiVVBGBGaExjUVgUKWN13k6jIAkHbgeIVvar1bWFIgRgxNI5nNa2FKsQiTzH7Jyrxt6XeLvdQB5KSyooLM81LYVUqqhXxbyGwOfms7NXWWzWqDvkZA/hb+6Srg9pLvdZ3jO52/dTaN8U8wM5T0LlZNId8dnhVOL2jmtnNgJAPlnCrr3aaLAwSTGUEnwzWwm8mxqB4gZKjvKq2pVHebAj0VehvK/Gl2z2hkOkT5qqtNA68NFtl9VqOLJw8FTF7CdQqjDOWVKsLu6FlQ5p9gbkRsCY6FNqiEoeV3IPYgZHIEqdCZYGAMB3OqMVll2qdE0SpWhOwpAOEsJYWJpobghORXoRVRNRAckgCa0p4TI5oRWhCajMWdXBWhFamNRGJKPUyzDuH60IKrbTamUxie4NHqeg3W0WO6z9yo2sThquxEHZjv8A4zyBAJ/yCqY3WzxzxmWr9DsTgQpdNpCrKAwuI21HT6hT6VXyTWhXtZsTmsjLfmpFn7M0AyS3vHMn4I9QYiIU3FAhMpfe1K/s7Sz+OIj5qhtnZ5knvuEfr+C2y1ZjrsFQWuzGN5Tlafk/xqtuuBjfxOPUyo1nuxrcwM1dWymSd8lFwZKt1z56t6WNlogUwdyoNsOaltqQwdFDpsL3ho3PkNz5JRNvrS0szO43oPXNEDUfAlDFltYQYlwqQGpjggAOakc1GLUKoU4motQphRXBR3lUmoTCjBqSmxFhOlCNai000BOaVFXBmhOrVWsaXO0A+gm0yqC+rw9o7C33G+p4p4YeVTyZ+EAsllqW62UqGc1XgH9NMZujoJXqCndtN9D2Jb3MOGBlDYyjhGUdFwT7JGN/9ypk/kqAf9q9F0mwuzXxxS3tyLtHdT6Ly05uZuPxsOjh9aghQLPXyXWe01yC00+7AqNzYdjxY7kfRcgvGyPpucILXAw5rhEHgubLDVd/HyeU39W1nI0KlVKe/wBHYLVbPb3AgEaK2Zeex680tWdrmUvSc5ip7eSJARK14gaH65qnvC8hi94FGleWkS3vzlRXHKUOvbWu02Ud9fJVphlkK+0ZQrm4rLA9o4Zu05N/lRrFdEHFUIP6Rp4nforxijK/BjPpHBI0IsJgCzaFATXNTykBQDC3JR6rVKJUeqUy0hvGSB7MqW8ICuJqK0J4SNam1rQxnvOA5anyR2XXY8IVqrspiXHoNz0CrLTe5OTBHM6+A0CqKtWSSTJ3JOa0x4re2WXPJ0sLXejnggd1vqRzPyUEBNZmitat5jJ05ssrld1adkbwNC10qg2cAehyK9PWS1NewO4heTCYIcNs16A+ze/RXs7QTnACYjeyeCou0Vw07U2T3agHdeB6OG4VriLeiUHcZhKza5bLuOIX/ctSi8te3C4bjSOIO4VOapaQ1xjgdR/C7xfF00rSwtcOh/E08lyW/uz9SzvLKjZY491492duh5LHKXH9OnDKZ/5Wq25jxoqqrTOsrY6wgYHbaFU1pbCJSyxV9NmymWOhiqMYNXH0GqHSGq2TsrdxE13jXJgP5Rv4/sjupt8YpKvak0q1WlVpkhlR7Q5pE4Q44e6cjlG6t7Ff9mqaVQDwf3D66rT+2dEstlTg7C8eLRPqCqWFV45Wc5co6+ysDoQehBWYs1yBhjTLpkrCyX3aKfu1XRwccQ8nfJT+FX5nUQc0pC1K6u2DTlXbhP52yW+I1Hqtos9oY9uJjg5vFpBCwyxs7dGGUs9HPQXBEqFR3lKLCquQUVyYq2TU617POWKOTf3UJ1f/AGUIBLC7NSdPOtt7Y55OpQiiQmuCZJVJ2Q6BHa4KI0/AIzHIAx0W1fZvfvsK4puMNccuR4LUw5CDyCHAwRBlAj1pYq4ewFPdlotH+zftEK1BhJ/Sc5wubqw89xxBC39lMHNCkaQeR4hRbws+NpbUYHtOuUz1CtDZQm+xI3SNyjtL2VcZdQGIalk94dJ16armV5v9mS12UcciF6WvGwMILnQAASXaAAZkk8F5c7Z3997tb30yRSBwU4kEsaT33cSczyBCzuEazkt7XnZy7xUOKo04BnwxHYdFuDczkIAEBcwuLtJWsp7pFSmT3qb5I5lrtWn6grotz3zStTSaLocB36Toxt5j8zf1DxhVIjK2tJ+0ugBVpP8AzMc3/pdP/ktPaV0ft/YC+k0jMsLj4ECfgubhUk8pqcEhQliLZbU+mcVN7mniDE9eKEkQbaru7YOGVZocPzNyd4t0PhC2Wy2+lWE03h3EfiHUHMLmKfSquaQ5pIcMwRqFllxS9emuPNZ37dOeE1Qez16feKcmA9sBw48HDkfkVZ4Fz2auq65dzcc8hKQnlNIXc80whI8JxTXoBx08AnMKY4/JK0oCQ1MlIHJQIQGy9gL++62gNcf6dUhruTvwuHPbxXoq6bcHt1nLz5rye9do+zTtCatEAnvsyKFR1R7nbFC+9HdMs1pDxI13CfUaD4pBof229oDQux1Nhh1peKMjUMILqnmG4f8AJefLLQlpgE5cMh/pdU/9QFbv2WgMy0VKpH9xaxv/ABf5Lm1gcQ3Ce74d7OcteSnLpeGvqHVpmOR045FEsT3NIqMcWua6Q5uRB4hEtjQ0xigaCJAcdznvnmssre6Oc+hj5JYjJ0d1Y16FOo8CXNIdGQxDIkDacjHNcuvey+yrPZsDI6HMLqdkpYbPSaeBPi7P9lpnbixZtqgfpPyVpas1YVjEpCEmrEpCxAIsSpCgLHs7bvY12k+644Hf2uynwMHwXSCFyVdQuS0+1oU37loB/ub3T6hc/POq6uDLuNGcE1zUTEmldLjBKQpzwhkoMkEZjy4pzHg9eBSSlpsnPh9QgCDj5JyYXJwKAIVfdgr29haQCe6/I9dlQhDe4tII1BkeCBt6Ts9uLQHA/wAjgr9gFUBzTG3SdfFc47HXqLRZmmcwM+oW22SscOGSA4QYMHwOySmo3xcH3yvVttT3Gw2gP/zpd0HoSC7/ACWgds6FH24bSyAoNcS0wSajjAP9oHqu7Wii0UixogYYAGgEZLz9fFm/qVcYnC5zZzGENgQI33z5BTndRfH2paoaG90A90B2GJkmGwBv/CddYxsc2M6ZxAbw4mQR1+Kc8t7mGC4AyGgDLDmc+vog3PaA20UzORIYdcw7Ia84KnFef9Om04exjm6OEjll9BQb/uz2lJzeUjqpthaAIGkkxwJ1jkrB9OWq4yriQpwSDtkkqNV12nsJpVzlk4yPrzVTUCpICxYsSBFhWLCgGhdB7DPmzR+Wo4ecH5rno1W5dhLa1rarHGO81w8QQf8AiFlzTeLbhus1GwogzQaSkMC3c4L2oDlLeFGeEjMpMk8tyjE7DQJKDssO4z6hIUAiIEwJzUAVhSVGrGpZQTZ/s1vj2VY0icnZjruuyNMgELzfTqmm9tRurSD+4XeOy95itRa4HUBCo2X7xLM1wntNSBtVpcTBbVdEZAR3gTxOa7K6psuQdqLK02y0Ym/jaIDiJxMDsRjU7Dos8+mnHralrhppZRm0RpJflOmeKSZ2hU9WoAQW5OHLMEb+BCtKlNpDySMQc4F2h7pgadFAtDgWgch3d8W+Ws81OLS+p+3RrgvBtam17Y4OH5XjUdNxyKvqHBcjuG9/u9UPHuGA8cRx6jXzXWrM8OAcDIIBBGhBWkZWNT7d3fiZiAzbmtC1C7FfNmx0yOS5NaaGB7mcDl0OipFV7gkCLWahBIEcsSuSIAbdUalWc2YMShbpUGsrOFKplYsVIY49FFqBYsSCO4wZGykPzgjcSkWIMgWMKxYgCtKdosWIIKq1bx9l16OBdRMw2COhnL0KxYinHTxrK5f28pEW92ElpfSY8kHUAFuGP8ZnmkWLPPptxTecjWhTBBxAOIOEE/lAnzz1VfXpe9OZBd3pzy0+CxYs5Wsxm7P2jPEx4eoldE+zy3l9E0z/APWYB/S4SB4ZjyWLFpGOXTbazZauZdsbKGVg4b5fMfNKsWjOtcrDJR1ixBEKRYsQZrkiVYkb/9k="}/></li>
                            <li><UserIcon image={"https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTY0NTkzMjM0MDUwMjk1MzQ5/james_holzhauer_ad_04-08-19_sn7966_square.jpg"}/></li>
                            <div className={styles.likeButtons}>
                                <RoundedButton text={"17"} icon={<AiFillHeart />}/>
                                <RoundedButton text={"Add to favourite"}/>
                            </div>
                        </ul>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.image}>
                            <img src="https://source.unsplash.com/VFRTXGw1VjU" alt="rome" />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.mainDetails}>
                                <h3 className={styles.title}>Rome extended tour</h3>
                                <span className={styles.date}>November 8, 2020</span>
                            </div>
                            <div className={styles.description}>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nibh in risus iaculis tempus eu eget justo. 
                                    Fusce sit amet orci sodales, interdum mauris a, auctor sapien. Nulla a sapien ac ex tincidunt bibendum. 
                                    Ut porta vitae diam sit amet aliquet. Ut lobortis diam a orci accumsan vestibulum. Donec vitae sem convallis, 
                                    tincidunt nulla eu, interdum enim. Nunc mauris mi, sagittis at dui porta, tempor posuere tortor. 
                                    Maecenas fringilla erat ante, id pellentesque velit lobortis nec. Nunc cursus bibendum libero, in luctus 
                                    eros eleifend nec.
                                </span>
                            </div>
                            <div className={styles.tags}>
                                <ul>
                                    <li><RoundedButton text={"Tours"} link={"/tags/tours"}/></li>
                                    <li><RoundedButton text={"Europe"} link={"/tags/europe"}/></li>
                                    <li><RoundedButton text={"Italy"} link={"/tags/italy"}/></li>
                                    <li><RoundedButton text={"Excursion"} link={"/tags/excursion"}/></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.lastUpvotes}`}>
                            <div className={styles.header}>
                                <span className={styles.title}>Last User Votes</span>
                            </div>
                            <ul>
                                <li>
                                    <UpvoteItem />
                                </li>
                                <li>
                                    <UpvoteItem />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.similarActivities}>
                        <div header></div>
                        <ul className={styles.activitiesList}>
                            <li><ActivityCard activity={act}/></li>
                            <li><ActivityCard activity={act}/></li>
                            <li><ActivityCard activity={act}/></li>
                            <li><ActivityCard activity={act}/></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Activity;