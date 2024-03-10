import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
            <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                    <div style={{ marginTop: '0.5rem' }}>
    <h3 style={{ color: '#290DD9', fontSize: '2.25rem', fontWeight: '600', marginLeft: '+5.5rem' }}>Create a New Account</h3>
                        </div>

                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
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
        width: '100%',
        marginTop: '0.5rem',
        padding: '0.75rem', // Adjust as needed
        color: '#718096',
        background: 'transparent',
        outline: 'none',
        border: '1px solid #CBD5E0',
        focus: 'indigo-600', // Note: This may not work as intended, please double-check
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        borderRadius: '0.375rem', // Adjust as needed
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
    }}
/>

                        </div>

                        <div>
    <label style={{ fontSize: '1.5rem', color: '#4B5563', fontWeight: '600' }}>
        Password
    </label>
    <input
        disabled={isRegistering}
        type="password"
        autoComplete='new-password'
        required
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
        style={{
            width: '100%',
            marginTop: '0.5rem',
            padding: '0.75rem', // Adjust as needed
            color: '#718096',
            background: 'transparent',
            outline: 'none',
            border: '1px solid #CBD5E0',
            focus: 'border-indigo-600', // Note: This may not work as intended, please double-check
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '0.375rem', // Adjust as needed
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
        }}
    />
</div>


<div>
    <label style={{ fontSize: '1.5rem', color: '#4B5563', fontWeight: '600' }}>
        Confirm Password
    </label>
    <input
        disabled={isRegistering}
        type="password"
        autoComplete='off'
        required
        value={confirmPassword}
        onChange={(e) => { setconfirmPassword(e.target.value) }}
        style={{
            width: '100%',
            marginTop: '0.5rem',
            padding: '0.75rem', // Adjust as needed
            color: '#718096',
            background: 'transparent',
            outline: 'none',
            border: '1px solid #CBD5E0',
            focus: 'border-indigo-600', // Note: This may not work as intended, please double-check
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '0.375rem', // Adjust as needed
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
        }}
    />
</div>


{errorMessage && (
    <span style={{ color: '#E53E3E', fontWeight: '600' }}>{errorMessage}</span>
)}

<button
    type="submit"
    disabled={isRegistering}
    style={{
        width: '100%',
        padding: '0.5rem 1rem', // Adjust padding as needed
        color: 'white',
        fontSize: '1rem', // Adjust font size as needed
        fontWeight: '600',
        borderRadius: '0.375rem', // Adjust border radius as needed
        background: isRegistering ? '#CBD5E0' : '#4F46E5',
        cursor: isRegistering ? 'not-allowed' : 'pointer',
        boxShadow: isRegistering ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        fontSize: '1.5rem',
        marginLeft: '1rem'
    }}
>
    {isRegistering ? 'Signing Up...' : 'Sign Up'}
</button>

<div style={{ fontSize: '1.5rem', textAlign: 'center' }}>
    Already have an account? {'   '}
    <Link
        to={'/login'}
        style={{
            display: 'inline-block',
            textDecoration: 'underline',
            fontWeight: '600',
            color: '#3182CE',
            textAlign: 'center'
        }}
    >
        Continue
    </Link>
</div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register