import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen29545Navigator from '../features/CopyOfBlankScreen29545/navigator';
import BlankScreen29544Navigator from '../features/BlankScreen29544/navigator';
import BlankScreen19543Navigator from '../features/BlankScreen19543/navigator';
import BlankScreen39542Navigator from '../features/BlankScreen39542/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen29545: { screen: CopyOfBlankScreen29545Navigator },
BlankScreen29544: { screen: BlankScreen29544Navigator },
BlankScreen19543: { screen: BlankScreen19543Navigator },
BlankScreen39542: { screen: BlankScreen39542Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
