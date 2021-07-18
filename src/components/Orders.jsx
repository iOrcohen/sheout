import OrderList from "./OrderList";
import OrderDetails from "./OrderDetails";
import ButtonAppBar from "./AppHeader";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Grid } from "@material-ui/core";

export default function Orders() {
  return (
    <AmplifyAuthenticator>
      <ButtonAppBar></ButtonAppBar>
      <Grid container direction="row" justify="flex-start">
        <Grid item xs={2}>
          <OrderList></OrderList>
        </Grid>
        <Grid item alignContent="flex-start">
          <OrderDetails></OrderDetails>
        </Grid>
      </Grid>
    </AmplifyAuthenticator>
  );
}
