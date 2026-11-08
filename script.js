let searchCount = 0;

function searchProfiles() {

    let name = document.getElementById("name").value.trim();
    let username = document.getElementById("username").value.trim();
    let city = document.getElementById("city").value.trim();
    let country = document.getElementById("country").value;

    if (name === "" && username === "") {
        alert("Please enter a Full Name or Username.");
        return;
    }

    let searchTerm = username || name;
    let fullQuery = `${name} ${city} ${country}`;

    searchCount++;
    document.getElementById("counter").innerHTML =
        "Searches: " + searchCount;

    let history = document.getElementById("history");
    let item = document.createElement("li");
    item.textContent = searchTerm;
    history.prepend(item);

    let tiktokLink =
        `https://www.tiktok.com/search?q=${encodeURIComponent(searchTerm)}`;

    let instagramLink =
        username
        ? `https://www.instagram.com/${username}`
        : `https://www.google.com/search?q=${encodeURIComponent('"' + name + '" site:instagram.com')}`;

    let githubLink =
        username
        ? `https://github.com/${username}`
        : `https://github.com/search?q=${encodeURIComponent(name)}&type=users`;

    let xLink =
        username
        ? `https://x.com/${username}`
        : `https://x.com/search?q=${encodeURIComponent(name)}`;

    let results = `

    <h2>🎯 Results for ${searchTerm}</h2>

    <div class="card">
        <h3>🌐 Google Search</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery)}" target="_blank">
            Open Search
        </a>
    </div>

    <div class="card">
        <h3>💼 LinkedIn Profiles</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:linkedin.com/in')}" target="_blank">
            Open LinkedIn Search
        </a>
    </div>

    <div class="card">
        <h3>📸 Instagram</h3>
        <a href="${instagramLink}" target="_blank">
            Open Instagram
        </a>
    </div>

    <div class="card">
        <h3>🎵 TikTok Search</h3>
        <a href="${tiktokLink}" target="_blank">
            Search on TikTok
        </a>
    </div>

    <div class="card">
        <h3>🐦 X</h3>
        <a href="${xLink}" target="_blank">
            Open X
        </a>
    </div>

    <div class="card">
        <h3>💻 GitHub</h3>
        <a href="${githubLink}" target="_blank">
            Open GitHub
        </a>
    </div>

    <div class="card">
        <h3>📘 Facebook</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:facebook.com')}" target="_blank">
            Open Facebook Search
        </a>
    </div>

    <div class="card">
        <h3>🎥 YouTube</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' site:youtube.com')}" target="_blank">
            Open YouTube Search
        </a>
    </div>

    <div class="card">
        <h3>🖼️ Google Images</h3>
        <a href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(fullQuery)}" target="_blank">
            View Images
        </a>
    </div>

    <div class="card">
        <h3>📄 PDF Documents</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' filetype:pdf')}" target="_blank">
            View PDFs
        </a>
    </div>

    <div class="card">
        <h3>📰 News Search</h3>
        <a href="https://www.google.com/search?q=${encodeURIComponent(fullQuery + ' news')}" target="_blank">
            View News
        </a>
    </div>

    <div class="card">
        <h3>🌎 Reverse Image Search</h3>

        <a href="https://images.google.com/" target="_blank">
            Google Lens
        </a>

        <br><br>

        <a href="https://tineye.com/" target="_blank">
            TinEye
        </a>

        <br><br>

        <a href="https://yandex.com/images/" target="_blank">
            Yandex Images
        </a>
    </div>

    `;

    document.getElementById("results").innerHTML = results;
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark")
    );
}

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
}

function changeThemeColor(color) {

    document.documentElement.style.setProperty(
        "--main-color",
        color
    );

    localStorage.setItem("themeColor", color);
}

let savedColor = localStorage.getItem("themeColor");

if (savedColor) {

    document.documentElement.style.setProperty(
        "--main-color",
        savedColor
    );
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
}

function changeLanguage() {

    let lang = document.getElementById("language").value;

    if (lang === "ar") {

        document.querySelector("h1").innerHTML =
            "🔍 نطاق الأسماء";

        document.querySelector(".subtitle").innerHTML =
            "البحث عن الحسابات والملفات العامة";

    } else {

        document.querySelector("h1").innerHTML =
            "🔍 NameScope";

        document.querySelector(".subtitle").innerHTML =
            "Search public social media profiles using a name or username.";
    }
}

setInterval(() => {

    let dateBox = document.getElementById("datetime");

    if (dateBox) {
        dateBox.innerHTML =
            new Date().toLocaleString();
    }

}, 1000);
