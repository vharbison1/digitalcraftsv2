window.addEventListener('DOMContentLoaded', () => {
    const heroName = prompt("Hero Name");
    const villianName = prompt("Villian Name");

    const hero = new Hero(heroName);
    const villian = new Villian(villianName);

    const heroWeapon = new Weapon('Excalibur');
    const villianWeapon = new Weapon('Super Sword');

    function update() {
        document.getElementById('heroContainer').innerHTML = hero.render();
        document.getElementById('villianContainer').innerHTML = villian.render();

        if(hero.health < 1)
        {
            alert("Game Over");
        }
        else if(villian.health < 1)
        {
            alert("Victory!");
        }
    }

    hero.equipWeapon(heroWeapon);
    villian.equipWeapon(villianWeapon);

    update();


    document.getElementById('heroAttack').addEventListener('click', () => {
        hero.attack(villian);
        update();
    });

    document.getElementById('villianAttack').addEventListener('click', () => {
        villian.attack(hero);
        update();
    })
})