import { useForm } from 'react-hook-form';

const Search = ({getData}) => {

    const { register, handleSubmit } = useForm();

    return(
        <form onSubmit={handleSubmit(getData)}>
            <input type='text' {...register('city', {required: true})} />
            <button>Search</button>
        </form>
    )
}

export default Search;