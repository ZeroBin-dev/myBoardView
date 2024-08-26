import { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/router";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:1122/auth/login', { username, password });
            localStorage.setItem('token', response.data.jwt);
            router.push('/profile');
        } catch (error) {
            console.error('로그인 실패', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">로그인</button>
        </form>
    );

}