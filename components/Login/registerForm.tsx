import * as React from "react";
import {InputLabel, Button, Stack, Input, Box, FormControlLabel, Checkbox} from '@mui/material';
import {useForm, Controller} from "react-hook-form";

const RegisterForm = () => {
    const {handleSubmit, control} = useForm()
    const onSubmit = (d: any) => {
        console.log(d)
    }

    return (
        <Stack component="form" onSubmit={handleSubmit(onSubmit)} sx={{
            width: '40%',
            mx: 'auto',
        }}>
            <Stack sx={{
                textAlign: 'left'
            }}>
                <InputLabel sx={{color: "#204B8E", mb: 2}}>Pseudo</InputLabel>
                <Controller
                    name="pseudo"
                    control={control}
                    defaultValue=""
                    rules={{required: true}}
                    render={({field}) =>
                        <Input {...field} sx={{
                            background: "white",
                            mb: 4
                        }}
                        />}
                />
                <InputLabel sx={{color: "#204B8E", mb: 2}}>Nom</InputLabel>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{required: true}}
                    render={({field}) =>
                        <Input {...field} sx={{
                            background: "white",
                            mb: 4
                        }}
                        />}
                />
                <InputLabel sx={{color: "#204B8E", mb: 2}}>Email</InputLabel>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{required: true}}
                    render={({field}) =>
                        <Input {...field} sx={{
                            background: "white",
                            mb: 4
                        }}
                        />}
                />
                <InputLabel sx={{color: "#204B8E", mb: 2}}>Mot de pass</InputLabel>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{required: true}}
                    render={({field}) =>
                        <Input {...field} sx={{
                            background: "white",
                            mb: 4
                        }}
                        />}
                />
                <InputLabel sx={{color: "#204B8E", mb: 2}}>Confirmation de mot de pass</InputLabel>
                <Controller
                    name="password-confirm"
                    control={control}
                    defaultValue=""
                    rules={{required: true}}
                    render={({field}) =>
                        <Input {...field} sx={{
                            background: "white",
                            mb: 4
                        }}
                               required
                        />}
                />
                {/* '& .MuiSvgIcon-root': {fontSize: 46}*/}
                <FormControlLabel sx={{color: 'white'}}
                                  label="J'accepte les conditions d'utilisations"
                                  control={
                                      <Controller
                                          name="cgu"
                                          control={control}
                                          rules={{required: true}}
                                          render={({field}) =>
                                              <Checkbox {...field} sx={{color: 'white'}}/>}
                                      />
                                  }
                />
                <FormControlLabel sx={{color: 'white'}}
                                  label="J'accepte de recevoir des emails de la part de SpiderWolf"
                                  control={
                                      <Controller
                                          name="inscription"
                                          control={control}
                                          rules={{required: false}}
                                          render={({field}) =>
                                              <Checkbox {...field} sx={{color: 'white'}}/>}
                                      />
                                  }
                />
                <Box sx={{display: 'flex', pb: "12rem"}}>
                    <Button type="submit" variant="contained" color="primary" size="small"
                            sx={{mt: 8, p:1.5, lineHeight:1, borderRadius: 0}}>
                        Créer un compte
                    </Button>
                </Box>
            </Stack>
        </Stack>
    )
}

export default RegisterForm