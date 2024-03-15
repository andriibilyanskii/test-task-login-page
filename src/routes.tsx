import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, ForgotPassword, Register } from 'pages';

export const Router = () => {
	return (
		<Routes>
			<Route index element={<Navigate replace to='/auth/login' />} />
			<Route path={'/auth'}>
				<Route path='login' element={<LoginPage />} />
				<Route path='forgot-password' element={<ForgotPassword />} />
				<Route path='register' element={<Register />} />
			</Route>

			<Route path='*' element={<div />} />
		</Routes>
	);
};
