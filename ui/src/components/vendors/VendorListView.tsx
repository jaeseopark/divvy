import { createColumnHelper } from "@tanstack/react-table";

import { Vendor } from "@/types";

import AssetListView from "@/components/common/AssetListView";

type VendorListViewProps = {
  vendors: Vendor[];
  onAdd: () => void;
  onClick?: (vendor: Vendor) => void;
};

const columnHelper = createColumnHelper<Vendor>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
  }),
];

const VendorListView = ({ vendors, onAdd, onClick }: VendorListViewProps) => {
  return <AssetListView data={vendors} columns={columns} onAdd={onAdd} onClick={onClick} filterableColumns={["name"]} strongHeaderStyle alternateBackgroundColor />;
};

export default VendorListView;
