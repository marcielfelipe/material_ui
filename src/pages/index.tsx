import styles from '../styles/pages/index.module.scss'
import {TextField, Button} from '@material-ui/core'


export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo MfDev" className={styles.logo}/> 
      <form className={styles.form}> 
        <h2>Faça login</h2>
        <TextField 
          label="E-mail" 
          fullWidth
          className={styles.input}
        />
        <TextField 
          label="Senha" 
          fullWidth
          className={styles.input}
          type="password"
        />
        <Button variant="contained" color="primary" fullWidth  className={styles.button}>
          Login
        </Button>
      </form>
    </div>

  )
}
