import Account from "../components/Account/Account";
import DashboardDetails from "../components/DashboardDetails/DashboardDetails";

function Dashboard() {
  return (
    <div>
      <DashboardDetails>
        <Account />
      </DashboardDetails>
    </div>
  );
}

export default Dashboard;
