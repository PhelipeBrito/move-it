import styles from '../styles/components/LoginBox.module.css'

export function LoginBox() {
    return(
        <div className={styles.loginBoxContainer}>
            <header>
                <img src="/img/logo.svg" />
            </header>

            <div>
                <h1>Bem vindo</h1>

                <div>
                    <img src="/icons/git.svg" />
                    <span>Faça login com seu github para começar</span>
                </div>

                <div>
                    <input />
                    <button>
                        <img src="/icons/login/button.svg" />
                    </button>
                </div>
            </div>
        </div>
    )
}