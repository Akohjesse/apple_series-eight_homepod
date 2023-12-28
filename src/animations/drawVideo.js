export const drawVideo = (canvas, video) => {
     const html = document.documentElement;
     const context = canvas.getContext("2d");

     let scale, x, y, w, h;

     const updateCanvasDimensions = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
     };
     const updateVideoDimensions = () => {
          scale = Math.max(canvas.width / video.videoWidth, canvas.height / video.videoHeight);
          w = video.videoWidth * scale;
          h = video.videoHeight * scale;
          x = (canvas.width - w) / 2;
          y = (canvas.height - h) / 2;
     };

     video.addEventListener(
          "loadeddata",
          function () {
               updateCanvasDimensions();
               updateVideoDimensions();
               context.drawImage(video, x, y, w, h);
          },
          false
     );

     window.addEventListener("resize", () => {
          updateCanvasDimensions();
          updateVideoDimensions();
     });

     const resizeObserver = new window.ResizeObserver((entries) => {
          for (let entry of entries) {
               if (entry.target === canvas) {
                    updateVideoDimensions();
               }
          }
     });
     resizeObserver.observe(canvas);

     const wrap = canvas.parentNode.parentNode;
     window.addEventListener("scroll", () => {
          const scrollTop = html.scrollTop - wrap.offsetTop;
          const maxScrollTop = wrap.scrollHeight - window.innerHeight;
          const scrollFraction = scrollTop / maxScrollTop;

          video.currentTime = video.duration * scrollFraction;
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(video, x, y, w, h);
     });
};
