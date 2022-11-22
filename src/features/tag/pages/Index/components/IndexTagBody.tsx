import { useMemo } from "react";
import { usePaginableSortedData } from "../../../../../rComponents/hooks/usePaginableSortedData";
import { GenericPaginableTable } from "../../../../../rComponents/table/GenericPaginableTable";
import { Tag } from "../../../models/Tag";
import TagTableBody from "./TagTableBody";

interface Props {
  tags: Tag[] | undefined;
  isLoading: boolean;
}

export const IndexTagBody: React.FC<Props> = ({ tags, isLoading }) => {
  const { dataToShow, page, setPage, rowsPerPage, setRowsPerPage, setSortBy } =
    usePaginableSortedData(tags, "");

  const tableLabels = useMemo(
    () => [
      { id: "id", label: "id", sortable: true },
      { id: "name", label: "name", sortable: true },
      { id: "#", label: "#" },
    ],
    []
  );

  return (
    <GenericPaginableTable
      subheader="Tabela Tag"
      isLoading={isLoading}
      totalCount={tags?.length}
      currentPage={page}
      onPageChangeHandler={setPage}
      onChangeItemsPerPageHandler={setRowsPerPage}
      sortByHandler={setSortBy}
      itemsPerPage={rowsPerPage}
      tableBodyComponent={
        <TagTableBody tags={dataToShow} isLoading={isLoading} />
      }
      tableLabels={tableLabels}
    />
  );
};

export default IndexTagBody;
