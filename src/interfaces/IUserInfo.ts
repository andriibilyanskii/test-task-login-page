interface IUserInfo {
	error: number;
	detail: any[];
	timestamp: number;
	access_token: string;
	refresh_token: string;
	token_expire: number;
	refresh_token_expire: number;
}

export default IUserInfo;
