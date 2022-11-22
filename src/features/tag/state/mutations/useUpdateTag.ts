import { useMutation, useQueryClient } from "react-query";
import { GlobalDIContext } from "../../../../rComponents/context/GlobalDIContext";
import { useDefaultRQConfig } from "../../../../rComponents/libs/reactQuery";
import { getServerErrorMessage } from "../../../../rComponents/utils/errorUtils";
import { DIContext } from "../../context/DIContext";
import { tagDTOExtension } from "../../infrastructure/DTOs/TagDTO";
import { Tag } from "../../models/Tag";
import { FETCH_ALL_TAGS } from "./useCreateTag";

export const useUpdateTag = () => {
  const { EnqueueMessage } = GlobalDIContext.NotificationService;
  const queryClient = useQueryClient();
  const config = useDefaultRQConfig("useUpdateTag");

  const { isLoading, error, mutateAsync } = useMutation(
    async (tag: Tag) => {
      const response = await DIContext.TagRepository.UpdateTagAsync(
        tagDTOExtension(tag)
      );
      return response;
    },
    {
      ...config,
      onSuccess: () => {
        queryClient.invalidateQueries([FETCH_ALL_TAGS]);
        EnqueueMessage("Tag is successfully updated", "success");
      },
    }
  );

  return {
    updateTagAsync: mutateAsync,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};
