// Hooks
import { useAddUserMutation } from '../generated/graphql';
import { useRouter } from 'next/router';

// Components
import Container from '../components/Container';
import InputField from '../components/InputField';
import { Formik, Form } from 'formik';
import { Button } from '@chakra-ui/react';

const Register: React.FC = () => {
  const [register, {}] = useAddUserMutation();
  const router = useRouter();

  return (
    <Container>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ variables: values });
          const error = response.data?.addUser?.error;
          if (error) {
            if (error.fieldName === 'username') {
              setErrors({ username: error.message });
            }
          } else {
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              placeholder="Username"
              marginBottom="10px"
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              marginBottom="20px"
            />
            <Button type="submit" isLoading={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
