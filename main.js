const button = document.getElementById('btn');
const imageDiv = document.getElementById('image');
const powers = document.getElementById('powers');
const heroName = document.getElementById('heroName');
const getRandom = () => {
    let num = Math.ceil(Math.random() * 731);
    // console.log(num);
    return num;
}
const getHero = () => {
    let id = getRandom();
    let link = 'https://superheroapi.com/api.php/1587466761734069/';
    fetch(`${link}/${id}`).then(response => response.json()).then(
        json => {
            imageDiv.innerHTML = `<img src='${json.image.url}' style='height:100%;width:100%;'/>`;
            heroName.innerHTML = `<h1>${json.name}</h1>`;
            console.log(json);
            let keys = Object.keys(json.powerstats);
            let values = Object.values(json.powerstats);
            let emojis = ['🧠', '💪', '🚀', '🧲', '🔥', '⚔️'];
            let html = ``;
            for (let index = 0; index < keys.length; index++) {
                html += `<p>${keys[index]} ${emojis[index]} :  ${values[index]}</p>`;
            }
            console.log(html);
            powers.innerHTML = `${html}`;
        }
    )

}
getHero();
button.onclick = () => {
    getHero();
}