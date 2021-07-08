import styles from '../styles/pages/dashboard.module.scss'

import Header from '../components/Header/index'
import NavMenu from '../components/NavMenu'
import ClientsTable from '../components/ClientsTable'
import CardAudio from '../components/CardAudio'

export default function Dashboard(){
  return(
    <>
      <Header/>
      <div className={styles.container}>
        
        <div className={styles.navbar}>
          <NavMenu/>

        </div>
        <div className={styles.infoContainer}>
          
        </div>
      </div>
    </>
  )
}