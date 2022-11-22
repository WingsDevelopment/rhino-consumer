import { useNavigate } from "react-router-dom";
import { GenericTableBody } from "../../../../../rComponents/table/GenericTableBody";
import { TableButtonWithDetailsIcon } from "../../../../../rComponents/table/TableButtonWithDetailsIcon";
import { TableCell } from "../../../../../rComponents/table/TableCell";
import { TableRow } from "../../../../../rComponents/table/TableRow";
import { Tag } from "../../../models/Tag";
import { TagRoutes } from "../../../routes/TagRoutes";

interface Props {
  tags: Tag[] | undefined;
  isLoading: boolean;
}

export const TagTableBody: React.FC<Props> = ({ tags, isLoading }) => {
  const navigate = useNavigate();

  const rows = () => (
    <>
      {tags?.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell align="right">
            <TableButtonWithDetailsIcon
              label="Detalji"
              onClick={() => navigate(TagRoutes.details + "/" + item.id)}
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
  if (!tags) {
    return (
      <GenericTableBody rows={<></>} hasData={false} isLoading={isLoading} />
    );
  }
  return (
    <GenericTableBody
      rows={rows()}
      hasData={tags !== undefined && tags.length > 0}
      isLoading={isLoading}
    />
  );
};

export default TagTableBody;
