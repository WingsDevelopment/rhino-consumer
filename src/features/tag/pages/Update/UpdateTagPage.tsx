import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { RPage } from "../../../../rComponents/page/RPage";
import { Tag, createEmptyTag } from "../../models/Tag";
import { TagRoutes } from "../../routes/TagRoutes";
import { useUpdateTag } from "../../state/mutations/useUpdateTag";
import { useFetchTagById } from "../../state/queries/useFetchTagById";
import { UpdateTagForm } from "./components/UpdateTagForm";

export const UpdateTagPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateTagAsync, isLoading: isSubmitting } = useUpdateTag();
  const { tag, isLoading } = useFetchTagById(id);

  const handleSubmit = async (tag: Tag) => {
    const id = await updateTagAsync(tag);
    navigate(TagRoutes.details + "/" + id);
  };

  const initData = useMemo(() => (tag ? tag : createEmptyTag()), [tag]);

  return (
    <RPage
      title="title"
      breadcrumbsLinks={[
        {
          name: "Update Tag",
          href: "/Tags",
        },
      ]}
    >
      <UpdateTagForm
        submitHandler={handleSubmit}
        isLoading={isLoading || isSubmitting}
        initData={initData}
      />
    </RPage>
  );
};

export default UpdateTagPage;
