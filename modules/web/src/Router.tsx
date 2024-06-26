import { HomePage } from './pages/Home.page';
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { NotFoundPage } from './pages/NotFound.page';
import {  redirectLinks, useSystemModulesList,  } from './systemModules';
import { useEffect } from 'react';
import _ from 'lodash';
import { FN_GetDispatch } from './store/nocycle';
import apiSlice from './store/reducers/apiSlice';
import UsersSlice from './store/reducers/userSlice';
import SystemAlertOrPrompt from './containers/SystemAlertOrPrompt';
import exportUtils from './utils/ExportUtils';
import { SetupPage } from './pages/Setup.page';
import { isDesktopMode } from './utils/DesktopUtils';
import GetAppInfo from './AppInfo';
import { isPortalMode } from './utils/PortalUtils';
import AlertUtils from './utils/AlertUtils';
import { useHasUserSignIn } from './utils/AuthUtils';
import { init_when_signIn_mode as init_when_signIn_mode } from './AppInitFn';
import { useSystemInitFunc } from './initHooks';


export default () => {
  let basename = '/'
  const userInfoMeta = apiSlice.useGetUserInfoQuery({
    initCount: exportUtils.useSelector(v => v.settings.initCount)
  }, {
    refetchOnMountOrArgChange: true,
  })

  useSystemInitFunc()

  useEffect(() => {
    const userInfoData = userInfoMeta.data?.data
    if (userInfoData) {
      FN_GetDispatch()(
        UsersSlice.actions.updateOneOfParamState({
          userInfo: userInfoData
        })
      )
    }
  }, [userInfoMeta.status])
  const signInOrNot = useHasUserSignIn()
  useEffect(() => {
    if (signInOrNot) {
      init_when_signIn_mode()
    }
  }, [signInOrNot])
  const routerArr: JSX.Element[] = []
  const { list: systemModulesList, ROUTE_CPT_MAPPING } = useSystemModulesList({})
  for (let eachRoute of ROUTE_CPT_MAPPING) {
    const pathName = eachRoute.href
    routerArr.push(<Route key={pathName} exact path={pathName} component={HomePage} />)
    routerArr.push(<Route key={pathName} exact path={pathName + '/:extId'} component={HomePage} />)
  }
  return <Router basename={basename} >
    <Switch>
      {/* <Route exact path={"/not-found"} component={NotFoundPage} /> */}
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/setup"} component={SetupPage} />
      {routerArr}
      {
        redirectLinks.map(x => {
          return (
            <Redirect exact key={x.path} path={x.path} to={x.url} />
          )
        })
      }
      {/* <Redirect to="/not-found" /> */}
      <Route path={'*'} component={NotFoundPage} />
    </Switch>
    <SystemAlertOrPrompt />
  </Router>
}
