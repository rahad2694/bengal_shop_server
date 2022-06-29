const productCollection = [
    {
        name: 'Pine Apple',
        img: 'https://i.ibb.co/b5ZSTdm/Rectangle-1275-13.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 400.00,
        price: 800.00,
        category: 'fruits',
        branch: 'Yellow fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-1'
    },
    {
        name: 'Temerin',
        img: 'https://i.ibb.co/G0s6cqD/Rectangle-1275-11.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 500.00,
        price: 800.00,
        category: 'fruits',
        branch: 'white fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-3'
    },
    {
        name: 'Red Orange',
        img: 'https://i.ibb.co/6FSSWFq/Rectangle-1275-1.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 300.00,
        price: 800.00,
        category: 'fruits',
        branch: 'red fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-14'
    },
    {
        name: 'Guyava',
        img: 'https://i.ibb.co/pK1Q89j/Rectangle-1275-6.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 500.00,
        price: 900.00,
        category: 'fruits',
        branch: 'green fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-8'
    },
    {
        name: 'Lychee',
        img: 'https://i.ibb.co/Cvt8T59/Rectangle-1275-10.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 200.00,
        price: 600.00,
        category: 'fruits',
        branch: 'white fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-4'
    },

    {
        name: 'Watermelon',
        img: 'https://i.ibb.co/PNc4Z2T/Rectangle-1275-8.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 600.00,
        price: 800.00,
        category: 'fruits',
        branch: 'green fruits',
        subBranch: 'red fruit',
        sku: 'BFL-6'
    },
    {
        name: 'Dragon Fruit',
        img: 'https://produits.bienmanger.com/45312-0w600h600_White_Dragon_Fruit.jpg',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 500.00,
        price: 700.00,
        category: 'fruits',
        branch: 'red fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-7'
    },
    {
        name: 'Mango',
        img: 'https://i.ibb.co/p47gfW8/Rectangle-1275-9.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 600.00,
        price: 800.00,
        category: 'fruits',
        branch: 'yellow fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-5'
    },
    {
        name: 'Apple',
        img: 'https://i.ibb.co/3WF5Rs3/Rectangle-1275-12.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 500.00,
        price: 900.00,
        category: 'fruits',
        branch: 'green fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-2'
    },

    {
        name: 'Capsicum',
        img: 'https://i.ibb.co/pwykb11/Rectangle-1275-5.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 600.00,
        price: 900.00,
        category: 'fruits',
        branch: 'green fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-9'
    },
    {
        name: 'Beef',
        img: 'https://i.ibb.co/ym2QrSj/Rectangle-1275-4.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 700.00,
        price: 900.00,
        category: 'Meat',
        branch: 'Red Meat',
        subBranch: 'Beef',
        sku: 'BFL-10'
    },
    {
        name: 'Papaya',
        img: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-papaya-nanha-munha-desi-fruit-seeds-16969157116044.jpg?v=1634204486',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 500.00,
        price: 700.00,
        category: 'fruits',
        branch: 'yellow fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-11'
    },
    {
        name: 'Product Name',
        img: 'https://i.ibb.co/zrYhbzC/Rectangle-1275-2.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 600.00,
        price: 700.00,
        category: 'fruits',
        branch: 'green fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-13'
    },

    {
        name: 'Promegranate',
        img: 'https://i.ibb.co/PF7rHGT/Rectangle-1275.png',
        rated: '5',
        totalRatedNum: '121',
        offerPrice: 400.00,
        price: 600.00,
        category: 'fruits',
        branch: 'red fruits',
        subBranch: 'fresh fruit',
        sku: 'BFL-15'
    },
];

export default function handler(req, res) {
    res.status(200).json(productCollection)
}