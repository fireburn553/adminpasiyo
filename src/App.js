import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import {withAuthenticator} from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import ListNewDriver from "./pages/listNewDriver/ListNewDriver";
import SingleNewDriver from "./pages/singleNewDriver/SingleNewDriver"

function App({signOut}) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home signOut={signOut}/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/> {/*need to change the id or to send*/}
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="newDriver">
              <Route index element={<ListNewDriver/>}/>
              <Route path=":userId" element={<SingleNewDriver/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default withAuthenticator(App);
