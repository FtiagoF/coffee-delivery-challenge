export interface CoffeeType {
    name: string;
    description?: string;
    picture: string;
    tags?: string[];
    price: number;
}

export const Coffees: CoffeeType[] = [
    {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        picture: '/src/assets/Coffees/Expresso.svg',
        tags: ['tradicional'],
        price: 9.90,
    },
    {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        picture: '/src/assets/Coffees/Americano.svg',
        tags: ['tradicional'],
        price: 9.90,
    },
    {
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        picture: '/src/assets/Coffees/Expresso Cremoso.svg',
        tags: ['tradicional'],
        price: 9.90,
    },
    {
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        picture: '/src/assets/Coffees/Café Gelado.svg',
        tags: ['tradicional', 'gelado'],
        price: 9.90,
    },
    {
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        picture: '/src/assets/Coffees/Café com Leite.svg',
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        picture: '/src/assets/Coffees/Latte.svg',
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        picture: '/src/assets/Coffees/Capuccino.svg',
        tags: ['tradicional','com leite'],
        price: 9.90,
    },
    {
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        picture: '/src/assets/Coffees/Macchiato.svg',
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        picture: '/src/assets/Coffees/Mochaccino.svg',
        tags: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        picture: '/src/assets/Coffees/Chocolate Quente.svg',
        tags: ['especial', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        picture: '/src/assets/Coffees/Cubano.svg',
        tags: ['especial', 'alcoólico', 'gelado'],
        price: 9.90,
    },
    {
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        picture: '/src/assets/Coffees/Havaiano.svg',
        tags: ['especial'],
        price: 9.90,
    },
    {
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        picture: '/src/assets/Coffees/Árabe.svg',
        tags: ['especial'],
        price: 9.90,
    },
    {
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        picture: '/src/assets/Coffees/Irlandês.svg',
        tags: ['especial', 'alcoólico'],
        price: 9.90,
    },
]

