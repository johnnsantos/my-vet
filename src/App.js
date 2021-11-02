import { BrowserRouter } from "react-router-dom";
import Routes from './routes'
import { useEffect } from "react";
import ScriptTag from 'react-script-tag';
import intercom from './assets/js/intercom'

const App = () => {

  // useEffect(() => {
  //   if (localStorage.hasOwnProperty('userInfo')) {
  //     let { userInfo } = JSON.parse(localStorage.getItem('userInfo'))
  //     if (userInfo) {
  //       let settings = {
  //         app_id: 'avzy2hbm',
  //         name: userInfo.username,
  //         email: userInfo.email,
  //         user_id: userInfo.id,
  //       }

  //       window.intercomSettings = settings
  //       window.Intercom('update');
  //     }
  //   }
  // }, [])

  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ScriptTag type="text/javascript" src={intercom} />
    </>
  );
}

export default App;
