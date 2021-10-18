import './Main.scss';
import item1 from './img/item1.png';

const Main = (props) => {

    let items = props.goods.map(item => {
        return (
            <div 
            className="ourBest_item"
            data-page="item"
            key={item.key}
            onClick={(e) => {
                    props.onClickHeader(e.currentTarget.getAttribute('data-page'));
                    props.goodItemFill({
                        name: item.name,
                        country: item.country,
                        price: item.price,
                        weight: item.weight,
                        key: item.key
                    });
                }}>
                <img src={item1} alt="" />
                <span className="ourBest_item_text">{item.name} {item.weight}</span>
                <span className="ourBest_item_text">{item.country}</span>
                <span className="ourBest_item_text">{item.price}</span>
            </div>
        );
    });

    return (
        <div className="main">
            <div className="content">
                <div className="about">
                    <h2 className="about_us">About Us</h2>
                    <div className="logo_beans black">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                            <g clipPath="url(#clip0)">
                            <path d="M9.38842 26.5504C8.03446 24.1621 8.95551 20.4168 11.7569 17.6151C14.9384 14.4341 19.3369 13.6759 21.5827 15.9214C21.585 15.9242 21.5878 15.9274 21.5912 15.9304C21.1418 17.2383 19.7102 20.0203 15.42 21.5246C11.4894 22.9031 9.9735 25.0955 9.38842 26.5504ZM20.2604 19.5906C19.2344 20.6175 17.776 21.6253 15.7102 22.3503C11.5176 23.8203 10.3463 26.2275 10.0194 27.3931C10.0352 27.409 10.048 27.4255 10.0629 27.4401C12.3084 29.6857 16.7075 28.9274 19.8882 25.7464C22.7187 22.9159 23.6292 19.1225 22.2142 16.7383C21.8736 17.5324 21.2812 18.5697 20.2604 19.5906ZM11.5846 9.24521C16.1138 9.64211 18.564 7.69641 19.5119 6.69018C19.5103 6.68619 19.5091 6.68168 19.5079 6.67806C18.387 3.70713 14.0663 2.586 9.85742 4.17405C6.15073 5.57275 3.76806 8.60593 4.0179 11.3398C5.15056 10.2555 7.43511 8.88224 11.5846 9.24521ZM13.9169 14.9334C17.6624 13.5206 20.0541 10.4387 19.7471 7.68311C19.1096 8.26655 18.1423 8.96808 16.7917 9.47782C15.4339 9.99006 13.6897 10.3081 11.5089 10.1171C7.08339 9.72906 5.02376 11.4401 4.24526 12.3682C4.25317 12.3889 4.25871 12.4091 4.26588 12.4285C5.38702 15.4002 9.70784 16.5218 13.9169 14.9334ZM27.0248 8.73791C29.7422 5.09208 29.3734 1.98481 29.015 0.649699C29.0109 0.649256 29.0068 0.647703 29.003 0.646816C25.8859 0.039928 22.6621 3.12782 21.8023 7.54314C21.0451 11.4328 22.3749 15.0529 24.8322 16.2767C24.5046 14.7432 24.5365 12.0782 27.0248 8.73791ZM29.9836 0.971332C30.1453 1.82059 30.2341 3.01211 29.9582 4.42863C29.6811 5.85357 29.0348 7.50469 27.7271 9.26029C25.0722 12.8223 25.446 15.4731 25.8269 16.623C25.8486 16.6275 25.869 16.6331 25.8891 16.6375C29.0065 17.2444 32.2299 14.157 33.0896 9.74126C33.8552 5.81187 32.4892 2.15716 29.9836 0.971332Z" fill="black"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_d" x="0" y="0" width="37.302" height="37.302" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            <clipPath id="clip0">
                            <rect width="29.302" height="29.302" fill="white" transform="translate(4)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="about_text">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                        <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.</p>
                    </div>
                </div>
                <div className="ourBest">
                    <h2 className="ourBest_title">Our Best</h2>
                    <div className="ourBest_row">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;