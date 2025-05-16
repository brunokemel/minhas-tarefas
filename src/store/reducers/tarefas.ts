import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'
import ListaTarefas from '../../containers/ListaTarefas'

type TarefasState = {
  items: Tarefa[]
}

const initialState: TarefasState = {
  items: [
    {
      id: 1,
      descricao: 'Estudar Redux',
      prioridade: enums.Prioridade.URGENT,
      status: enums.Status.PENDENTE,
      titulo: 'Redux'
    },
    {
      id: 2,
      descricao: 'Estudar React',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'React'
    },
    {
      id: 3,
      descricao: 'Estudar TypeScript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'TypeScript'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.items.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.items[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
