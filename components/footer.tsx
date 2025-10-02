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
		<footer className="relative w-full bg-slate-900 text-white">
			<div className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-white/10 px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
				<div className="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

				<div className="grid w-full gap-6 sm:gap-8 xl:grid-cols-3 xl:gap-8">
					<AnimatedContainer className="space-y-4 text-center xl:text-left">
						<div className="flex items-baseline gap-2 justify-center xl:justify-start">
							<span className="text-xs uppercase tracking-wider text-white/60">LUVERA</span>
							<FrameIcon className="size-6 sm:size-8 text-blue-400" />
							<span className="text-xl sm:text-2xl font-bold text-blue-400">Aiyra</span>
						</div>
						<p className="text-white/70 mt-4 sm:mt-8 text-xs sm:text-sm xl:mt-0">
							© {new Date().getFullYear()} Luvera Aiyra. All rights reserved.
						</p>
					</AnimatedContainer>

					<div className="mt-6 sm:mt-10 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div className="mb-6 sm:mb-10 md:mb-0">
									<h3 className="text-xs font-semibold text-white">{section.label}</h3>
									<ul className="text-white/70 mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<a
													href={link.href}
													className="hover:text-white inline-flex items-center transition-all duration-300"
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
