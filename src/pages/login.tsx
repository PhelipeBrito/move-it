import { LoginBox } from '../components/LoginBox'
import styles from '../styles/pages/Login.module.css'

export default function LoginHome() {
    return(
        <div className={styles.container}>
            <LoginBox />
        </div>
    )
}