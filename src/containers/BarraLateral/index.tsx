import FiltroCard from '../../components/FiltroBarra'

import * as S from './styles'

const Barralateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
    </div>
    <S.Filtros>
      <FiltroCard legenda="pendentes" contador={9} />
      <FiltroCard legenda="consluídas" contador={3} />
      <FiltroCard legenda="urgentes" contador={3} />
      <FiltroCard legenda="importantes" contador={2} />
      <FiltroCard legenda="normal" contador={6} />
      <FiltroCard legenda="todas" contador={2} />
    </S.Filtros>
  </S.Aside>
)

export default Barralateral
