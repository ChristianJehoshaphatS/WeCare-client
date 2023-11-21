import logo from "../assets/wecare.png";
const LoginPage = () => {
	return (
		<>
			<div className="flex min-h-[100dvh] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-[15rem] w-auto"
						src={logo}
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#2596be]">
						Sign in to WeCare
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="username"
								className="block text-l font-medium leading-6 text-[#2596be]"
							>
								Username
							</label>
							<div className="mt-2">
								<input
									id="username"
									name="username"
									type="text"
									autoComplete="name"
									required
									className="block h-12 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2596be] sm:text-sm sm:leading-6 bg-slate-300"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-l font-medium leading-6 text-[#2596be]"
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-[#2596be] hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block h-12 px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2596be] sm:text-sm sm:leading-6 bg-slate-300"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-[#2596be] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2596be]"
							>
								Sign in
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Not a member?{" "}
						<a
							href="#"
							className="font-semibold leading-6 text-[#2596be] hover:text-indigo-500"
						>
							Start your WeCare Journey
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
