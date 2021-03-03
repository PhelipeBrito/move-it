import styles from '../styles/components/LoginBox.module.css'

export function LoginBox() {
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
                    <button>
                        <img src="/icons/login-button.svg" />
                    </button>
                </div>
            </div>
        </div>
    )
}