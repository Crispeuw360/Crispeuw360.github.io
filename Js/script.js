// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
	navToggle.addEventListener('click', () => {
		const isOpen = siteNav.classList.toggle('open');
		navToggle.setAttribute('aria-expanded', String(isOpen));
	});
	// Close on link click (mobile)
	siteNav.addEventListener('click', (e) => {
		const target = e.target;
		if (target instanceof Element && target.tagName === 'A') {
			siteNav.classList.remove('open');
			navToggle.setAttribute('aria-expanded', 'false');
		}
	});
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
	a.addEventListener('click', (e) => {
		const href = a.getAttribute('href');
		if (!href) return;
		const id = href.slice(1);
		const el = document.getElementById(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
});

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

