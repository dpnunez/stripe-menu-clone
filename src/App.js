import React, { Fragment } from 'react';
import { PageContainer,  Menu} from './components'

import GlobalStyles from './styles/globalStyles'

const App = () => {

  return (
    <Fragment>
      <PageContainer>
        <Menu />
      </PageContainer>

      {/* Estilos gloabais da aplicação */}
      <GlobalStyles />
    </Fragment>
  );
}


export default App;
