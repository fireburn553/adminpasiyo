import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import {
  Routes,
  BrowserRouter,
  Route,
} from "react-router-dom";
import {withAuthenticator, Button, Heading} from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"

function App({signOut, user}) {
  return (
    <div className="App">
      {/* <div style={StyleSheet.container}>
        <Heading level={1}>Hello {user.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/> {/*need to change the id or to send*/}
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default withAuthenticator(App);
