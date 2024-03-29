export const validateEmail = (email: string): boolean => {
	const regex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

	return regex.test(email);
};
