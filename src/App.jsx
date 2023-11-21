// import Header from './components/Header';

// function App(){
//   return(
//     <>
//       <Header />
//     </>
//   )
// }

// export default App;

import Exercicio1 from './components/exc1';
import Exercicio2 from './components/exc2';
import Header from './components/exc3';
import ClienteComponent from './components/exc4';
import Produtos from './components/exc5';

function App(){
  return(
    <>
      <Header />
      <Exercicio1 />
      <Exercicio2 />
      // exercício 4
      <ClienteComponent {...luana} />
      <ClienteComponent {...mario} />
      // exercício 5
      <div>
      <h2>Produtos Mais Caros que R$ 1500</h2>
      <Produtos produtos={produtos} />
  </div>
    </>
  )
}

export default App;