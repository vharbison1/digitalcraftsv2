class Villian extends Person {
    constructor(name)
    {
        super(name);
    }
    
    render() {
        return `
            <div class='villian'>
                <img src='villian.jpg' />
                <div class="health">${this.health}</div>
            </div>
        `;
    }
}