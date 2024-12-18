import { useState } from 'react';
import { useRouter } from 'next/router';  // Import useRouter from next/router
import styles from '../styles/LoginForm.module.css';

const LoginForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [serverOtp, setServerOtp] = useState(null);
    const [step, setStep] = useState(1); // Step 1: Enter phone, Step 2: Enter OTP
    const router = useRouter();  // Initialize useRouter hook

    const sendOtp = async () => {
        try {
            const res = await fetch('/api/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber }),
            });
            const data = await res.json();
            if (res.ok) {
                setServerOtp(data.otp); // NOTE: For production, do not save OTP on client-side
                setStep(2);
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Failed to send OTP');
        }
    };

    const verifyOtp = async () => {
        try {
            const res = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ inputOtp: otp, serverOtp }),
            });
            const data = await res.json();
            if (res.ok) {
                alert('Login successful!');
                router.push('/MainPage');  // Navigate to MainPage upon successful login
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('Failed to verify OTP');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {step === 1 && (
                    <div className={styles.form}>
                        <h2 className={styles.title}>Login</h2>
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            className={styles.input}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <button className={styles.button} onClick={sendOtp}>Send OTP</button>
                    </div>
                )}
                {step === 2 && (
                    <div className={styles.form}>
                        <h2 className={styles.title}>Verify OTP</h2>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            className={styles.input}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button className={styles.button} onClick={verifyOtp}>Verify OTP</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
