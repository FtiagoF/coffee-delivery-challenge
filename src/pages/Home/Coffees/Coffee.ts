interface CoffeeType {
    name: string;
    description: string;
    picturePath: string;
    tag: string[];
    price: number;
}

export const Coffees: CoffeeType[] = [
    {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        picturePath: '../../../assets/Expresso.svg',
        tag: ['tradicional'],
        price: 9.90,
    },
    {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        picturePath: '../../../assets/Americano.svg',
        tag: ['tradicional'],
        price: 9.90,
    },
    {
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        picturePath: '../../../assets/Expresso Cremoso.svg',
        tag: ['tradicional'],
        price: 9.90,
    },
    {
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        picturePath: '../../../assets/Café Gelado.svg',
        tag: ['tradicional', 'gelado'],
        price: 9.90,
    },
    {
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        picturePath: '../../../assets/Café com Leite.svg',
        tag: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        picturePath: '../../../assets/Latte.svg',
        tag: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        picturePath: '../../../assets/Capuccino.svg',
        tag: ['tradicional','com leite'],
        price: 9.90,
    },
    {
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        picturePath: '../../../assets/Macchiato.svg',
        tag: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        picturePath: '../../../assets/Mochaccino.svg',
        tag: ['tradicional', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        picturePath: '../../../assets/Chocolate Quente.svg',
        tag: ['especial', 'com leite'],
        price: 9.90,
    },
    {
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        picturePath: '../../../assets/.svg',
        tag: ['especial', 'alcoólico', 'gelado'],
        price: 9.90,
    },
    {
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        picturePath: '../../../assets/Havaiano.svg',
        tag: ['especial'],
        price: 9.90,
    },
    {
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        picturePath: '../../../assets/Árabe.svg',
        tag: ['especial'],
        price: 9.90,
    },
    {
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        picturePath: '../../../assets/Irlandês.svg',
        tag: ['especial', 'alcoólico'],
        price: 9.90,
    },
]

