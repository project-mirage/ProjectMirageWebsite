const scrollToElement = (id) => {
    const target = document.getElementById(id);

    // true to align to top of window
    target.scrollIntoView(true);
};
