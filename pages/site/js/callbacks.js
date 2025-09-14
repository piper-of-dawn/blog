const onSearchBarClick = (event) => {
	const dialog = document.getElementById("search-dialog");
	if (dialog) {
		dialog.showModal();
	}
};

const closeDialogFactory = (targetID, event) => {
	const dialog = document.getElementById(targetID);
	if (dialog && event.target === dialog) {
		dialog.close();
	}
};

const onSearchDialogClick = (event) => {
	return closeDialogFactory("search-dialog", event);
};

// Lightweight client-side fallback search if the web worker path fails.
let __searchIndexCache = null;
let __lastQuerySentAt = 0;

async function loadSearchIndex() {
    if (__searchIndexCache) return __searchIndexCache;
    try {
        const base = (typeof base_url !== 'undefined') ? base_url : '';
        const resp = await fetch((base.endsWith('/') ? base : base + '/') + 'search/search_index.json', { credentials: 'same-origin' });
        if (!resp.ok) throw new Error('Failed to load search_index.json');
        const json = await resp.json();
        __searchIndexCache = json;
        return json;
    } catch (e) {
        console.warn('[search-fallback] could not load index', e);
        return null;
    }
}

function renderResults(items) {
    const results = document.getElementById('mkdocs-search-results');
    if (!results) return;
    while (results.firstChild) results.removeChild(results.firstChild);
    if (!items || items.length === 0) {
        const p = document.createElement('p');
        p.textContent = results.getAttribute('data-no-results-text') || 'No results found';
        results.appendChild(p);
        return;
    }
    const base = (typeof base_url !== 'undefined') ? base_url : '';
    const joinUrl = (b, p) => (p && p[0] === '/') ? p : (b.endsWith('/') ? b + p : b + '/' + p);
    items.forEach(doc => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const a = document.createElement('a');
        a.href = joinUrl(base, doc.location);
        a.textContent = doc.title || doc.location;
        h3.appendChild(a);
        const p = document.createElement('p');
        p.textContent = (doc.text || '').slice(0, 200);
        article.appendChild(h3);
        article.appendChild(p);
        results.appendChild(article);
    });
}

function containerIsEmpty() {
    const results = document.getElementById('mkdocs-search-results');
    return results && !results.firstChild;
}

async function fallbackSearch(query) {
    const data = await loadSearchIndex();
    if (!data) return;
    const q = query.toLowerCase();
    const hits = [];
    for (const doc of data.docs || []) {
        const hay = ((doc.title || '') + ' ' + (doc.text || '')).toLowerCase();
        if (hay.includes(q)) hits.push(doc);
        if (hits.length >= 20) break;
    }
    renderResults(hits);
}

const onInputHandler = (event) => {
    const query = event.target.value;
    if (window.debounceTimer) clearTimeout(window.debounceTimer);
    window.debounceTimer = setTimeout(() => {
        const longEnough = query.length > 2;
        const now = Date.now();
        __lastQuerySentAt = now;
        if (typeof searchWorker !== 'undefined' && searchWorker && longEnough) {
            console.log(`Posting message { "query": "${query}" }`);
            const lunrQuery = `${query}^10 ${query}* ${query}~1`;
            try { searchWorker.postMessage({ query: lunrQuery }); } catch (e) { console.warn('[search] worker post failed', e); }
            // Fallback after 700ms if nothing rendered yet for this query
            setTimeout(() => {
                if (Date.now() - __lastQuerySentAt >= 700 && containerIsEmpty() && (event.target.value === query)) {
                    console.log('[search-fallback] no worker results, running client match');
                    fallbackSearch(query);
                }
            }, 750);
        } else if (longEnough) {
            console.warn('searchWorker is not defined, using fallback');
            fallbackSearch(query);
        } else {
            const results = document.getElementById('mkdocs-search-results');
            if (results) while (results.firstChild) results.removeChild(results.firstChild);
        }
    }, 300);
};

const searchShortcutHandler = (event) => {
	if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
		event.preventDefault(); // Prevents default browser behavior (e.g., search bar in some apps)
		const dialog = document.getElementById("search-dialog");
		if (dialog) {
			dialog.showModal();
		}
	}
};

const updatePygmentsStylesheet = () => {
	const root = document.documentElement;
	const lightLink = document.getElementById("pygments-light");
	const darkLink = document.getElementById("pygments-dark");
	if (root.classList.contains("dark")) {
		if (darkLink && lightLink) {
			darkLink.media = "all";
			lightLink.media = "none";
		}
	} else {
		if (darkLink && lightLink) {
			darkLink.media = "none";
			lightLink.media = "all";
		}
	}
};

