import { useSelector } from 'react-redux'

import Tarefa from '../Tarefas/Index'
import { Container } from './styles'

import { RootReducer } from '../../store/Index'

const ListaTarefas = () => {
  const { items } = useSelector((state: RootReducer) => state.tarefas)

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {items.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
              titulo={t.titulo}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaTarefas
