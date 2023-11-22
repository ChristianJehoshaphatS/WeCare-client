import {useEffect, useState} from "react";
import axios from "axios";
const HomePage = () => {
	const [openModal, setOpenModal] = useState(false);
	useEffect(() => {
		const first = localStorage.getItem("firstTime");
		if (first === "true") {
			setOpenModal(true);
		}
		const fetchGroups = async () => {
			const {data} = await axios.get("http://localhost:3000/usergroup", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("access_token")}`,
				},
			});
			console.log(data);
			const group = [];
			data?.forEach((el) => {
				console.log(el.Group.title);
				group.push(el.Group.title);
			});
			setJoinedGroup({
				...joinedGroup,
				[group[0]]: true,
				[group[1]]: true,
				[group[2]]: true,
				[group[3]]: true,
				[group[4]]: true,
				[group[5]]: true,
				[group[6]]: true,
				[group[7]]: true,
			});
		};
		fetchGroups();
	}, []);

	const [check, setCheck] = useState([]);
	const [joinedGroup, setJoinedGroup] = useState({
		Depression: false,
		"Anxiety Disorders": false,
		Schizophrenia: false,
		"Bipolar Disorder": false,
		"Diabetes Mellitus": false,
		Hypertension: false,
		Osteoarthritis: false,
		Asthma: false,
	});

	const checkboxes = [
		{
			id: 214844,
			name: "Depression",
		},
		{
			id: 214845,
			name: "Anxiety Disorders",
		},
		{
			id: 214846,
			name: "Schizophrenia",
		},
		{
			id: 214847,
			name: "Bipolar Disorder",
		},
		{
			id: 214848,
			name: "Diabetes Mellitus",
		},
		{
			id: 214849,
			name: "Hypertension",
		},
		{
			id: 214850,
			name: "Osteoarthritis",
		},
		{
			id: 214851,
			name: "Asthma",
		},
	];

	const editCheck = (event) => {
		let checkValue;
		let checked;
		if (event) {
			checked = event?.target?.checked;
			checkValue = event?.target?.attributes?.id?.value;
		}

		console.log(check);
		if (!checked) {
			let newFilter = check.filter((el) => el.id != checkValue);
			setCheck(newFilter);
		} else {
			setCheck([...check, {id: event.target.id, title: event.target.name}]);
		}
	};

	const handleSubmit = async () => {
		try {
			const {data} = await axios.post(
				"http://localhost:3000/usergroup",
				check,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("access_token")}`,
					},
				}
			);
			console.log(data);

			await axios.patch(
				"http://localhost:3000/user",
				{},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("access_token")}`,
					},
				}
			);

			localStorage.setItem("firstTime", false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-slate-100 min-h-[100dvh]">
				<dialog
					id="my_modal_4"
					className={openModal ? "modal modal-open" : "modal"}
				>
					<div className="modal-box w-11/12 max-w-5xl">
						<h3 className="font-bold text-lg">
							Hello! This is your first time signing in to WeCare.
						</h3>
						<p className="py-4">Please select one or more topic of interest</p>
						<div className="flex flex-wrap">
							{checkboxes.map((el) => {
								return (
									<label
										key={el.id}
										className="label cursor-pointer mx-4 w-1/5 p-2 hover:bg-black/40 rounded-xl"
									>
										<span className="label-text mx-4 hover:text-slate-100">
											{el.name}
										</span>
										<input
											id={el.id}
											type="checkbox"
											className="checkbox"
											name={el.name}
											onChange={editCheck}
										/>
									</label>
								);
							})}
						</div>
						<div className="modal-action">
							<form method="dialog">
								{/* if there is a button, it will close the modal */}
								<button
									className="btn"
									onClick={() => {
										handleSubmit();
										setOpenModal(false);
									}}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</dialog>
				{/* Depression */}
				<br />

				<br />
				{joinedGroup.Depression && (
					<>
						<div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
							<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
								<h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
									Depression
								</h1>
							</div>
							<div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
								<img
									src="https://m1.healio.com/~/media/slack-news/stock-images/fm_im/d/doctor_with_depressed_elderly_patient_adobe.jpg"
									alt=""
									className="w-full h-60 object-cover rounded-lg sm:h-72 sm:col-span-2 lg:col-span-full"
									loading="lazy"
								></img>
								<img
									src="https://www.patientfirst.com/Portals/0/LiveBlog/549/Patient-First-Depression-Symptoms.jpg?ver=LsiGTtKj8yNXXvXOum1UDw%3d%3d"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
								<img
									src="https://png.pngtree.com/thumb_back/fw800/background/20221210/pngtree-elderly-patient-conversing-on-a-video-call-within-hospital-room-photo-image_43312524.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
							</div>
							<p className="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
								<strong>"Depression"</strong> is a common and serious mental
								illness that affects how you feel, the way you think and how you
								act. It can lead to a variety of emotional and physical problems
								and can decrease your ability to function at work and at home.
								Depression is not just a fleeting feeling of sadness or grief;
								it is a persistent and debilitating condition that affects
								people of all ages, races, and socioeconomic backgrounds.
								<br />
								<br />
								Symptoms of depression can vary from mild to severe and can
								include: <br />
								1. Persistent sadness or loss of interest in activities you once
								enjoyed <br />
								2. Feelings of worthlessness or guilt <br />
								3. Trouble concentrating, making decisions, or remembering
								things <br />
								4. Changes in appetite or sleep patterns <br />
								5. Fatigue or loss of energy <br />
								6. Thoughts of death or suicide
							</p>
						</div>
						<hr className="w-full my-6 border-solid border-[#2596be] border-y-[1px]" />
					</>
				)}

				{/* Anxiety Disorders */}
				{joinedGroup["Anxiety Disorders"] && (
					<>
						<div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
							<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
								<h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
									Anxiety Disorders
								</h1>
							</div>
							<div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
								<img
									src="https://apollohealthlib.blob.core.windows.net/health-library/2021/10/Social-Anxiety-Disorder.jpg"
									alt=""
									className="w-full h-60 object-cover rounded-lg sm:h-72 sm:col-span-2 lg:col-span-full"
									loading="lazy"
								></img>
								<img
									src="https://b3029661.smushcdn.com/3029661/wp-content/uploads/shutterstock_1997810168-980x490.jpg?lossy=1&strip=1&webp=1"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
								<img
									src="https://www.amenclinics.com/wp-content/uploads/2022/08/Blog-Difference-Between-Situational-Anxiety-and-an-Anxiety-Disorder_800x400-1.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
							</div>
							<p className="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
								<strong>"Anxiety disorders"</strong> are a group of mental
								illnesses characterized by excessive worry, fear, and tension.
								These feelings can interfere with daily activities and cause
								significant distress. Anxiety disorders are the most common
								mental illness in the United States, affecting 40 million adults
								in the United States age 18 and older, or 18.1% of the
								population every year. Anxiety disorders are highly treatable,
								yet only 36.9% of those suffering receive treatment.
								<br />
								<br />
								Symptoms of anxiety disorders <br />
								The symptoms of anxiety disorders can vary from person to
								person, but they often include: <br />
								<br />
								1. Excessive worry about everyday things <br />
								2. Feelings of fear, panic, or dread <br />
								3. Rapid heart rate <br />
								4. Sweating <br />
								5. Trembling <br />
								6. Muscle tension <br />
								7. Difficulty concentrating <br />
								8. Sleep problems <br />
								9. Irritability <br />
								10. Avoidance of feared objects or situations
							</p>
						</div>

						<hr className="w-full my-6 border-solid border-[#2596be] border-y-[1px]" />
					</>
				)}

				{/* Schizophrenia */}
				{joinedGroup.Schizophrenia && (
					<>
						<div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
							<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
								<h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
									Schizophrenia
								</h1>
							</div>
							<div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
								<img
									src="https://shsinc.org/wp-content/uploads/2022/05/shutterstock_1907039458-980x653.jpg"
									alt=""
									className="w-full h-60 object-cover rounded-lg sm:h-72 sm:col-span-2 lg:col-span-full"
									loading="lazy"
								></img>
								<img
									src="https://medicaldialogues.in/h-upload/2020/01/20/123284-schizophrenia.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
								<img
									src="https://www.medindia.net/health-images/symptoms-of-schizophrenia.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
							</div>
							<p className="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
								<strong>"Schizophrenia"</strong> is a chronic mental illness
								characterized by a breakdown of an individual's ability to
								perceive reality. People with schizophrenia may experience a
								range of symptoms, including:
								<br />
								<br />
								1. Hallucinations: These are experiences that seem real but are
								not actually there. For example, a person with schizophrenia
								might hear voices or see things that are not there. <br />
								<br />
								2. Delusions: These are false beliefs that a person holds onto
								even when there is evidence to the contrary. For example, a
								person with schizophrenia might believe that they are being
								persecuted or that they have special powers. <br />
								<br />
								3. Disorganized thinking and speech: This can make it difficult
								for people with schizophrenia to communicate effectively. They
								may speak in a rapid or incoherent way, or they may have trouble
								staying on topic. <br />
								<br />
								4. Negative symptoms: These are symptoms that involve a loss of
								normal functions. For example, a person with schizophrenia might
								show a lack of motivation, interest, or pleasure in activities
								that they once enjoyed. <br />
								<br />
							</p>
						</div>

						<hr className="w-full my-6 border-solid border-[#2596be] border-y-[1px]" />
					</>
				)}

				{/* Bipolar Disorder */}
				{joinedGroup["Bipolar Disorder"] && (
					<>
						<div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
							<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
								<h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
									Bipolar Disorder
								</h1>
							</div>
							<div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
								<img
									src="https://hips.hearstapps.com/hmg-prod/images/766/8-questions-therapists-ask-to-diagnose-bipolar-disorder-main-1499899746.jpg"
									alt=""
									className="w-full h-60 object-cover rounded-lg sm:h-72 sm:col-span-2 lg:col-span-full"
									loading="lazy"
								></img>
								<img
									src="https://aminoco.com/cdn/shop/articles/FeaturedImage_Schizo.jpg?v=1592868680"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
								<img
									src="https://www.myhealth1st.com.au/static/assets/images/6Tfsw9wQQbvjxjZYnDzBQy/bipolar-disorder.png"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
							</div>
							<p className="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
								<strong>"Bipolar Disorder"</strong> , formerly known as
								manic-depressive illness or manic depression, is a mental health
								condition that causes extreme mood swings that include emotional
								highs (mania or hypomania) and lows (depression). These mood
								swings can affect sleep, energy, activity levels, judgment,
								behavior, and the ability to think clearly.
								<br />
								<br />
								People with bipolar disorder can experience both manic and
								depressive episodes, but not everyone will experience both types
								of episodes. Some people may only experience manic or depressive
								episodes, while others may experience a mix of both.
								<br />
								<br />
								Manic episodes are characterized by: <br />
								<br />
								1. Elevated mood <br />
								2. Increased energy <br />
								3. Reduced need for sleep <br />
								4. Racing thoughts <br />
								5. Increased risk-taking behavior <br />
								<br />
								Depressive episodes are characterized by: <br />
								<br />
								1. Sadness or irritability <br />
								2. Loss of interest or pleasure <br />
								3. Fatigue or low energy <br />
								4. Difficulty concentrating or making decisions <br />
								5. Changes in appetite or sleep patterns <br />
								6. Thoughts of death or suicide
							</p>
						</div>
						<hr className="w-full my-6 border-solid border-[#2596be] border-y-[1px]" />
					</>
				)}

				{/* Diabetes */}
				{joinedGroup["Diabetes Mellitus"] && (
					<>
						<div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
							<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
								<h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
									Diabetes
								</h1>
							</div>
							<div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
								<img
									src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/12/doctor-patient-home-diabetes-1296x728-header-1296x729.jpg?w=1155&h=2268"
									alt=""
									className="w-full h-60 object-cover rounded-lg sm:h-72 sm:col-span-2 lg:col-span-full"
									loading="lazy"
								></img>
								<img
									src="https://resources.amedisys.com/hubfs/Nursing-Care-Plan-Diabetes.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
								<img
									src="https://diabetesonthenet.com/wp-content/uploads/Young-adult-type-2-diabetes-iStock-1387024489.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
							</div>
							<p className="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
								<strong>"Diabetes"</strong> is a chronic health condition that
								affects how your body turns food into energy. There are two main
								types of diabetes: type 1 and type 2.
								<br />
								<br />
								Type 1 diabetes is an autoimmune disease that occurs when your
								body's immune system attacks and destroys the cells in your
								pancreas that produce insulin. Insulin is a hormone that helps
								your body use glucose for energy. Without insulin, glucose
								builds up in your blood, causing high blood sugar levels. Type 1
								diabetes is typically diagnosed in children and young adults,
								but it can occur at any age.
								<br />
								<br />
								Type 2 diabetes is the most common type of diabetes. It occurs
								when your body doesn't produce enough insulin or doesn't use
								insulin effectively. This can cause high blood sugar levels.
								Type 2 diabetes is often linked to lifestyle factors such as
								obesity and inactivity.
								<br />
								<br />
								Gestational diabetes: This type of diabetes develops during
								pregnancy. It typically goes away after the baby is born, but
								women with gestational diabetes are at an increased risk of
								developing type 2 diabetes later in life.
								<br />
								<br />
								Other types of diabetes: There are a number of other less common
								types of diabetes, including maturity-onset diabetes of the
								young (MODY), secondary diabetes, and cystic fibrosis-related
								diabetes.
							</p>
						</div>

						<hr className="w-full my-6 border-solid border-[#2596be] border-y-[1px]" />
					</>
				)}

				{/* Hypertension */}
				{joinedGroup.Hypertension && (
					<>
						<div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
							<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
								<h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
									Hypertension
								</h1>
							</div>
							<div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
								<img
									src="https://drkumo.com/wp-content/uploads/2023/01/hypostatic-hypertension-doctor-measures-patient-blood-pressure-1024x536.webp"
									alt=""
									className="w-full h-60 object-cover rounded-lg sm:h-72 sm:col-span-2 lg:col-span-full"
									loading="lazy"
								></img>
								<img
									src="https://myheart.net/wp-content/uploads/2013/06/hypertension.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
								<img
									src="https://www.aafp.org/content/dam/brand/aafp/news/2022-december/hypertension-guidance800.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
							</div>
							<p className="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
								<strong>"Hypertension"</strong> also known as high blood
								pressure, is a chronic medical condition in which the blood
								pressure in the arteries is persistently elevated. Blood
								pressure is the force exerted by the circulating blood upon the
								walls of blood vessels. If left untreated, hypertension can lead
								to a number of serious complications, including heart disease,
								stroke, and kidney failure.
								<br />
								<br />
								Symptoms <br />
								Hypertension is often referred to as the "silent killer" because
								it often has no symptoms. However, some people with hypertension
								may experience symptoms such as:
								<br />
								<br />
								1. Headaches <br />
								2. Nosebleeds <br />
								3. Fatigue <br />
								4. Nausea <br />
								5. Vomiting <br />
								6. Confusion <br />
								7. Anxiety <br />
								8. Chest pain <br />
								9. Muscle tremors
							</p>
						</div>

						<hr className="w-full my-6 border-solid border-[#2596be] border-y-[1px]" />
					</>
				)}

				{/* Osteoarthritis */}
				{joinedGroup.Osteoarthritis && (
					<>
						<div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
							<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
								<h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
									Osteoarthritis
								</h1>
							</div>
							<div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
								<img
									src="https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324979/doctor-checking-patient-s-knee.jpg"
									alt=""
									className="w-full h-60 object-cover rounded-lg sm:h-72 sm:col-span-2 lg:col-span-full"
									loading="lazy"
								></img>
								<img
									src="https://hulc.ca/wp-content/uploads/2019/01/osteo-hands.jpg?w=624"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-40"
									loading="lazy"
								></img>
								<img
									src="https://www.orthopaedicsurgeon.com.sg/wp-content/uploads/2011/11/Patient_OA_Knee.jpg"
									alt=""
									className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-56"
									loading="lazy"
								></img>
							</div>
							<p className="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
								<strong>"Osteoarthritis" (OA)</strong> is a degenerative joint
								disease that is characterized by the breakdown of cartilage and
								other tissues within the joint. Cartilage is a firm, slippery
								tissue that enables nearly frictionless joint motion. With OA,
								the cartilage wears down, causing the bones to rub together,
								which can lead to pain, stiffness, swelling, and reduced range
								of motion.
								<br />
								<br />
								Symptoms of Osteoarthritis
								<br />
								The symptoms of OA typically develop gradually over time and may
								vary from person to person. Some of the most common symptoms of
								OA include:
								<br />
								<br />
								1. Pain: Pain is the most common symptom of OA and is typically
								felt in the affected joint. The pain may be worse during
								activity and improve with rest.
								<br />
								<br />
								2. Stiffness: OA can cause stiffness in the affected joint,
								especially in the morning or after periods of inactivity.
								<br />
								<br />
								3. Swelling: Swelling may occur around the affected joint and is
								caused by inflammation.
								<br />
								<br />
								4. Reduced range of motion: As OA progresses, the range of
								motion in the affected joint may decrease. This can make it
								difficult to perform everyday activities.
							</p>
						</div>

						<hr className="w-full my-6 border-solid border-[#2596be] border-y-[1px]" />
					</>
				)}

				{/* Asthma */}
				{joinedGroup.Asthma && (
					<div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
						<div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
							<h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-2xl">
								Asthma
							</h1>
						</div>
						<div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
							<img
								src="https://www.myallergydr.com/wp-content/uploads/2016/09/Airway-Obstruction-With-Asthma-Crystal-Lake.jpg"
								alt=""
								className="w-full h-60 object-cover rounded-lg sm:h-72 sm:col-span-2 lg:col-span-full"
								loading="lazy"
							></img>
							<img
								src="https://nortonhealthcareprovider.com/wp-content/uploads/severe-asthma-when-to-refer.jpg"
								alt=""
								className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-56"
								loading="lazy"
							></img>
							<img
								src="https://s3-us-west-2.amazonaws.com/utsw-patientcare-web-production/original_images/pediatric_asthma_inhaler_600.jpg"
								alt=""
								className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-56"
								loading="lazy"
							></img>
						</div>
						<p className="mt-4 text-l leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-800">
							<strong>"Asthma"</strong> Asthma is a chronic respiratory
							condition characterized by inflammation and narrowing of the
							airways, also known as bronchial tubes. These narrowed airways
							make it difficult for air to flow in and out of the lungs, leading
							to symptoms such as wheezing, coughing, shortness of breath, and
							chest tightness.
							<br />
							<br />
							Symptoms of Asthma
							<br />
							<br />
							The symptoms of asthma can vary from person to person and can
							range from mild to severe. Some of the most common symptoms of
							asthma include:
							<br />
							<br />
							1. Wheezing: A high-pitched whistling sound when you breathe out
							<br />
							<br />
							2. Coughing: A cough that is persistent or worse at night or early
							in the morning
							<br />
							<br />
							3. Shortness of breath: Feeling like you can't get enough air
							<br />
							<br />
							4. Chest tightness: A feeling of tightness or pressure in your
							chest
						</p>
					</div>
				)}
			</main>
		</>
	);
};

export default HomePage;
