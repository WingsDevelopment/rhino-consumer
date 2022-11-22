import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDefaultRQConfig } from "../../../../rComponents/libs/reactQuery";
import { getServerErrorMessage } from "../../../../rComponents/utils/errorUtils";
import { DIContext } from "../../context/DIContext";

export const FETCH_ALL_TAGS = "FETCH_ALL_TAGS";

export const useFetchAllTag = () => {
  const config = useDefaultRQConfig("useFetchAllTag");

  const { isLoading, error, data } = useQuery(
    [FETCH_ALL_TAGS],
    async () => {
      const response = await DIContext.TagRepository.GetAllTagAsync();
      return response;
    },
    {
      ...config,
    }
  );

  return {
    tags: data,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};
