export const IO = (item, options) => {
    return new Promise((resolve, reject) => {
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    resolve();
                }
            });
        }, options);
        observer.observe(item);
    });
};
