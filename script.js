function redirectToPage(url) {
    window.location.href = url;
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    const offset = -10
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}