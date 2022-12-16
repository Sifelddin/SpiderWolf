import { Category, Game } from '@prisma/client';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../../utility/fetchData';

type GameInputs = {
  developer: String;
  editor: String;
  releaseDate: string | Date;
  genre: String;
  link: String;
  shortDescription: String;
  description?: String;
  highlighted?: Boolean;
  categoryId: String;
  title: String;
};

const Form = (props: { categories: Category[]; game?: Game }) => {
  const { categories, game } = props;
  const Router = useRouter();
  const { register, handleSubmit } = useForm<GameInputs>();

  const onSubmit = (data: GameInputs) => {
    data.releaseDate = new Date(data.releaseDate);

    postData(
      data,
      'http://localhost:3000/',
      `api/game/${game ? game.id : ''}`,
      game ? 'PUT' : 'POST',
    )
      .then(() => Router.push('/dashboard/games'))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor='title'>Title</label>
        <div>
          <input
            defaultValue={game?.title}
            id='title'
            {...register('title', { required: true })}
          />
        </div>
        <label htmlFor='editor'>Editor</label>
        <div>
          <input
            defaultValue={game?.editor === null ? undefined : game?.editor}
            id='editor'
            {...register('editor', { required: true })}
          />
        </div>
        <label htmlFor='releaseDate'>Release Date</label>
        <div>
          <input
            type='date'
            id='releaseDate'
            {...register('releaseDate', { required: true })}
          />
        </div>
        <label htmlFor='genre'>Genre</label>
        <div>
          <input
            defaultValue={game?.genre}
            id='genre'
            {...register('genre', { required: true })}
          />
        </div>
        <label htmlFor='link'>Link</label>
        <div>
          <input
            defaultValue={game?.link}
            id='link'
            {...register('link', { required: true })}
          />
        </div>
        <label htmlFor='shortDescription'>Short Description</label>
        <div>
          <input
            defaultValue={game?.shortDescription}
            type='text'
            id='shortDescription'
            {...register('shortDescription', { required: true })}
          />
        </div>
        <label htmlFor='category'>Category</label>
        <div>
          {' '}
          <select {...register('categoryId', { required: true })} id='category'>
            <option value=''>select category</option>
            {categories.map((cat: Category) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              );
            })}
          </select>
        </div>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

export default Form;

// title: "Pirate's Dices",
// developer: 'Lorem ipsum',
// editor: 'Lorem ipsum',
// release_date: '2022',
// genre: 'Lorem ipsum',
// image: pirate,
// video: 'https://www.youtube.com/watch?v=dEu5XGRfSDA',
// link: '',
// short_description:
//     'Haec igitur Epicuri non probo, inquam. De cetero vellem equidem aut ipse doctrinis fuisset instructior est enim, quod tibi ita videri necesse est, non satis politus iis arfibus, quas qui tenent, eruditi appellan aut ne deterruisset alios a studiis.',
// description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue. Bibendum ut tristique et egestas quis ipsum. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Id velit ut tortor pretium. Facilisis magna etiam tempor orci eu lobortis elementum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Placerat vestibulum lectus mauris ultrices eros in cursus. Maecenas accumsan lacus vel facilisis volutpat. Dolor magna eget est lorem. Morbi non arcu risus quis varius quam.',
// id: 1,
