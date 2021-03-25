export const icon = [
    { name: "user-o", bgColor: "orange", label: "edit profile",location:'editprofile' },
    { name: "book", bgColor: 'pink', label: "transaction history",location:'transactionhistory' },
    { name: "question", bgColor: 'violet', label: "help",location:'help' },
    { name: "exclamation", bgColor: 'blue', label: 'about Hoteloka',location:'about' },
    { name: 'file-text-o', bgColor: 'yellow', label: "policy and agreement",location:'policy' },
    { name: 'sign-out', bgColor: "red", label: "sign out" }
]

export const hotelList = [
    {
        id: 1,
        name: 'Intercontinental Dago Pakar',
        address: 'Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Kota Bandung, Jawa Barat 40198',
        stars: 5,
        price: 1450200,
        description: "InterContinental Bandung Dago Pakar where serenity meets luxury, business meets indulgence. Surrounded by the Mountain View Golf Course, InterContinental Bandung Dago Pakar fits its prestigious position as the newest international five- star luxury hotel in the city.",
        picture: [
            { image: require('../supports/intercontinental/main.jpg') },
            { image: require('../supports/intercontinental/pool.jpg') },
            { image: require('../supports/intercontinental/view.jpg') },
            { image: require('../supports/intercontinental/room.jpg') },
            { image: require('../supports/intercontinental/room_2.jpg') }
        ],
        restaurants: [{
            name: 'Damai Restaurant',
            type: 'Main Dining Room',
            picture: require('../supports/intercontinental/damaiRest.jpg')
        },
        {
            name: 'TIAN JING LOU',
            type: 'Specialty Chinese Restaurant',
            picture: require('../supports/intercontinental/tianjinglao.jpg')
        }
        ]
    },
    {
        id: 2,
        name: 'Padma Hotel',
        address: 'Jl. Rancabentang No.56-58, Ciumbuleuit, Kec. Cidadap, Kota Bandung, Jawa Barat 40142',
        stars: 5,
        price: 1400000,
        description: "Padma Hotel Bandung boasts a spectacular hill view, elegant guestrooms and exceptional hospitality personified by its 24-hours Butler Service. Located at the hillside yet only minutes away from Bandung's city centre.",
        picture: [
            { image: require('../supports/padma/main.jpg') },
            { image: require('../supports/padma/pool.jpg') },
            { image: require('../supports/padma/view.jpg') },
            { image: require('../supports/padma/room.jpg') },
            { image: require('../supports/padma/room_2.jpg') }
        ],
        restaurants: [{
            name: 'The Restaurant',
            type: 'Main Dining Room',
            picture: require('../supports/padma/restaurant.jpg')
        },
        {
            name: 'The Bistro',
            type: 'Fine Dining Restaurant',
            picture: require('../supports/padma/bistro.jpg')
        }
        ]
    }, {
        id: 3,
        name: 'Crown Plaza',
        address: ' Jl. Lembong No.19, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111',
        stars: 5,
        price: 1100000,
        description: "Work, Reconnect, and Celebrate in the Heart of Bandung expresses our brand promise to clarify the duality of work and life balance is exist in Crowne Plaza®Bandung. Our strategic location will certainly spoil every patron to take a break from their routine and enjoy a short walk to explore this beautiful Bandung city.",
        picture: [
            { image: require('../supports/crown/main.jpg') },
            { image: require('../supports/crown/pool.jpg') },
            { image: require('../supports/crown/view.jpg') },
            { image: require('../supports/crown/room.jpg') },
            { image: require('../supports/crown/room_2.jpg') }
        ],
        restaurants: [{
            name: 'Mosaic All Day Dining Restaurant',
            type: 'Main Dining Room',
            picture: require('../supports/crown/mosaic.jpg')
        },
        {
            name: 'Mountain View Poolside Bar & Restaurant',
            type: 'Bar and Lounge',
            picture: require('../supports/crown/poolbar.jpg')
        }
        ]
    }, {
        id: 4,
        name: 'Hilton',
        address: ' Jl. HOS Tjokroaminoto No.41-43, Arjuna, Kec. Cicendo, Kota Bandung, Jawa Barat 40172',
        stars: 5,
        price: 1140000,
        description: "An 8-minute walk from intercity trains at Stasiun Bandung, this contemporary downtown hotel is 1.5 km from the boutiques of Jalan Braga.",
        picture: [
            { image: require('../supports/hilton/main.jpg') },
            { image: require('../supports/hilton/pool.jpg') },
            { image: require('../supports/hilton/view.jpg') },
            { image: require('../supports/hilton/room.jpg') },
            { image: require('../supports/hilton/room_2.jpg') }
        ],
        restaurants: [{
            name: 'Purnawarman',
            type: 'Main Dining Room',
            picture: require('../supports/hilton/purna.jpg')
        },
        {
            name: 'Frescon',
            type: 'Bar and Lounge',
            picture: require('../supports/hilton/fresco.jpg')
        }
        ]
    }, {
        id: 5,
        name: 'Trans Hotel',
        address: 'Jl. Gatot Subroto No.289, Cibangkong, Kec. Batununggal, Kota Bandung, Jawa Barat 40273',
        stars: 5,
        price: 1560440,
        description: "The hotel offers 280 well-appointed guest rooms and suites, each room are remarkably spacious, complete with premium amenities that are essential to both business and leisure travelers. All the facilities and services at The Trans Luxury Hotel have been designed to set the property in a class of its own",
        picture: [
            { image: require('../supports/trans/main.jpg') },
            { image: require('../supports/trans/pool.jpg') },
            { image: require('../supports/trans/view.jpg') },
            { image: require('../supports/trans/room.jpg') },
            { image: require('../supports/trans/room_2.jpg') }
        ],
        restaurants: [{
            name: 'Taste',
            type: 'Main Dining Room',
            picture: require('../supports/trans/taste.jpg')
        },
        {
            name: 'Moderno',
            type: 'Bar and Lounge',
            picture: require('../supports/trans/moderno.jpg')
        }
        ]
    }, {
        id: 6,
        name: 'The Luxton',
        address: 'Jl.Ir.H.Juanda No.18, Citarum, Kec.Bandung Wetan, Kota Bandung, Jawa Barat 40115',
        stars: 3,
        price: 560440,
        description: "The Luxton Bandung is an exclusive 4-star hotel with International Standard, conveniently located in the heart of Bandung",
        picture: [
            { image: require('../supports/luxton/main.jpg') },
            { image: require('../supports/luxton/pool.jpg') },
            { image: require('../supports/luxton/view.jpg') },
            { image: require('../supports/luxton/room.jpg') },
            { image: require('../supports/luxton/room_2.jpg') }
        ],
        restaurants: [{
            name: 'Illusionarium',
            type: 'Main Dining Room',
            picture: require('../supports/luxton/illlu.jpg')
        },
        {
            name: 'Savor',
            type: 'Bar and Lounge',
            picture: require('../supports/luxton/savor.jpg')
        }
        ]
    }, {
        id: 7,
        name: 'Aston Braga',
        address: 'Jl. Braga No.99 - 101, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40111',
        stars: 4,
        price: 960440,
        description: "The art-deco inspired Aston Braga Hotel & Residence Bandung is a 4-star property in central Bandung",
        picture: [
            { image: require('../supports/aston/main.jpg') },
            { image: require('../supports/aston/pool.jpg') },
            { image: require('../supports/aston/view.jpg') },
            { image: require('../supports/aston/room.jpg') },
            { image: require('../supports/aston/room_2.jpg') }
        ],
        restaurants: [{
            name: 'Garden Cafe',
            type: 'Main Dining Room',
            picture: require('../supports/aston/garden.jpg')
        },
        {
            name: 'Cagneys',
            type: 'Bar and Lounge',
            picture: require('../supports/aston/cagneys.jpg')
        }
        ]
    },
]





