import Barralateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaTarefas'
import EstiloGlobal, { Container } from './styles'

import store from './store/Index'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Barralateral />
        <ListaTarefas />
      </Container>
    </Provider>
  )
}

export default App
