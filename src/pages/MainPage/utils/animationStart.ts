import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const animationStart = () => {
	gsap.registerPlugin(ScrollTrigger);

	let serviceBlocks = gsap.utils.toArray<HTMLElement>('.serviceBlock');
	let memberCards = gsap.utils.toArray<HTMLElement>('.memberCard');

	gsap.fromTo(
		'#backGround',
		{ backgroundColor: '#171d3d' }, //var(--mainColor)
		{
			backgroundColor: '#070d28', //var(--darkColor)
			duration: 1,
			scrollTrigger: {
				start: 'top',
				trigger: '#serviceBlocks',
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
					start: 'top',
					trigger: block,
					toggleActions: 'play none none',
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
					toggleActions: 'play none none',
				},
			}
		);
	});
};

export default animationStart;
