import { useRoutes } from 'react-router-dom';

import { routes } from '@router';

const App = () => {
  console.log(routes);

  const element = useRoutes(routes);

  return <div>{element}</div>;
};

export default App;
