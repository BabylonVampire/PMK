import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animationStart = () => {
	gsap.registerPlugin(ScrollTrigger);

	let serviceBlocks = gsap.utils.toArray<HTMLElement>('.serviceBlock');
	let memberCards = gsap.utils.toArray<HTMLElement>('.memberCard');

	gsap.fromTo(
		'.aboutSectionPic',
		{ x: '-3em', y: '-3em', opacity: 0 },
		{
			x: 0,
			y: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				start: 'center',
				trigger: '.heroSection',
				toggleActions: 'play none none reverse',
			},
		}
	);

	gsap.fromTo(
		'.carouselBox',
		{ y: '3em', opacity: 0 },
		{
			y: 0,
			opacity: 1,
			duration: 1,
			scrollTrigger: {
				start: 'center',
				trigger: '.aboutSection',
				toggleActions: 'play none none reverse',
			},
		}
	);

	serviceBlocks.forEach((block) => {
		gsap.fromTo(
			block,
			{
				opacity: 0,
				x: (+block.id % 2 === 0 ? 1 : -1) * 40,
				y: 30,
			},
			{
				opacity: 1,
				x: 0,
				y: 0,
				duration: 1,
				scrollTrigger: {
					start: '-400px',
					trigger: block,
					toggleActions: 'play none none reverse',
				},
			}
		);
	});

	serviceBlocks.forEach((block) => {
		gsap.fromTo(
			block,
			{
				top: '0em',
			},
			{
				top: '14em',
				scrollTrigger: {
					start: '-200px',
					end: 'bottom',
					trigger: block,
					scrub: true,
				},
			}
		);
	});

	memberCards.forEach((card) => {
		gsap.fromTo(
			card,
			{
				opacity: 0,
				y: 50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					start: '350',
					trigger: card,
					toggleActions: 'play none none reverse',
				},
			}
		);
	});
};

export default animationStart;
