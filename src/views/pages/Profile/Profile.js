import { useParams } from 'react-router-dom';

import MainLayout from '~/views/layouts/MainLayout';

function Profile() {
    const params = useParams();

    return (
        <MainLayout>
            <h1>Profile Page: {params.nickname}</h1>
        </MainLayout>
    );
}

export default Profile;
