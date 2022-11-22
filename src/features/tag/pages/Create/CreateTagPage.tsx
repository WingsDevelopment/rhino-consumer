import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import { RPage } from "../../../../rComponents/page/RPage";
import { Tag } from "../../models/Tag";
import { TagRoutes } from "../../routes/TagRoutes";
import { useCreateTag } from "../../state/mutations/useCreateTag";
import { CreateTagForm } from "./components/CreateTagForm";

export const CreateTagPage: React.FC = () => {
  const { createTagAsync, isLoading } = useCreateTag();
  const navigate = useNavigate();

  const handleSubmit = async (tag: Tag) => {
    const id = await createTagAsync(tag);
    navigate(TagRoutes.details + "/" + id);
  };

  return (
    <RPage
      title="title"
      breadcrumbsLinks={[
        {
          name: "Create Tag",
          href: "/Tags",
        },
      ]}
    >
      <CreateTagForm submitHandler={handleSubmit} isLoading={isLoading} />
    </RPage>
  );
};

export default CreateTagPage;
