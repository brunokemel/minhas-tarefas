import FiltroCard from '../../components/FiltroBarra'

import * as S from './styles'

const Barralateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
    </div>
    <S.Filtros>
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard />
      <FiltroCard active />
    </S.Filtros>
  </S.Aside>
)

export default Barralateral
