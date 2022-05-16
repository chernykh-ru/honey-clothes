import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { AuthContainer } from './Auth.styles'

const Auth = () => {
  return (
    <AuthContainer>
      <SignIn />
      <SignUp />
    </AuthContainer>
  )
}

export default Auth
