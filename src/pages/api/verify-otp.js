export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send({ message: 'Only POST requests allowed' });

    const { inputOtp, serverOtp } = req.body;
    console.log("Input OTP:", inputOtp, "Server OTP:", serverOtp);  // Debug log

    if (!inputOtp || !serverOtp) return res.status(400).send({ message: 'OTP is required' });

    // Convert to string and trim any whitespace for comparison
    if (String(inputOtp).trim() === String(serverOtp).trim()) {
        return res.status(200).send({ message: 'OTP verified successfully' });
    }

    res.status(400).send({ message: 'Invalid OTP' });
}
