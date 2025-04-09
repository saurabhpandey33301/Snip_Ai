import React from "react";
import Dashboardprovider from "./provider";

function DashboardLayout({ children }) {
  return (
    <div>
      <Dashboardprovider>{children}</Dashboardprovider>
    </div>
  );
}

export default DashboardLayout;
