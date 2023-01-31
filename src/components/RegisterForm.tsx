import { useState } from 'react';
import { useTranslation } from 'next-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import { useController, UseControllerProps, useForm } from 'react-hook-form';
import * as yup from 'yup';
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

import {
  Button,
  Input as NextInput,
  Row,
  Text,
  Loading,
  Col,
  InputProps,
} from '@nextui-org/react';
import { useWindowSize } from '../hooks/dimensions';
import { GAEvent } from '../hooks/useFirebase';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

type RegisterNow = { phone: string };

export const RegisterForm = () => {
  const { width } = useWindowSize();
  const { t } = useTranslation('common');
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    phone: yup
      .string()
      .required(t('yupRequired', { field: t('mobile') }))
      .length(10, t('yupLength', { field: t('mobile'), length: 10 }))
      .matches(phoneRegExp, t('yupValid', { field: t('mobile') })),
  });

  const { handleSubmit, control, reset } = useForm<RegisterNow>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ phone }: RegisterNow) => {
    setIsLoading(true);

    GAEvent('Register-button', { phone: `0${phone}` });
    await sendSMS(`+964${phone}`);

    reset();

    setIsLoading(false);
  };

  return (
    <Col
      css={{
        bg: 'White',
        width: 496,
        mw: '100%',
        borderRadius: 16,
        mt: '$12',
        px: '$8',
        py: '$10',
      }}>
      <Text size={13} color="secondary" css={{ m: '$0' }}>
        {t('registerYourPhone')}
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="phone"
          contentRight={
            (width || 320) > 960 ? (
              <Button
                auto
                color="primary"
                type="submit"
                css={{
                  w: 176,
                  mw: (width || 320) - 60,
                  mb: '$0',
                  ml: '-145px',
                }}
                style={{ paddingRight: '100%' }}>
                {isLoading ? <Loading size="xs" /> : t('register')}
              </Button>
            ) : undefined
          }
        />
        {(width || 320) < 960 && (
          <Button
            auto
            color="primary"
            type="submit"
            css={{ w: 176, mw: (width || 320) - 60, mb: '$4' }}
            style={{ paddingRight: '100%' }}>
            {isLoading ? <Loading size="xs" /> : t('register')}
          </Button>
        )}

        <Text color="gray" size={10} dir="ltr">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
          <a href="https://policies.google.com/terms"> Terms of Service</a>{' '}
          apply
        </Text>
      </form>
    </Col>
  );
};

export const Input = ({
  control,
  name,
  contentRight,
}: UseControllerProps<RegisterNow> & Partial<InputProps>) => {
  const { t } = useTranslation('common');
  const { width } = useWindowSize();

  const {
    field: { value = '', onChange },
    fieldState: { error },
  } = useController({ control, name: 'phone' });

  const [isFocussed, setIsFocussed] = useState(false);

  const onBlur = () => {
    setIsFocussed(false);
  };

  const onFocus = () => setIsFocussed(true);

  const borderColor = error
    ? '1px solid red'
    : isFocussed
    ? '1px solid purple'
    : '1px solid lightGray';

  return (
    <NextInput
      id="register number"
      aria-label="register number"
      className="flex-1 focus-visible:border-0"
      placeholder={t('enterMobile')}
      css={{
        w: '100%',
        mw: (width || 320) - 60,
        my: '$8',
        borderColor,
        direction: 'ltr',
        borderRadius: 8,
      }}
      size="md"
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
        <Row css={{ ml: '$4' }} align="center" justify="space-between">
          <Text>+964</Text>
        </Row>
      }
      contentRight={contentRight}
    />
  );
};

const sendSMS = async (phone: string) =>
  await new Promise((resolve, reject) => {
    if (SITE_KEY) {
      try {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(SITE_KEY, { action: 'submit' })
            .then(async token => {
              const body = {
                phone,
                'g-recaptcha-response': token,
              };

              try {
                const response = await fetch(
                  'https://app.nakhlex.com/api/sendLandingSms',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8',
                    },
                    body: JSON.stringify(body),
                  },
                );
                if (response.ok) {
                  const json = await response.json();

                  resolve(json.success);
                } else {
                  throw new Error(response.statusText);
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
              } catch (error: any) {
                reject({ message: error?.message });
              }

              /* End of the sending data */
            })
            .catch(error => {
              reject({ message: error.message });
            });
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        reject({ message: error?.message });
      }
    } else {
      reject({ message: 'Site key is undefined' });
    }
  });
