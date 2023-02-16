import React from 'react';

interface ProfilePicProps {
    pict: string;
    alt: string;
}

const ProfilePic: React.FC<ProfilePicProps> = ({ pict, alt }) => {
    return <img src={pict} alt={alt} className="profile-pic" />;
};

export default ProfilePic;
