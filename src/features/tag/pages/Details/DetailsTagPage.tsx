import React from "react";
import { useParams } from "react-router";
import { RPage } from "../../../../rComponents/page/RPage";
import { useFetchTagById } from "../../state/queries/useFetchTagById";
import { DetailsTagBody } from "./components/DetailsTagBody";

export const DetailsTagPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tag, isLoading } = useFetchTagById(id);

  return (
    <RPage
      title="title"
      breadcrumbsLinks={[
        {
          name: "Details Tag",
          href: "/Tags",
        },
      ]}
    >
      <DetailsTagBody tag={tag} isLoading={isLoading} />
    </RPage>
  );
};

export default DetailsTagPage;
