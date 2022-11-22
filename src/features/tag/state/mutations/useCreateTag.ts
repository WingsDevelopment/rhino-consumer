import { useMutation, useQueryClient } from "react-query";
import { GlobalDIContext } from "../../../../rComponents/context/GlobalDIContext";
import { useDefaultRQConfig } from "../../../../rComponents/libs/reactQuery";
import { getServerErrorMessage } from "../../../../rComponents/utils/errorUtils";
import { DIContext } from "../../context/DIContext";
import { tagDTOExtension } from "../../infrastructure/DTOs/TagDTO";
import { Tag } from "../../models/Tag";

export const FETCH_ALL_TAGS = "FETCH_ALL_TAGS";

export const useCreateTag = () => {
  const { EnqueueMessage } = GlobalDIContext.NotificationService;
  const queryClient = useQueryClient();
  const config = useDefaultRQConfig("useCreateTag");

  const { isLoading, error, mutateAsync } = useMutation(
    async (tag: Tag) => {
      const response = await DIContext.TagRepository.CreateTagAsync(
        tagDTOExtension(tag)
      );
      return response;
    },
    {
      ...config,
      onSuccess: () => {
        queryClient.invalidateQueries([FETCH_ALL_TAGS]);
        EnqueueMessage("Tag is successfully created", "success");
      },
    }
  );

  return {
    createTagAsync: mutateAsync,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};
