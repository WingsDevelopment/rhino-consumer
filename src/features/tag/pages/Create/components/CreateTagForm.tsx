import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "../../../../../rComponents/components/card/Card";
import { REQUIRED_FIELD_ERROR_MESSAGE } from "../../../../../rComponents/config";
import MyFormProvider from "../../../../../rComponents/inputs/reactHookForms/MyFormProvider";
import RRHFTextField from "../../../../../rComponents/inputs/reactHookForms/RRHFTextField";
import { RAsyncContent } from "../../../../../rComponents/wrappers/RAsyncContent";
import { RSingleColumnBox } from "../../../../../rComponents/wrappers/RSingleColumnBox";
import { Tag } from "../../../models/Tag";

interface Props {
  submitHandler: (tag: Tag) => Promise<void>;
  isLoading: boolean;
}

export const CreateTagForm: React.FC<Props> = ({
  submitHandler,
  isLoading,
}) => {
  const methods = useForm<Tag>();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<Tag> = async (tag: Tag) => {
    await submitHandler(tag);
  };

  return (
    <Card>
      <RAsyncContent isLoading={isLoading}>
        <MyFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <RSingleColumnBox>
            <RRHFTextField<Tag>
              name="id"
              label="Id"
              rules={{ required: REQUIRED_FIELD_ERROR_MESSAGE }}
            />

            <RRHFTextField<Tag>
              name="name"
              label="Name"
              rules={{ required: REQUIRED_FIELD_ERROR_MESSAGE }}
            />
            <button type="submit">Submit</button>
          </RSingleColumnBox>
        </MyFormProvider>
      </RAsyncContent>
    </Card>
  );
};
