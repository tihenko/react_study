import { useForm } from 'react-hook-form';

const CarForm = () => {
  const { register, reset, handleSubmit } = useForm();
  return (
      <form>
        <div><label><input type="text"/></label></div>
        <div><label><input type="text"/></label></div>
        <div><label><input type="text"/></label></div>
      </form>
  )
};
export { CarForm };
