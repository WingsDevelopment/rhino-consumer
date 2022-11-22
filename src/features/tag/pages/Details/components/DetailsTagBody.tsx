import { DefaultReadOnlyTextField } from "../../../../../rComponents/inputs/readonly/DefaultReadOnlyTextField";
import { RAsyncContent } from "../../../../../rComponents/wrappers/RAsyncContent";
import { RSingleColumnBox } from "../../../../../rComponents/wrappers/RSingleColumnBox";
import { Tag } from "../../../models/Tag";

interface Props {
  tag: Tag | undefined;
  isLoading: boolean;
}

export const DetailsTagBody: React.FC<Props> = ({ tag, isLoading }) => {
  return (
    <RAsyncContent isLoading={isLoading}>
      <RSingleColumnBox>
        <DefaultReadOnlyTextField value={tag?.id?.toString()} label="Id" />

        <DefaultReadOnlyTextField value={tag?.name?.toString()} label="Name" />
      </RSingleColumnBox>
    </RAsyncContent>
  );
};
