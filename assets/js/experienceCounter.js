document.querySelectorAll('.dynamic-counter .purecounter').forEach(counter => {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2004;
    counter.setAttribute('data-purecounter-end', yearsOfExperience);
});

if (typeof PureCounter !== "undefined") {
    new PureCounter();
}