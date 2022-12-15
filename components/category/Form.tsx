import { Category } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../../utility/fetchData';

type Inputs = {
  name: String;
};
const Form = (props: { category?: Category }) => {
  const router = useRouter();
  const { category } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    postData(
      data,
      'http://localhost:3000/',
      `api/category/${category ? category.id : ''}`,
      category ? 'PUT' : 'POST',
    ).then(() => router.push('/dashboard/categories'));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor='name'>
          Category Name
          <div>
            <input
              id='name'
              defaultValue={props.category?.name}
              {...register('name', { required: true })}
            />
          </div>
        </label>
        {errors.name && <span>This field is required</span>}

        <button style={{ cursor: 'pointer' }} type='submit'>
          save
        </button>
      </form>
      <Link href='/dashboard/categories/'>back</Link>
    </div>
  );
};

export default Form;
