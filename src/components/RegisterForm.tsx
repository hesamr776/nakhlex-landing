import { useTranslation } from 'next-i18next';

import { useController, UseControllerProps, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { Button, Input as NextInput, Text } from '@nextui-org/react';
import dynamic from 'next/dynamic';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

type RegisterNow = { phone: string };

export const RegisterForm = () => {
  const { t } = useTranslation('common');

  const schema = yup.object().shape({
    phone: yup
      .string()
      .required(t('mobile'))
      .length(11, t('yupLength', { field: t('mobile'), length: 11 }))
      .matches(phoneRegExp, t('yupValid', { field: t('mobile') })),
  });

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<RegisterNow>({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ phone }: RegisterNow) => {
    console.log(phone);
  };

  return (
    <div className="w-full">
      <Text css={{ mt: 16, mb: 46 }}>{t('registerYourPhone')}</Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="phone" />

        <Button auto color="primary" disabled={!isValid}>
          {t('register')}
        </Button>
      </form>
    </div>
  );
};

export const Input = ({ control, name }: UseControllerProps<RegisterNow>) => {
  const { t } = useTranslation('common');

  const {
    field: { value = '', onChange },
    fieldState: { error },
  } = useController({ control, name: 'phone' });

  const [isFocussed, setIsFocussed] = useState(false);

  const onBlur = () => {
    setIsFocussed(false);
  };

  const onFocus = () => setIsFocussed(true);

  const border = error
    ? '1px solid red'
    : isFocussed
    ? '1px solid purple'
    : '1px solid lightGray';

  return (
    <div>
      <NextInput
        id="register number"
        aria-label="register number"
        className="flex-1 focus-visible:border-0"
        placeholder={t('enterMobile')}
        size="md"
        name={name}
        value={value}
        type="tel"
        required
        maxLength={11}
        color="primary"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        contentLeft={<p className="text-sm mb-0">+964</p>}
        contentRight={
          <i className="typcn typcn-device-phone" style={{ fontSize: 20 }} />
        }
      />

      <Text>{error?.message}</Text>
    </div>
  );
};
