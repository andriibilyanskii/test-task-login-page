import React, { useState } from 'react';

import { Router } from 'routes';
import { AppContext } from 'context';
import { IUserInfo } from 'interfaces';

import './App.scss';

function App(): React.ReactElement {
	const [email, setEmail] = useState('');
	const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo);
	return (
		<AppContext.Provider
			value={{
				email,
				setEmail,
				userInfo,
				setUserInfo,
			}}
		>
			<Router />
		</AppContext.Provider>
	);
}

export default App;
