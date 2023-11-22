import logo from "../assets/wecare.png";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
	const navigate = useNavigate();

	const [registerInput, setRegisterInput] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => [
		setRegisterInput({...registerInput, [e.target.name]: e.target.value}),
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		const {data} = await axios.post(
			"http://localhost:3000/register",
			registerInput
		);
		console.log(data);
		navigate("/login");
	};
	return (
		<div className="flex min-h-[100dvh] flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-100">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					className="mx-auto h-[15rem] w-auto"
					src={logo}
					alt="Your Company"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#2596be]">
					Register to WeCare
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={handleSubmit}>
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
								value={registerInput.username}
								onChange={handleChange}
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
							<div className="text-sm hidden">
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
								value={registerInput.password}
								onChange={handleChange}
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
							Register
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Already a member?{" "}
					<a
						href="/login"
						className="font-semibold leading-6 text-[#2596be] hover:text-indigo-500"
					>
						Sign in
					</a>
				</p>
			</div>
		</div>
	);
};

export default RegisterPage;
