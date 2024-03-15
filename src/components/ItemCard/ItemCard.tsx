import React from 'react'
import item1 from '../../assets/img/item.png'
import styles from './styles.module.css'
import star from '../../assets/img/star.svg'
import { Organization } from '../../types'

const ItemCard = ({ name, rating, guestsAge, area, price }: Organization) => {
  return (
    <article>
      <figure className={styles.cardImg}>
        <img src={item1} alt="" />
        <div className={styles.shadow}></div>
      </figure>
      <div className={styles.description}>
        <h2 className={styles.tittle}>{name}</h2>
        <div className={styles.rating}>
          <img src={star} alt="star" />
          <span>{rating}</span>
        </div>

        <h4 className={styles.age}>{`${guestsAge} years`}</h4>
        <h4 className={styles.area}>{`${area} sq.m`}</h4>

        <h3 className={styles.price}>
          <span>{`$${price} `}</span>person
        </h3>
      </div>
    </article>
  )
}

export default ItemCard
