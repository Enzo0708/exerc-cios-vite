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
import ClienteGastos from './components/exc4';
import ProdutosMaisCaros from './components/exc5';

function App(){
  return(
    <>
      <Header />
      <Exercicio1 />
      <Exercicio2 />
      // exercício 4
      <ClienteGastos />
      // exercício 5
      <div>
      <h2>Produtos Mais Caros que R$ 1500</h2>
      <ProdutosMaisCaros />
  </div>
    </>
  )
}

export default App;