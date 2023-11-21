const HomePage = () => {
	return (
		<>
			<main class="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-slate-100 min-h-[100dvh]">
				<div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
					<div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
						<h1 class="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
							Depression
						</h1>
					</div>
					<div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
						<img
							src="https://m1.healio.com/~/media/slack-news/stock-images/fm_im/d/doctor_with_depressed_elderly_patient_adobe.jpg"
							alt=""
							class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
							loading="lazy"
						></img>
						<img
							src="https://www.patientfirst.com/Portals/0/LiveBlog/549/Patient-First-Depression-Symptoms.jpg?ver=LsiGTtKj8yNXXvXOum1UDw%3d%3d"
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
					<p class="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
						<strong>"Depression"</strong> is a common and serious mental illness
						that affects how you feel, the way you think and how you act. It can
						lead to a variety of emotional and physical problems and can
						decrease your ability to function at work and at home. Depression is
						not just a fleeting feeling of sadness or grief; it is a persistent
						and debilitating condition that affects people of all ages, races,
						and socioeconomic backgrounds.
						<br />
						<br />
						Symptoms of depression can vary from mild to severe and can include:{" "}
						<br />
						1. Persistent sadness or loss of interest in activities you once
						enjoyed <br />
						2. Feelings of worthlessness or guilt <br />
						3. Trouble concentrating, making decisions, or remembering things{" "}
						<br />
						4. Changes in appetite or sleep patterns <br />
						5. Fatigue or loss of energy <br />
						6. Thoughts of death or suicide
					</p>
				</div>
			</main>
		</>
	);
};

export default HomePage;
