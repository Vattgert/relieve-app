import { useRouter } from 'next/router';

const Profile = () => {
    const router = useRouter();
    const { userId } = router.query;

    return (
        <h2>Profile of user {userId}</h2>
    )
}

export default Profile;