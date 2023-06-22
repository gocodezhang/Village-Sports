import React, { useContext } from 'react';
import LinearView from '../sharedComponents/LinearView.jsx';
import UsernameContext from '../sharedComponents/UsernameContext.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import Interest from './Interest.jsx';
import AboutMe from './AboutMe.jsx';

function Profile() {
  const { userProfile } = useContext(UsernameContext);
  console.log(userProfile);
  return (
    <LinearView>
      {Object.keys(userProfile).length === 0 ? null
        : (
          <>
            <ProfilePicture picture={userProfile.picture} name={userProfile.name} />
            <Interest interests={userProfile.interests} />
            <AboutMe aboutMe={userProfile.aboutMe} />
          </>
        )}
    </LinearView>
  );
}

export default Profile;
