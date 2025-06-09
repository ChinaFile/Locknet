document.addEventListener('DOMContentLoaded', function() {
  const tocs = document.querySelectorAll('#TableOfContents');

  tocs.forEach((toc, i) => {
    const visible = !!(toc.offsetWidth || toc.offsetHeight || toc.getClientRects().length);
    if (!visible) return; // Only operate on visible ToC

    const tocLinks = toc.querySelectorAll('a');

    // Map links to their corresponding sections
    const sections = Array.from(tocLinks)
      .map(link => {
        const id = decodeURIComponent(link.hash.slice(1));
        const el = document.getElementById(id);
        return el;
      })
      .filter(Boolean);

    // Remove highlight from all <li>s
    function clearActive() {
      toc.querySelectorAll('li').forEach(li => {
        li.classList.remove('toc-active');
      });
    }

    // Add highlight to the <li> parent of the active link
    function setActive(link) {
      const li = link.closest('li');
      if (li) {
        li.classList.add('toc-active');
      }
    }

    // Use IntersectionObserver for accurate scrollspy
    let lastActive = null;
    const observer = new window.IntersectionObserver(
      entries => {
        let visibleSections = entries.filter(e => e.isIntersecting && e.intersectionRatio > 0);
        if (visibleSections.length > 0) {
          // Pick the section closest to the top
          visibleSections.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const currentId = visibleSections[0].target.id;
          const activeLink = Array.from(tocLinks).find(link => decodeURIComponent(link.hash.slice(1)) === currentId);
          if (activeLink && lastActive !== activeLink) {
            clearActive();
            setActive(activeLink);
            lastActive = activeLink;
          }
        }
      },
      {
        rootMargin: '0px 0px -70% 0px', // Trigger when section is near top
        threshold: [0, 0.1, 0.5, 1]
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });
  });

  // Progress bar
  const progressBar = document.getElementById('toc-progress');
  function updateProgressBar() {
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.min(window.scrollY / docHeight, 1);
      progressBar.style.width = (scrolled * 100) + '%';
    }
  }
  window.addEventListener('scroll', updateProgressBar, { passive: true });
  updateProgressBar();
}); 