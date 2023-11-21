import {Link} from "react-router-dom";

const LandingPage = () => {
	return (
		<>
			<main class="flex flex-col justify-center py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-slate-100 min-h-[100dvh]">
				<div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
					<div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
						<h1 class="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
							Your support network, right at your fingertips.
						</h1>
						<h1 class="text-4xl leading-4 font-medium text-white dark:sm:text-slate-800 my-4 sm:block hidden">
							Welcome to WeCare
						</h1>
						<h1 class="text-4xl leading-4 font-medium text-white dark:sm:text-slate-800 my-4 sm:hidden">
							WeCare
						</h1>
					</div>
					<div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
						<img
							src="https://www.sciencenews.org/wp-content/uploads/2021/04/042521_videophone_feat_1440_REV-1440x700.jpg"
							alt=""
							class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
							loading="lazy"
						></img>
						<img
							src="https://blog.encompasshealth.com/wp-content/uploads/2020/08/covid-virtual-support-group.jpg?w=960"
							alt=""
							class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
							loading="lazy"
						></img>
						<img
							src="https://png.pngtree.com/thumb_back/fw800/background/20221210/pngtree-elderly-patient-conversing-on-a-video-call-within-hospital-room-photo-image_43312524.jpg"
							alt=""
							class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
							loading="lazy"
						></img>
					</div>

					<div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
						<Link to="/login">
							<button
								type="button"
								class="bg-[#2596be] text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
							>
								Connect
							</button>
						</Link>
					</div>
					<p class="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
						Introducing <strong>"WeCare"</strong>, a safe and supportive space
						for individuals facing medical challenges like leukemia, cancer, or
						depression. Our application provides a platform for group chats,
						video calls, and one-on-one interactions, enabling you to connect
						with others who understand your journey. Through meaningful
						interactions and shared experiences, you can find strength,
						inspiration, and a sense of belonging.
					</p>
				</div>
			</main>
		</>
	);
};

export default LandingPage;
