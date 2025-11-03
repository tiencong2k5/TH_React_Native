import { registerRootComponent } from 'expo';

import App from './App';
import DanhThiepCaNhan from './DanhThiepCaNhan';
import GPA_Average from './GPA_Average';
import Change_Color from './Change_Color';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

/* Bai 4  */
// registerRootComponent(DanhThiepCaNhan);

/* Bai 5 */ 
// registerRootComponent(GPA_Average);

/* Bai 6 */

registerRootComponent(Change_Color);
