import axios from 'axios';

import { notificationToastFunc } from 'utils';
import { CONSTANTS } from '../constants';

async function fetchData<Type>(
	url: string,
	defaultAPI?: boolean,
	params?: {
		method?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
		body?: Type;
	},
	other?: {
		setIsLoading?: (e: boolean) => void;
	}
) {
	other?.setIsLoading?.(true);

	const _url = CONSTANTS.API_ENDPOINT + CONSTANTS.API_VERSION + url;

	return await axios({
		method: params?.method || 'post',
		url: defaultAPI ? _url : url,
		headers: { 'Content-Type': 'application/json' },
		...(params?.body
			? {
					data: params?.body,
				}
			: {}),
	})
		.then((res) => ({
			data: res.data,
			status: res?.status,
		}))
		.then(({ data, status }) => {
			if (status !== 200) {
				notificationToastFunc({
					type: 'error',
					text: data?.message,
				});
			}

			return data;
		})
		.catch((error) => {
			notificationToastFunc({
				type: 'error',
				text: String(error.response.data.detail),
			});
		})
		.finally(() => {
			other?.setIsLoading?.(false);
		});
}

export { fetchData };
