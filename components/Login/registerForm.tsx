import * as React from 'react';
import {
  InputLabel,
  Button,
  Stack,
  Input,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { env } from 'process';
type RegisterInputs = {
  email: string;
  password: string;
  pseudo?: string;
  lastname: string;
  firstname: string;
  password_confirm: string;
  cgu: boolean;
  inscription?: boolean;
};
const RegisterForm = () => {
  const { handleSubmit, control } = useForm<RegisterInputs>();
  const onSubmit = (d: RegisterInputs) => {
    const { email, pseudo, password, lastname, firstname, password_confirm } =
      d;

    if (password === password_confirm) {
      let data = { password, email, lastname, firstname, pseudo };
      const postData = async (data: any, baseUrl: string, endpoint: string) => {
        try {
          const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          let result = await response.json();
          if (result) {
            alert('you have been registered!');
          }
        } catch (e) {
          console.log(e);
        }
      };
      postData(data, 'http://localhost:3000/', 'api/user');
    }
  };

  return (
    <Stack
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: '40%',
        mx: 'auto',
      }}
    >
      <Stack
        sx={{
          textAlign: 'left',
        }}
      >
        <InputLabel sx={{ color: '#204B8E', mb: 2 }}>Pseudo</InputLabel>
        <Controller
          name='pseudo'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <Input
              {...field}
              sx={{
                background: 'white',
                mb: 4,
              }}
            />
          )}
        />
        <InputLabel sx={{ color: '#204B8E', mb: 2 }}>Nom</InputLabel>
        <Controller
          name='lastname'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              sx={{
                background: 'white',
                mb: 4,
              }}
            />
          )}
        />
        <InputLabel sx={{ color: '#204B8E', mb: 2 }}>Prénom</InputLabel>
        <Controller
          name='firstname'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              sx={{
                background: 'white',
                mb: 4,
              }}
            />
          )}
        />
        <InputLabel sx={{ color: '#204B8E', mb: 2 }}>Email</InputLabel>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              sx={{
                background: 'white',
                mb: 4,
              }}
            />
          )}
        />
        <InputLabel sx={{ color: '#204B8E', mb: 2 }}>Mot de pass</InputLabel>
        <Controller
          name='password'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              sx={{
                background: 'white',
                mb: 4,
              }}
            />
          )}
        />
        <InputLabel sx={{ color: '#204B8E', mb: 2 }}>
          Confirmation de mot de pass
        </InputLabel>
        <Controller
          name='password_confirm'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              sx={{
                background: 'white',
                mb: 4,
              }}
              required
            />
          )}
        />
        {/* '& .MuiSvgIcon-root': {fontSize: 46}*/}
        <FormControlLabel
          sx={{ color: 'white' }}
          label="J'accepte les conditions d'utilisations"
          control={
            <Controller
              name='cgu'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox {...field} sx={{ color: 'white' }} />
              )}
            />
          }
        />
        <FormControlLabel
          sx={{ color: 'white' }}
          label="J'accepte de recevoir des emails de la part de SpiderWolf"
          control={
            <Controller
              name='inscription'
              control={control}
              rules={{ required: false }}
              render={({ field }) => (
                <Checkbox {...field} sx={{ color: 'white' }} />
              )}
            />
          }
        />
        <Box sx={{ display: 'flex', pb: '12rem' }}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            size='small'
            sx={{ mt: 8, p: 1.5, lineHeight: 1, borderRadius: 0 }}
          >
            Créer un compte
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default RegisterForm;
