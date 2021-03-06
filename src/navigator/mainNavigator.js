import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile46973Navigator from '../features/UserProfile46973/navigator';
import Maps46954Navigator from '../features/Maps46954/navigator';
import Settings46932Navigator from '../features/Settings46932/navigator';
import Settings46917Navigator from '../features/Settings46917/navigator';
import NotificationList46916Navigator from '../features/NotificationList46916/navigator';
import Maps46915Navigator from '../features/Maps46915/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile46973: { screen: UserProfile46973Navigator },
Maps46954: { screen: Maps46954Navigator },
Settings46932: { screen: Settings46932Navigator },
Settings46917: { screen: Settings46917Navigator },
NotificationList46916: { screen: NotificationList46916Navigator },
Maps46915: { screen: Maps46915Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
