import "./App.css";
import ButtonAppBar from "./components/AppHeader";
import ProductsGallery from "./components/ProductsGallery";
import Orders from "./components/Orders";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { createProduct } from "./graphql/mutations";
// import { API, graphqlOperation } from "aws-amplify";

// API.graphql(
//   graphqlOperation(createProduct, {
//     input: {
//       name: "Moozar katan",
//       pictureUrl: "",
//       price: 300,
//     },
//   })
// );

Amplify.configure(awsconfig);

function MainPage() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <ProductsGallery></ProductsGallery>
      </div>
    </AmplifyAuthenticator>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/orders">
          <div className="App">
            <Orders />
          </div>
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

// export default App;
export default App;
