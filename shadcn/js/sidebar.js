// scroll to the active link in the sidebar on page load
const sidebar = document.querySelector('[data-sidebar="content"]');
const activeLink = sidebar?.querySelector('[data-active="true"]');
if (sidebar && activeLink) {
	const saved = sessionStorage.getItem("sidebar-scroll");
	if (saved !== null) {
		// restore the last offset
		sidebar.scrollTop = parseInt(saved, 10);
	}
	activeLink.scrollIntoView({ block: "center", behavior: "smooth" });
	window.addEventListener("beforeunload", () => {
		// save the current offset of the sidebar to session storage so we can restore it on page load
		sessionStorage.setItem("sidebar-scroll", sidebar.scrollTop);
	});
}

// Articles open in reading mode. The complete tree remains available from the
// click-only master index instead of occupying the annotation rail.
document.documentElement.classList.add("sidebar-collapsed");
localStorage.setItem("sidebar-collapsed", "true");

function syncMasterNavigationTrigger(open) {
	const button = document.getElementById("menu-button");
	if (!button) return;
	button.dataset.state = open ? "open" : "closed";
	button.setAttribute("aria-expanded", open ? "true" : "false");
}

function openMasterNavigation(event) {
	event?.preventDefault();
	const dialog = document.getElementById("master-navigation");
	if (!dialog || dialog.open) return;
	dialog.showModal();
	syncMasterNavigationTrigger(true);
	requestAnimationFrame(() =>
		dialog.querySelector(".master-nav-toast")?.focus(),
	);
}

function closeMasterNavigation() {
	const dialog = document.getElementById("master-navigation");
	if (dialog?.open) dialog.close();
	syncMasterNavigationTrigger(false);
}

function onMasterNavigationBackdropClick(event) {
	if (event.target === event.currentTarget) closeMasterNavigation();
}

// Inline handlers in the server-rendered templates resolve through window.
window.openMasterNavigation = openMasterNavigation;
window.closeMasterNavigation = closeMasterNavigation;
window.onMasterNavigationBackdropClick = onMasterNavigationBackdropClick;

const masterNavigation = document.getElementById("master-navigation");
masterNavigation?.addEventListener("close", () =>
	syncMasterNavigationTrigger(false),
);
masterNavigation?.querySelectorAll("a[href]").forEach((link) => {
	link.addEventListener("click", () => {
		document.documentElement.classList.add("sidebar-collapsed");
		localStorage.setItem("sidebar-collapsed", "true");
		closeMasterNavigation();
	});
});
