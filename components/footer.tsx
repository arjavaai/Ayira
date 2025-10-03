"use client";
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Solutions', href: '#solutions' },
			{ title: 'Features', href: '#features' },
			{ title: 'Pricing', href: '#pricing' },
			{ title: 'Integrations', href: '#integrations' },
			{ title: 'Mobile App', href: '#mobile' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Us', href: '/about' },
			{ title: 'Careers', href: '/careers' },
			{ title: 'Press', href: '/press' },
			{ title: 'Partners', href: '/partners' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Help Center', href: '/help' },
			{ title: 'API Documentation', href: '/docs' },
			{ title: 'Webinars', href: '/webinars' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full bg-gradient-to-b from-neutral-light to-neutral-medium text-black">
			<div className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-neutral-medium/30 px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
				<div className="bg-neutral-medium/30 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

				<div className="grid w-full gap-6 sm:gap-8 xl:grid-cols-3 xl:gap-8">
					<AnimatedContainer className="space-y-4 text-center xl:text-left">
						<div className="flex items-center gap-2 lg:gap-3 justify-center xl:justify-start">
							{/* Circular Logo with LA initials */}
							<div className="relative w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent p-0.5 flex items-center justify-center">
								{/* Inner circle with gradient border */}
								<div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
									{/* Gradient background for the letters */}
									<div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full" />

									{/* LA Letters */}
									<div className="relative z-10 flex items-center justify-center">
										<span className="text-sm lg:text-base font-bold text-brand-primary leading-none">L</span>
										<span className="text-sm lg:text-base font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent leading-none">A</span>
									</div>

									{/* Subtle shine effect */}
									<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
								</div>
							</div>

							{/* Text Logo */}
							<div className="flex flex-col">
								<span className="text-xs uppercase tracking-wider font-medium text-black leading-none">
									LUVERA
								</span>
								<span className="text-lg lg:text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text leading-none">
									Aiyra
								</span>
							</div>
						</div>
					</AnimatedContainer>

					<div className="mt-6 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="mb-6 sm:mb-10 md:mb-0">
									<h3 className="text-xs font-semibold text-black">{section.label}</h3>
									<ul className="text-black mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="hover:text-brand-secondary hover:font-medium inline-flex items-center transition-all duration-300"
												>
													{link.icon && <link.icon className="me-1 size-3 sm:size-4" />}
													{link.title}
												</a>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

				{/* ThreeAtoms Credit */}
				<div className="mt-8 pt-6 border-t border-neutral-medium/30 text-center">
					<p className="text-black text-xs sm:text-sm font-medium">
						Designed & Developed by{' '}
						<a 
							href="https://www.threeatoms.com" 
							target="_blank" 
							rel="dofollow" 
							className="text-[var(--property-rentals)] hover:text-[var(--property-rentals)] transition-colors duration-300 font-semibold"
						>
							ThreeAtoms
						</a>
						{' – '}
						<a 
							href="https://wa.me/918179247099?text=Hello%20ThreeAtoms%2C%20I%20have%20seen%20one%20of%20your%20developed%20websites%20and%20I%20am%20contacting%20you%20because%20I%20am%20looking%20for%20a%20website%20for%20my%20business." 
							target="_blank" 
							className="text-[var(--property-rentals)] hover:text-[var(--property-rentals)] transition-colors duration-300 font-semibold"
						>
							+91 8179247099
						</a>
					</p>
				</div>

				{/* Copyright */}
				<div className="mt-4 text-center">
					<p className="text-black text-xs sm:text-sm font-medium">
						© {new Date().getFullYear()} Luvera Aiyra. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
