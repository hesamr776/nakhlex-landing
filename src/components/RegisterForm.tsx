import { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import { useController, UseControllerProps, useForm } from 'react-hook-form';
import * as yup from 'yup';

import {
  Button,
  Input as NextInput,
  Row,
  Text,
  Image,
  Loading,
} from '@nextui-org/react';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

type RegisterNow = { phone: string };

export const RegisterForm = () => {
  const { t } = useTranslation('common');
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup.object().shape({
    phone: yup
      .string()
      .required(t('mobile'))
      .length(10, t('yupLength', { field: t('mobile'), length: 10 }))
      .matches(phoneRegExp, t('yupValid', { field: t('mobile') })),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<RegisterNow>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ phone }: RegisterNow) => {
    console.log(phone);
    setIsLoading(true);
    await new Promise(res => {
      setTimeout(() => {
        reset();
        res(true);
      }, 390);
    });
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      <Text css={{ mt: 16, mb: 46, w: 400 }}>{t('registerYourPhone')}</Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="phone" />

        <Button
          auto
          color="primary"
          type="submit"
          disabled={!isValid || isLoading}
          css={{ '@smMax': { width: 300 }, '@sm': { w: 400 } }}
        >
          {isLoading ? <Loading size="xs" /> : t('register')}
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
        css={{
          '@smMax': { width: 300 },
          '@sm': { w: 400 },
          my: '$12',
        }}
        size="md"
        bordered
        name={name}
        value={value}
        type="tel"
        required
        maxLength={10}
        color="primary"
        onChange={onChange}
        contentLeftStyling={false}
        onFocus={onFocus}
        onBlur={onBlur}
        inputMode="tel"
        helperText={error?.message}
        helperColor="error"
        contentLeft={
          <Row css={{ ml: '$7' }} align="center" justify="space-between">
            <Image src="/iraq.png" alt="nakhlex iraq" width={20} height={14} />
            <Text>+964</Text>
          </Row>
        }
        contentRight={
          <Image
            src="/mobile.png"
            alt="nakhlex iraq"
            width={16}
            height={21.5}
          />
        }
      />
    </div>
  );
};
