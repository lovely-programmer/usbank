import DashboardDetails from "../components/DashboardDetails/DashboardDetails";
import TransferDetails from "../components/Transfer/Transfer";

function Transfer() {
  return (
    <div>
      <DashboardDetails>
        <TransferDetails />
      </DashboardDetails>
    </div>
  );
}

export default Transfer;
