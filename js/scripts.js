const media_scrollers = document.querySelectorAll(".media-scroller");

media_scrollers.forEach((media_scroller) => {
    const scroller = media_scroller.querySelector(".scroller");
    const scrollerContent = Array.from(scroller.children);
    console.log(scrollerContent)

    scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    scroller.appendChild(duplicatedItem);
    });
});

