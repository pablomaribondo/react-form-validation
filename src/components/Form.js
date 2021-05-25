import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';

const Form = () => {
  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <Input
          label="Full name"
          name="name"
          id="name"
          // Value={}
          // onChange={}
          // error={}
        />
        <Input
          label="Email"
          name="email"
          id="email"
          // Value={}
          // onChange={}
          // error={}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          id="password"
          // Value={}
          // onChange={}
          // error={}
        />
        <Input
          type="password"
          label="Password"
          name="confirmPassword"
          id="confirmPassword"
          // Value={}
          // onChange={}
          // error={}
        />
        <Radio
          label="Gender"
          name="gender"
          choices={[
            { id: 'female', label: 'Female', value: 'female' },
            { id: 'male', label: 'Male', value: 'male' }
          ]}
          // Error={}
        />
        <Select
          label="Difficulty"
          name="difficulty"
          id="difficulty"
          options={[
            { label: 'Please select a difficulty', value: '' },
            { label: 'Easy', value: 'easy' },
            { label: 'Medium', value: 'medium' },
            { label: 'Hard', value: 'hard' }
          ]}
          // Value={}
          // onChange={}
          // error={}
        />
        <Input
          type="file"
          label="Image"
          name="image"
          id="image"
          // OnChange={}
          // error={}
        />
        <Textarea
          id="description"
          name="description"
          label="Description"
          // Value={}
          // onChange={}
        />
        <Checkbox
          label="Terms and conditions"
          id="terms"
          name="terms"
          // Value={}
          // onChange={}
          // error={}
        />
        <Button type="submit" title="Submit" />
      </form>
    </div>
  );
};

export default Form;
