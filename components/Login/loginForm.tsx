import * as React from 'react';
import { signIn } from 'next-auth/react';
import { InputLabel, Box, Button, Stack, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Router from 'next/router';
import { env } from 'process';
import { register } from 'ts-node';

const LoginForm = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = async (d: any) => {
    let res = await signIn('credentials', {
      email: d.email,
      password: d.pass,
      redirect: false,
    });
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: '65%',
        mx: 'auto',
        mb: '3rem',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
        textAlign='left'
      >
        <div>
          <InputLabel sx={{ color: '#204B8E' }}>Email</InputLabel>
          <Controller
            name='email'
            control={control}
            defaultValue=''
            rules={{ required: 'required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                size='small'
                sx={{
                  background: 'white',
                  mt: 2,
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </div>
        <div>
          <InputLabel sx={{ color: '#204B8E' }}>Mot de pass</InputLabel>
          <Controller
            name='pass'
            control={control}
            defaultValue=''
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                sx={{
                  background: 'white',
                  mt: 2,
                }}
              />
            )}
          />
        </div>
      </Stack>
      <Box sx={{ display: 'flex' }}>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='small'
          sx={{ mt: 8, ml: 'auto', p: 1.5, lineHeight: 1, borderRadius: 0 }}
        >
          Se connecter
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
