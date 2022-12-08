import { GraphQLResult } from '@aws-amplify/api-graphql';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CreateUserCMutation, CreateUserCMutationVariables } from '../API';
import { createUserC } from '../graphql/customMutations';
import { WeatherLoader } from './';

// props from Login email, password

export const Register: React.FC = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const createNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
      const passwordChecker =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
      if (passwordChecker.test(password)) {
        setLoading(true);
        await Auth.signUp({
          username: email,
          password,
          attributes: { email }
        });
        const input: CreateUserCMutationVariables = {
          input: {
            email,
            firstName,
            lastName,
            growingSeasonLength: 0,
            firstGdd45: '',
            lastGdd45: '',
            hardinessZone: ''
          }
        };
        const graphQLResult = (await API.graphql(
          graphqlOperation(createUserC, input)
        )) as GraphQLResult<CreateUserCMutation>;

        toast.success(
          `Account Creation Successful! Please confirm your email address by entering the code we sent to ${graphQLResult.data?.createUser?.email} on the next page...`
        );
        setTimeout(
          () => navigate('/emailConfirmation', { state: { email, password } }),
          3000
        );
      } else {
        setLoading(false);
        toast.warning(
          'The password you created does not meet our requirements: minimum of 8 characters, at least one uppercase and lowercase letter, one number and one special character: @,$,!,%,*,? or &. Please create a new password and try again.'
        );
      }
    } catch (err) {
      setLoading(false);
      toast.error(
        'There was an error while attempting to create your user user account and validate your email address, if you already have an account with us, please log in using your email and password, or reset your password using the "Forgot Password" link..'
      );
    }
  };

  return loading ? (
    <>
      <ToastContainer />
      <WeatherLoader noText={false} />
    </>
  ) : (
    <>
      <ToastContainer />
      <section
        id="registerBody"
        style={loading ? { visibility: 'hidden' } : { visibility: 'visible' }}
      >
        <form
          id="registerForm"
          onSubmit={(e) => {
            void createNewUser(e);
          }}
        >
          <section className="registerSections">
            <h3 className="registerSectionText">Name</h3>
            <input
              placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></input>
            <input
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></input>
          </section>
          <section className="registerSections">
            <h3 className="registerSectionText">Email</h3>
            <input
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </section>
          <section className="registerSections">
            <h3 className="registerSectionText">Password</h3>
            <h4>
              Please enter a password that is a minimum of 8 characters and
              contains: at least one uppercase and lowercase letter, one number
              and one special character \(@,$,!,%,*,? or &\){' '}
            </h4>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </section>
        </form>
        <article className="registerWelcomeText">
          <h1>Welcome to Our Community!</h1>
          <h4>
            {' '}
            Registering for an account with BackyardRestoration.net will provide
            you with access to a series of free tools designed to help you plan
            and complete your own backyard ecological restoration projects.{' '}
          </h4>
        </article>
      </section>
      <Link id="backToLoginLink" to={'/'}>
        Back to Login
      </Link>
    </>
  );
};
