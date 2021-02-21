"use strict";
(function () {
  let timelineList = document.querySelector("#timeline ul");
  let moreBtn = document.querySelector("#timeline button");
  let initIndex = 6;
  let count = 4;
  let data = [
    {
      url: "javascript:;",
      src: "https://picsum.photos/300/200?random=211",
      date: "2021.01",
      content: "HEy its Azad",
    },
    {
      url: "javascript:;",
      src: "https://picsum.photos/300/200?random=2012",
      date: "2020.12",
      content: "Chat it out",
    },
    {
      url: "javascript:;",
      src: "https://picsum.photos/300/200?random=2011",
      date: "2020.11",
      content: "Empressario",
    },
    {
      url: "javascript:;",
      src: "https://picsum.photos/300/200?random=2010",
      date: "2020.10",
      content: "Srijan",
    },
  ];
  function setTimeLineItem(target, obj, index) {
    let li = document.createElement("li");
    let template = `
            <a
                href="${obj.url}"
                style="animation-delay:${index * 0.5}s;">
                <div class="pic">
                    <img
                        src="${obj.src}"
                        alt=""
                    />
                </div>
                <div class="txt">
                    <h3>${obj.date}</h3>
                    <p>
                        ${obj.content}
                    </p>
                </div>
            </a>
            <div
                class="line"
                style="animation-delay:${index * 0.5}s;">
            </div>`;
    li.innerHTML = template;
    target.append(li);
  }
  data.slice(0, initIndex).forEach((obj, index) => {
    setTimeLineItem(timelineList, obj, index + 1);
  });
  moreBtn.addEventListener("click", clickMore);
})();
