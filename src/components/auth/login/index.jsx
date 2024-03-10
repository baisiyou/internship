import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../context/authContext'
const Login = () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            doSignInWithGoogle().catch(err => {
                setIsSigningIn(false)
            })
        }
    }

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                    <div style={{ marginTop: '0.5rem' }}>
    <h3 style={{ color: '#290DD9', fontSize: '2.25rem', fontWeight: '600', marginLeft: '+5.5rem' }}>Welcome To Ink World</h3>
</div>


                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-5"
                    >
                        <div>
                        <label style={{ fontSize: '1.5rem', color: '#4B5563', fontWeight: '600' }}>
    Email
</label>

    <input
        type="email"
        autoComplete='email'
        required
        value={email} 
        onChange={(e) => { setEmail(e.target.value) }}
        style={{
            width: "100%",
            marginTop: "0.5rem", /* Assuming mt-2 translates to 0.5rem */
            padding: "0.75rem 1.5rem", /* Assuming px-3 translates to 1.5rem */
            color: "#7f8c8d", /* Gray shade closest to text-gray-500 */
            backgroundColor: "transparent",
            outline: "none",
            border: "1px solid transparent",
            borderColor: "indigo", /* Assuming focus:border-indigo-600 translates to indigo */
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)", /* Shadow equivalent for shadow-sm */
            borderRadius: "0.375rem", /* Assuming rounded-lg translates to 0.375rem */
            transition: "all 0.3s ease", /* Assuming transition duration-300 translates to all 0.3s ease */
        }}
    />
</div>


<div>
<label style={{ fontSize: '1.5rem', color: '#4B5563', fontWeight: '600' }}>
    Password
</label>
    <input
        type="password"
        autoComplete='current-password'
        required
        value={password} 
        onChange={(e) => { setPassword(e.target.value) }}
        style={{
            width: "100%",
            marginTop: "0.5rem",
            padding: "0.75rem 1.5rem",
            color: "#7f8c8d",
            backgroundColor: "transparent",
            outline: "none",
            border: "1px solid transparent",
            borderColor: "indigo",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "0.375rem",
            transition: "all 0.3s ease",
        }}
    />
</div>

{errorMessage && (
    <span style={{ color: '#e53e3e', fontWeight: 'bold' }}>{errorMessage}</span>
)}

<button
    type="submit"
    disabled={isSigningIn}
    style={{
        width: '100%',
        padding: '0.5rem 1rem',
        color: 'white',
        fontFamily: 'inherit',
        borderRadius: '0.375rem',
        cursor: isSigningIn ? 'not-allowed' : 'pointer',
        backgroundColor: isSigningIn ? '#cbd5e0' : '#4f46e5',
        boxShadow: isSigningIn ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s, box-shadow 0.3s',
        marginLeft: '1rem' 
    }}
>
    <div style={{ fontSize: '1.5rem' }}>
    {isSigningIn ? 'Signing In...' : 'Sign In'}
</div>
</button>

</form>
<p style={{ textAlign: 'center', fontSize: '1.5rem' }}>Don't have an account? <Link to={'/register'} style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: '1.5rem'}}>Sign up</Link></p>
<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
    <div style={{ borderBottom: '2px solid', marginBottom: '0.625rem', marginRight: '0.625rem', width: '50%' }}></div>
    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>OR</div>
    <div style={{ borderBottom: '2px solid', marginBottom: '0.625rem', marginLeft: '0.625rem', width: '50%' }}></div>
</div>

<button
  disabled={isSigningIn}
  onClick={(e) => { onGoogleSignIn(e) }}
  className={`button ${isSigningIn ? 'disabled' : ''}`}
  style={{ marginLeft: '7rem' }}>
  
  <div className="content" style={{ fontSize: '1.5rem' }}>
    {isSigningIn ? 'Signing In...' : 'Continue with Google'}
  </div>
</button>

                </div>
            </main>
        </div>
    )
}


export default Login