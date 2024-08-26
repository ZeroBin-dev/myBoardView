import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:1122/profile', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                // 상태 업데이트: 응답에서 데이터 추출 및 설정
                setProfile(response.data);
            } catch (error) {
                console.error('프로필 패치 오류', error);
            }
        };
        fetchProfile();

    }, []);

    if (!profile) return <div>Loading...</div>;

    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {profile.username}</p>
        </div>
    );
}