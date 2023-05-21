// Higher Order Functions: o que são
// é uma função que recebe uma outra como argumento, ou uma função que retorna outra função.


/* é uma função que recebe uma outra como argumento, 
ou uma função que retorna outra função. */

const lukeLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Luke logado com sucesso!"
  }
  
  const leiaLogin = () => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return "Leia logada com sucesso!"
  }
  
  console.log(lukeLogin())
  console.log(leiaLogin())
  console.log("\n\n\n\n")

  /* podemos melhorar esse código, logo vem à mente o conceito DRY, 
  don’t repeat yourself ou “Não se repita” em tradução livre. */

  // substituir o código anterior por apenas uma função 
  // que vai lidar com o login. Ao executá-la, passamos 
  // por parâmetro o nome de quem está logando:

  const usuarioLogin = (pessoa) => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return `${pessoa} logou com sucesso no sistema!`
  }
  
  console.log("====================================================================")
  console.log("============= conceito DRY,   don’t repeat yourself ================\n\n")
  console.log(usuarioLogin("Luke"))

  console.log("\n\n\n\============= Retornando uma função ================")

  const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin1 = (nome) => {
    let array = []
    for( i = 0; i < 90000; i++){
      array.push(i)
    }
    return acesso(nome)
  }
  
  console.log(usuarioLogin1("Luke"))


  /* Digamos que devido ao seu cargo, uma diretora teria um 
  tempo maior de login, o que seria possível incluindo 
  verificações no sistema para aumentar este período. Nesse 
  caso teríamos que duplicar nosso código, certo? */

  const acesso2 = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const usuarioLogin2 = (nome) => {
    let array = []
    for( i = 0; i < 90000; i++){
        array.push(i)
    }
    return acesso2(nome)
  }
  
  const diretoriaLogin = (nome) => {
    let array = []
    for( i = 0; i < 900000; i++){
        array.push(i)
    }
    return acesso2(nome)
  }
  
  console.log(diretoriaLogin("Leia"))

 /*  Mas imagine se tivermos que criar vários cargos, 
 teríamos que repetir o código diversas vezes? 
 Não exatamente. Uma boa resolução nessa situação seria 
 criar uma função genérica de autenticação: */

 console.log("\n\n\n")
 console.log("========================== higher order function ===============================")
 const acesso3 = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso3(pessoa.nome)
  }

  console.log(login({cargo: `diretoria`, nome: `Leia`}, autentica))

  console.log("higher order function - são funções que recebem uma função ou mais como argumento, retornando outra função")