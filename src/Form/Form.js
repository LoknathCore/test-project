import React from 'react'
import { useForm } from 'react-hook-form';
import Select from '../components/Select/Select';
import { Input, TextInput } from '../Inputs/input'
import Inputs from '../Inputs/Inputs'

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    // console.log(JSON.stringify(data))
    console.log(data)
  };

  return (

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input placeholder='Name' defaultValue="test" {...register("name")} /><br />

    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input placeholder='Email' {...register("email", { required: true })} /><br />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}
    //   <input type="submit" />

    // </form>

    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Input defaultValue={'name'} register={register} required style={{ border: "1px solid red", marginBottom: '10px' }} /><br />
      <Input name="last Name" register={register} required style={{ border: "1px solid red", marginBottom: '10px' }} /> <br />
      <Input name="email" type="email" register={register} required style={{ border: "1px solid red", marginBottom: '10px' }} /><br /> */}
      <Select register={{ ...register("link"), required: true }} />
      <button type="submit" className=''> submit</button>

    </form>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <select {...register("gender")}>
    //     <option value="female">female</option>
    //     <option value="male">male</option>
    //     <option value="other">other</option>
    //   </select>
    //   <input type="submit" />
    // </form>

    //<form /> 

  )
}

export default Form;