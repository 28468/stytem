import React from "react";
import { Router } from "dva/router";
import {route,MapRoute} from './routes'
import {connect} from 'dva';
// 引入国际化
import {IntlProvider, addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

// 配置国际化字典
const localMap = {
  en: enUS,
  zh: zhCN
}
addLocaleData([...en, ...zh]);

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//     <MapRoute route={route}></MapRoute>
//     </Router>
//   );
// }
// export default RouterConfig;


const mapStateToProps = state=>{
  return {
    locale: state.global.locale
  }
}
let RouterView = connect(mapStateToProps)((props)=>{
    return (
      <IntlProvider locale={props.locale} messages={localMap[props.locale]}>
        <Router history={props.history}>
        <MapRoute route={route}></MapRoute>
        </Router>
      </IntlProvider>
    );
})

function RouterConfig({ history }) {
  return <RouterView history={history} />
}

export default RouterConfig;