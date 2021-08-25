import React from 'react';
import './App.css';
import Home from './compoenet/Home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './compoenet/Login/Login'
import Signup from './compoenet/Signup/Signup'
import Forgotpassword from './compoenet/Forgotpassword/Forgotpassword'
import Ring from './compoenet/Gold/Ring';
import bkyrgld from './compoenet/Book Your Gold/bookyourgold';
import Shortnecklace from './compoenet/Gold/Shortnecklace';
import Pendants from './compoenet/Gold/Pendants';
import Chains from './compoenet/Gold/Chains';
import Miscellaneous from './compoenet/Gold/Miscellaneous';
import Oddiyanam from  './compoenet/Gold/Oddiyanam';
import Mangalyam from './compoenet/Gold/Mangalyam';
import Dmring from './compoenet/Dimond/Dmring';
import Dmwatch from './compoenet/Dimond/Dmwatch';
import Dmearrings from './compoenet/Dimond/Dmearrings';
import Dmbangles from './compoenet/Dimond/Dmbangles';
import Dmoddiyanam from './compoenet/Dimond/Dmoddiyanam';
import Dmnecklaces from './compoenet/Dimond/Dmnecklaces';
import Dmbracelets from './compoenet/Dimond/Dmbracelets';
import Goldcoins from './compoenet/Coins/Goldcoins';
import Silvercoins from './compoenet/Coins/Silvercoins';
import Silverbabyset from './compoenet/Silver Articles/Silverbabyset';
import Silverbowl from './compoenet/Silver Articles/Silverbowl';
import Silverchombukudam from './compoenet/Silver Articles/Silverchombukudam';
import Silverdinnersetsplates from './compoenet/Silver Articles/Silverdinnersetsplates';
import Silveridols from './compoenet/Silver Articles/Silveridols';
import Silverlamps from './compoenet/Silver Articles/Silverlamps';
import Silvermiscellaneous from './compoenet/Silver Articles/Silvermiscellaneous';
import Silverpoojaitems from './compoenet/Silver Articles/Silverpoojaitems';
import Amsbangles from './compoenet/The Amethyst store/Amsbangles';
import Amsbracelets from './compoenet/The Amethyst store/Amsbracelets';
import Amschains from './compoenet/The Amethyst store/Amschains';
import Amsearrings from  './compoenet/The Amethyst store/Amsearrings';
import Amsjadava from './compoenet/The Amethyst store/Amsjadava';
import Amskkb from './compoenet/The Amethyst store/Amskkb';
import Amsmaan from './compoenet/The Amethyst store/Amsmaan';
import Amsmeraki from  './compoenet/The Amethyst store/Amsmeraki';
import Amsnecklace from './compoenet/The Amethyst store/Amsnecklace';
import Amsoddvad from './compoenet/The Amethyst store/Amsodd-vad';
import Amsoneofkind from './compoenet/The Amethyst store/Amsoneofkind';
import Amspendants from './compoenet/The Amethyst store/Amspendants';
import Amsrings from './compoenet/The Amethyst store/Amsrings';
import Footerabout from './common/Footer/Footerabout';
import Footercontactus from './common/Footer/Footercontactus';
import Footersavings from './common/Footer/Footersavings';
import Footerprivacy from './common/Footer/Footerprivacy';
import Footertandc from './common/Footer/Footertandc';
import Footerrandex from './common/Footer/Footerrandex';
import Footerfaqs from './common/Footer/Footerfaqs';

function App() {
  return (
    <div className="App">
     <Router>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={Signup} />
        <Route  path="/forgotpassword" component={Forgotpassword} />
        <Route  path="/ring" component={Ring} />
        <Route  path="/home" component={Home} />
        <Route  path="/bkyrgld" component={bkyrgld} />
        <Route  path="/Shortnecklace" component={Shortnecklace} />
        <Route  path="/Pendants" component={Pendants} />
        <Route  path="/Chains" component={Chains} />
        <Route  path="/Miscellaneous" component={Miscellaneous} />
        <Route  path="/Oddiyanam" component={Oddiyanam} />
        <Route  path="/Mangalyam" component={Mangalyam} />
        <Route  path="/Dmring" component={Dmring} />
        <Route  path="/Dmwatch" component={Dmwatch} />
        <Route  path="/Dmearrings" component={Dmearrings} />
        <Route  path="/Dmbangles" component={Dmbangles} />
        <Route  path="/Dmoddiyanam" component={Dmoddiyanam} />
        <Route  path="/Dmnecklaces" component={Dmnecklaces} />
        <Route  path="/Dmbracelets" component={Dmbracelets}/>
        <Route  path="/Goldcoins" component={Goldcoins} />
        <Route  path="/Silvercoins" component={Silvercoins} />
        <Route  path="/Silverbabyset" component={Silverbabyset} />
        <Route  path="/Silverbowl" component={Silverbowl} />
        <Route  path="/Silverchombukudam" component={Silverchombukudam} />
        <Route  path="/Silverdinnersetsplates" component={Silverdinnersetsplates} />
        <Route  path="/Silveridols" component={Silveridols} />
        <Route  path="/Silverlamps" component={Silverlamps} />
        <Route  path="/Silvermiscellaneous" component={Silvermiscellaneous} />
        <Route  path="/Silverpoojaitems" component={Silverpoojaitems} />
        <Route  path="/Amsbangles" component={ Amsbangles} />
        <Route  path="/Amsbracelets" component={Amsbracelets} />
        <Route  path="/Amschains" component={Amschains} />
        <Route  path="/Amsearrings" component={Amsearrings} />
        <Route  path="/Amsjadava" component={Amsjadava} />
        <Route  path="/Amskkb" component={Amskkb} />
        <Route  path="/Amsmaan" component={Amsmaan} />
        <Route  path="/Amsmeraki" component={Amsmeraki} />
        <Route  path="/Amsnecklace" component={Amsnecklace} />
        <Route  path="/Amsoddvad" component={Amsoddvad} />
        <Route  path="/Amsoneofkind" component={Amsoneofkind} />
        <Route  path="/Amspendants" component={Amspendants} />
        <Route  path="/Amsrings" component={Amsrings} />
        <Route  path="/Footerabout" component={Footerabout} />
        <Route  path="/Footercontactus" component={Footercontactus}/>
        <Route  path="/Footersavings" component={Footersavings} /> 
        <Route  path="/Footerprivacy" component={Footerprivacy} />
        <Route  path="/Footertandc" component={Footertandc} />
        <Route  path="/Footerrandex" component={Footerrandex} /> 
        <Route  path="/Footerfaqs" component={Footerfaqs} />
        </Router>
    </div>
  );
}

export default App;
