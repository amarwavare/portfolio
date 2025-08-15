import styles from '@styles/common.module.scss'
import React from 'react'

interface IProps {
  number: string;
  title: string
}

function LeftContent(props: IProps) {
  return (
    <div className={styles.leftContent}>
        <div className={styles.leftNumber}>{props?.number}</div>
        <br /><br /><br />
        <div className={styles.leftVerticleLine} />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <div className={styles.leftTitleVerticle}>{props?.title}</div>
    </div>
  )
}

export default LeftContent