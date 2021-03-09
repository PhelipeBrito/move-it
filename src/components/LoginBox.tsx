import styles from '../styles/components/LoginBox.module.css'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export function LoginBox() {
    const router = useRouter();

    return(
        <div className={styles.loginBoxContainer}>
            <header>
                <img src="/img/logo.svg" />
            </header>

            <div>
                <h1>Bem vindo</h1>

                <div className={styles.gitBox}>
                    <img src="/icons/git.svg" />
                    <span>Faça login com seu Github <br /> para começar</span>
                </div>

                <div className={styles.inputBox}>
                    <input type="text" placeholder="Digite seu username" />
                    <NextLink 
                        
                        href="/home/PhelipeBrito"
                    >
                    <a onClick={() => router.push(`/home/PhelipeBrito`)}>
                        <img src="/icons/login-button.svg" />
                    </a>
                    </NextLink>
                </div>
            </div>
        </div>
    )
}