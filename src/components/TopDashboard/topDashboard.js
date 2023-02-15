import Image from 'next/image'
import React, { useState } from 'react'
import styles from './TopDashboard.module.css'

export default function TopDashboard({ name }) {
  const admin = (name.user).replace(/['"]+/g, '')
  return (
    <div className={styles.top}>
        <p className={styles.welcome}>Bonjour, <b>{admin}</b> !</p>
        <Image 
        src="/image/6263.jpg" 
        alt="people reading books"
        width={500}
        height={300}
        />
    </div>
  )
}
