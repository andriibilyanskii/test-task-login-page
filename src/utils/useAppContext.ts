import { useContext } from 'react';

import { AppContext } from 'context';

function useAppContext() {
	const context = useContext(AppContext);

	return context;
}

export { useAppContext };
