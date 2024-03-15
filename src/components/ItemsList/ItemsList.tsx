import React from 'react'
import styles from './styles.module.css'
import org from '../../mocks/organizations.json'
import ItemCard from '../ItemCard/ItemCard'

const ItemsList = () => {
  return (
    <main>
      <div className={styles.wrapper}>
        {org.map(item => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </main>
  )
}

export default ItemsList