const onThemeSwitch = (event) => {
	const root = document.documentElement;
	root.classList.toggle("dark");
	if (root.classList.contains("dark")) {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}

	updatePygmentsStylesheet();
};

const onBottomSidebarDialogClick = (event) => {
	const dialog = document.getElementById("bottom-sidebar");
	if (dialog && event.target === dialog) {
		dialog.close();
		const button = document.getElementById("menu-button");
		if (button) {
			button.dataset.state = "closed";
		}
	}
};

const onMobileMenuButtonClick = (event) => {
	event.currentTarget.dataset.state =
		event.target.dataset.state === "open" ? "closed" : "open";
	const dialog = document.getElementById("bottom-sidebar");
	if (dialog) {
		dialog.showModal();
	}
};

const clipboardIcon = () => {
	const svgElement = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"svg",
	);
	svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgElement.setAttribute("width", "24");
	svgElement.setAttribute("height", "24");
	svgElement.setAttribute("viewBox", "0 0 24 24");
	svgElement.setAttribute("fill", "none");
	svgElement.setAttribute("stroke", "currentColor");
	svgElement.setAttribute("stroke-width", "2");
	svgElement.setAttribute("stroke-linecap", "round");
	svgElement.setAttribute("stroke-linejoin", "round");
	svgElement.setAttribute(
		"class",
		"lucide lucide-clipboard-icon lucide-clipboard",
	);

	const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rect.setAttribute("width", "8");
	rect.setAttribute("height", "4");
	rect.setAttribute("x", "8");
	rect.setAttribute("y", "2");
	rect.setAttribute("rx", "1");
	rect.setAttribute("ry", "1");
	svgElement.appendChild(rect);

	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute(
		"d",
		"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
	);
	svgElement.appendChild(path);

	return svgElement;
};

const checkIcon = () => {
	const svgElement = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"svg",
	);
	svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgElement.setAttribute("width", "24");
	svgElement.setAttribute("height", "24");
	svgElement.setAttribute("viewBox", "0 0 24 24");
	svgElement.setAttribute("fill", "none");
	svgElement.setAttribute("stroke", "currentColor");
	svgElement.setAttribute("stroke-width", "2");
	svgElement.setAttribute("stroke-linecap", "round");
	svgElement.setAttribute("stroke-linejoin", "round");
	svgElement.setAttribute("class", "lucide lucide-check-icon lucide-check");

	const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute("d", "M20 6 9 17l-5-5");
	svgElement.appendChild(path);

	return svgElement;
};

const onCodeCopy = (event) => {
	const button = event.target;
	const code = button.parentElement.querySelector("code");
	if (code) {
		const text = code.innerText;
		navigator.clipboard.writeText(text).then(
			// change the inner icon of the button (inline svg)
			() => {
				const svg = button.querySelector("svg");
				if (svg) {
					button.removeChild(svg);
					const check = checkIcon();
					button.appendChild(check);
					// reset the icon after few seconds
					setTimeout(() => {
						button.removeChild(check);
						const resetSvg = clipboardIcon();
						button.appendChild(resetSvg);
					}, 2000);
				}
			},
		);
	}
};

const toggleLayout = (event) => {
	if (document.documentElement.classList.contains("layout-fixed")) {
		document.documentElement.classList.remove("layout-fixed");
		document.documentElement.classList.add("layout-full");
		localStorage.setItem("html-layout", "layout-full");
	} else {
		document.documentElement.classList.remove("layout-full");
		document.documentElement.classList.add("layout-fixed");
		localStorage.setItem("html-layout", "layout-fixed");
	}
};

const fetchStargazers = (repoUrl) => {
	const span = document.getElementById("stargazers");
	if (span) {
		const chunks = repoUrl.split("/");
		if (chunks.length > 2) {
			const repo = chunks[chunks.length - 1];
			const owner = chunks[chunks.length - 2];
			const url = `https://api.github.com/repos/${owner}/${repo}`;
			fetch(url)
				.catch((error) => {
					console.error(`Error fetching stargazers at ${owner}:`, error);
				})
				.then((response) => response.json())
				.then((data) => {
					span.textContent = data.stargazers_count;
					console.log("Stargazers updated");
				});
		}
	}
};
