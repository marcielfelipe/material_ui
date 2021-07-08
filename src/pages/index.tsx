import styles from '../styles/pages/index.module.scss'
import {TextField, Button} from '@material-ui/core'
import useStylesUI from '../styles/pages/index'

export default function Home() {
  const styleUi = useStylesUI()
  return (
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo MfDev" className={styles.logo}/> 
      <form className={styles.form}> 
        <h2>Faça login</h2>
        <TextField 
          label="E-mail" 
          variant="outlined"
          fullWidth
          className={styleUi.input} 
          type="email"
        />
        <TextField 
          label="Senha" 
          variant="outlined"
          fullWidth
          className={styleUi.input} 
          type="password"
        />
        <Button variant="contained" color="primary" fullWidth  className={styles.button}>
          Login
        </Button>
      </form>
    </div>

  )
}
