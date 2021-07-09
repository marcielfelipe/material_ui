import styles from '../styles/pages/dashboard.module.scss'
import {colors} from '@material-ui/core/'
import Header from '../components/Header/index'
import NavMenu from '../components/NavMenu'
import ClientsTable from '../components/ClientsTable'
import CardDashboard from '../components/Card'


export default function Dashboard(){

  return(
    <>
      <Header/>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <NavMenu/>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.totalReceived}>
          <CardDashboard title={'recebido'} value={'734,00'} isGreen />
          </div>
          <div className={styles.totalAReceive}>
          <CardDashboard title={'a receber'} value={'200,00'}isBlue/>
          </div>
          <div className={styles.totalLost}>
          <CardDashboard title={'em atrazo'} value={'100,00'}isRed/>
          </div>
          <div className={styles.totalClients}>
            <ClientsTable/>
          </div>
          <div className={styles.calendar}>
          </div>
        </div>
      </div>
    </>
  )
}