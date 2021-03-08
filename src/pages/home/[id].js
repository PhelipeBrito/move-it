export default function Home({user}) {
    return(
        <div>{user}</div>
    )
}

export async function getStaticProps(context) {
    const user = await fetch(`https://api.github.com/users/defunkt`)
    .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            return respostaDoServer.json();
        }

        throw new Error('falha em pegar dados')
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
        console.log(err);
    })

    console.log(user);

    return {
      props: {user}, // will be passed to the page component as props
    }
  }
