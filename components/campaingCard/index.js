import React, { useContext } from "react";
import style from "../../styles/Cards.module.css";
import {LocalizationContext} from "../../context/localizationContext";
import { texts } from "../../utils/texts";

const Card = props => {
    const {
        data
    } = props;
    const langContext = useContext(LocalizationContext);
    return(
        <div className={style.cardWrapper}>
            <div className={style.imgWrapper}>
                <img src={data.image_url} className={style.img}/>
                <div className={style.textWrapper}>
                    <div className={style.name}>{data.name}</div>
                    <div className={style.region}>{data.region}</div>
                </div>
            </div>
            <div className={style.infoWrapper}>
                <div className={style.priceHead}>{texts[langContext]["PRICING"]}</div>
                <div>
                    {Object.keys(data.price).map(item => {
                        return(
                            <div className={style.priceWrap}>
                                <span className={style.priceInfo}>{item}</span>
                                <span className={style.priceItem}>{data.price[item]}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Card;