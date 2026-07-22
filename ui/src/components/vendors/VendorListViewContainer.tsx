import { useNavigate } from "react-router-dom";

import { ROUTE_PATHS } from "@/const";
import { sigVendors } from "@/store";
import { getEditVendorPath } from "@/utils/paths";

import VendorListView from "@/components/vendors/VendorListView";

const VendorListViewContainer = () => {
  const navigate = useNavigate();

  return (
    <VendorListView
      vendors={sigVendors.value}
      onAdd={() => navigate(ROUTE_PATHS.NEW_VENDOR)}
      onClick={(vendor) => navigate(getEditVendorPath(vendor.id))}
    />
  );
};

export default VendorListViewContainer;
