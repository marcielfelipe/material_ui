import styles from '../styles/pages/dashboard.module.scss'

import Header from '../components/Header/index'
import NavMenu from '../components/NavMenu'
import ClientsTable from '../components/ClientsTable'
import CardAudio from '../components/CardAudio'
import Acord from '../components/Acord'

export default function Dashboard(){
  return(
    <>
      <Header/>
      <div className={styles.container}>
        <NavMenu/>
        <div className={styles.infoContainer}>
          <div className={styles.clientsTable}>
            <ClientsTable/>
          </div>
          <div className={styles.cardAudio}>
            <CardAudio/>
          </div>
          <div className={styles.acord}>
            <Acord/>
          </div>
        </div>
      </div>
    </>
  )
}