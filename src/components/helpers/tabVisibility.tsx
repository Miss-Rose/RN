import RoutesName from '../constants/RoutesName';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const {SETTINGS, CITY_SELECTION} = RoutesName;

const isTabBarVisible = (navigation: {route: any}) => {
  const currRouteName = getFocusedRouteNameFromRoute(navigation.route);
  switch (currRouteName){
  case SETTINGS: return false;
  case CITY_SELECTION: return false;
  default: return true;
  }
};

export const setTabOptions = (navigation: {route: any}) => {
  return ({
    title: 'Weather',
    tabBarVisible: isTabBarVisible(navigation),
  });
};
