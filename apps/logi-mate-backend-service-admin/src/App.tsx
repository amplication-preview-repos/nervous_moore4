import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TamperedStatusList } from "./tamperedStatus/TamperedStatusList";
import { TamperedStatusCreate } from "./tamperedStatus/TamperedStatusCreate";
import { TamperedStatusEdit } from "./tamperedStatus/TamperedStatusEdit";
import { TamperedStatusShow } from "./tamperedStatus/TamperedStatusShow";
import { SmartBoxDeviceList } from "./smartBoxDevice/SmartBoxDeviceList";
import { SmartBoxDeviceCreate } from "./smartBoxDevice/SmartBoxDeviceCreate";
import { SmartBoxDeviceEdit } from "./smartBoxDevice/SmartBoxDeviceEdit";
import { SmartBoxDeviceShow } from "./smartBoxDevice/SmartBoxDeviceShow";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { UnlockAttemptList } from "./unlockAttempt/UnlockAttemptList";
import { UnlockAttemptCreate } from "./unlockAttempt/UnlockAttemptCreate";
import { UnlockAttemptEdit } from "./unlockAttempt/UnlockAttemptEdit";
import { UnlockAttemptShow } from "./unlockAttempt/UnlockAttemptShow";
import { LocationHistoryList } from "./locationHistory/LocationHistoryList";
import { LocationHistoryCreate } from "./locationHistory/LocationHistoryCreate";
import { LocationHistoryEdit } from "./locationHistory/LocationHistoryEdit";
import { LocationHistoryShow } from "./locationHistory/LocationHistoryShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LogiMate Backend Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TamperedStatus"
          list={TamperedStatusList}
          edit={TamperedStatusEdit}
          create={TamperedStatusCreate}
          show={TamperedStatusShow}
        />
        <Resource
          name="SmartBoxDevice"
          list={SmartBoxDeviceList}
          edit={SmartBoxDeviceEdit}
          create={SmartBoxDeviceCreate}
          show={SmartBoxDeviceShow}
        />
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="UnlockAttempt"
          list={UnlockAttemptList}
          edit={UnlockAttemptEdit}
          create={UnlockAttemptCreate}
          show={UnlockAttemptShow}
        />
        <Resource
          name="LocationHistory"
          list={LocationHistoryList}
          edit={LocationHistoryEdit}
          create={LocationHistoryCreate}
          show={LocationHistoryShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
