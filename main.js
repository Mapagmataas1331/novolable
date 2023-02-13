window.addEventListener("load", () => {
    main = document.querySelector("body");
    el = document.createElement("div");
    el.style.position = "fixed";
    el.style.right = "16px";
    el.style.bottom = "16px";
    el.style.height = "20vh";
    el.style.minHeight = "128px";
    el.style.aspectRatio = "2";
    el.style.backgroundColor = "#8031a7";
    el.style.backgroundImage =
    "url('https://raw.githubusercontent.com/Mapagmataas1331/novolable/main/lable.png')";
    el.style.backgroundSize = "contain";
    el.style.border = "2px solid black";
    el.style.borderRadius = "16px";
    el.style.textAlign = "center";
    btn = document.createElement("div");
    btn.style.height = "10%";
    btn.style.aspectRatio = "1";
    btn.style.margin = "-1px 0 0 auto";
    btn.style.fontFamily = "Tahoma, sans-serif";
    btn.style.fontWeight = "600";
    btn.style.cursor = "pointer";
    btn.innerHTML = "x";
    txt = document.createElement("div");
    txt.style.color = "#fff";
    txt.style.margin = "5vh 0 0 auto";
    txt.style.fontFamily = "'Qanelas-UltraLight', sans-serif";
    txt.style.fontSize = "24px";
    txt.style.fontWeight = "400";
    txt.style.cursor = "pointer";
    txt.style.transition = "500ms"
    txt.innerHTML = "Сделано совместно с Новоколледжом";
    main.appendChild(el);
    el.appendChild(btn);
    el.appendChild(txt);
    btn.addEventListener("click", () => {
        main.removeChild(el);
    });
    txt.addEventListener('mouseover', () => {
        txt.style.fontSize = "28px";
    });
    txt.addEventListener('mouseout', () => {
        txt.style.fontSize = "24px";
    });
    txt.addEventListener("click", () => {
        window.location.href = "https://novocollege.ru";
    });
});