import Image from 'next/image'
import React from 'react'
import styles from '../Dashboard/dashboard.module.css'

export default function TopDashboard() {
  return (
    <div className={styles.top}>
        <p>Bonjour, <b>Brigitte</b></p>
        <Image 
        src="/image/6263.jpg" 
        width={500}
        height={300}
        />
    </div>
  )
}
