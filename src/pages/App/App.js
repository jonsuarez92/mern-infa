import './App.css';
//week 18 day 2//////////////////////////////////////////////////
import { useState } from 'react'////////////////////////////////
import AuthPage from '../AuthPage/AuthPage';///////////////
import NewOrderPage from '../NewOrderPage/NewOrderPage';///
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom'///////////
///////////////////////////////////////////////////////////////
function App() {
  //week 18 day 2/////////////////////////
  const [user, setUser] = useState(null)//
  ///////////////////////////////////////
  return (
    <main className="App">
      {user ?
        /* week 18 day 2 <Route> As you can see, we've set the pathprop to the URL/path that we plan to use for this route.
      Additionally, the element prop is interesting in that it accepts an actual component instance:
      when the path is clicked the element tells you what page is displayed */
        <Routes>
          <Route path='/orders/new' element={<NewOrderPage />} />
          <Route path='/orders' element={<OrderHistoryPage />} />
        </Routes>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
