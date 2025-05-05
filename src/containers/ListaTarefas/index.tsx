import Tarefa from '../Tarefas/Index'
import { Container } from './styles'

const Tarefas = [
  {
    titulo: 'Estudar React',
    descricao: 'Estudar React e suas funcionalidades',
    prioridade: 'Alta',
    status: 'Pendente'
  },
  {
    titulo: 'Pagar a conta',
    descricao: 'Baixar o app e pagar a conta',
    prioridade: 'Urgente',
    status: 'concluida'
  },
  {
    titulo: 'Acquisição de produtos',
    descricao: 'Comprar produtos para o trabalho',
    prioridade: 'baixa',
    status: 'Pendente'
  }
]

const listaTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {Tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
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

export default listaTarefas
