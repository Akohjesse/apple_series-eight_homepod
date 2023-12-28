export const drawImage = (canvas, currentFrame, frameCount) => {
    return new Promise((resolve) => {
        const html = document.documentElement;
        const context = canvas.getContext("2d");
        let images = [];

        const preloadImages = () => {
            const loadPromises = [];
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                const imgLoadPromise = new Promise((resolve, reject) => {
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                });

                img.src = currentFrame(i);
                images.push(img);
                loadPromises.push(imgLoadPromise);
            }
            return Promise.all(loadPromises);
        };

        const draw = (imgObj) => {
            const scale = Math.max(canvas.width / imgObj.width, canvas.height / imgObj.height);
            const imgWidth = imgObj.width * scale;
            const imgHeight = imgObj.height * scale;
            const x = (canvas.width - imgWidth) / 2;
            const y = (canvas.height - imgHeight) / 2;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(imgObj, x, y, imgWidth, imgHeight);
        };

        const updateImage = (index) => {
            if (images[index]) {
                draw(images[index]);
            }
        };

        preloadImages().then(() => {
            if (images.length > 0) {
                draw(images[0]);
            }
        });

        const wrap = canvas.parentNode.parentNode;
        window.addEventListener("scroll", () => {
            const scrollTop = html.scrollTop - wrap.offsetTop;
            const maxScrollTop = wrap.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScrollTop;
            const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
            if (frameIndex >= 0) {
                requestAnimationFrame(() => updateImage(frameIndex));
            }
            resolve();
        });

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (images.length > 0) {
                draw(images[0]); 
            }
        });
    });
};
