import React from "react";
import { RPage } from "../../../../rComponents/page/RPage";
import { useFetchAllTag } from "../../state/queries/useFetchAllTag";
import IndexTagBody from "./components/IndexTagBody";

export const TagIndexPage: React.FC = () => {
  const { tags, isLoading } = useFetchAllTag();

  return (
    <RPage
      title="title"
      breadcrumbsLinks={[
        {
          name: "Tag table",
          href: "/Tags",
        },
      ]}
    >
      <IndexTagBody tags={tags} isLoading={isLoading} />
    </RPage>
  );
};

export default TagIndexPage;
