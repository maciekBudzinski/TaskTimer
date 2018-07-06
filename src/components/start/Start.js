import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Title from './Title';
import ChangeFormLink from './ChangeFormLink';

const Start = ({
  navigation,
  currentForm,
  changeForm,
  customerLogin,
  isAuthenticated,
  customerRegistration,
  isSuccess,
}) => (
  <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <Content>
      <Title currentForm={currentForm} />
      {currentForm === 'login' && (
        <LoginForm
          customerLogin={customerLogin}
          isAuthenticated={isAuthenticated}
          navigation={navigation}
        />
      )}
      {currentForm === 'register' && (
        <RegisterForm
          customerRegistration={customerRegistration}
          isSuccess={isSuccess}
          changeForm={changeForm}
        />
      )}
      <ChangeFormLink currentForm={currentForm} changeForm={changeForm} />
    </Content>
  </Container>
);

// class Start extends React.Component {
//   login = () => {
//     // Tutaj akcja z reduxa, if ok to navigate
//     const { navigation } = this.props;
//     navigation.navigate('Home');
//   };

//   register = () => {
//     // Tutaj akcja z reduxa, if ok to navigate
//     // const { navigation } = this.props;
//     // navigation.navigate('Home');
//   };

//   render() {
//     const { currentForm, changeForm } = this.props;
//     return (
//       <Container style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//         <Content>
//           <Title currentForm={currentForm} />
//           {currentForm === 'login' && <LoginForm login={this.login} />}
//           {currentForm === 'register' && <RegisterForm register={this.register} />}
//           <ChangeFormLink currentForm={currentForm} changeForm={changeForm} />
//         </Content>
//       </Container>
//     );
//   }
// }

Start.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  currentForm: PropTypes.string.isRequired,
  changeForm: PropTypes.func.isRequired,
  customerLogin: PropTypes.func.isRequired,
  customerRegistration: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default Start;
