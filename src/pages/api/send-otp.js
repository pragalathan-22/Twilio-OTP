import { sendOTP } from '@/utils/twilio';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send({ message: 'Only POST requests allowed' });

    const { phoneNumber } = req.body;
    if (!phoneNumber) return res.status(400).send({ message: 'Phone number is required' });

    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    try {
        await sendOTP(phoneNumber, otp);
        res.status(200).send({ message: 'OTP sent successfully', otp }); // NOTE: Do not send OTP back in production
    } catch (error) {
        res.status(500).send({ message: 'Failed to send OTP', error: error.message });
    }
}
