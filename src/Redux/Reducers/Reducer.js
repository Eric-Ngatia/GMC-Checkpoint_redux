
const initialState = {
    films : [
            {
                id: 1,
                title:"Blood & Water",
                image: './images/b&w.jpg',
                vidLink:'https://www.youtube.com/embed/2_FY75DbQ7A',
            },
        
            {
                id: 2,
                title:"Harriet Tubman",
                image: './images/harriet.jpg',
                vidLink:'https://www.youtube.com/embed/GqoEs4cG6Uw',
            },
        
            {
                id: 3,
                title:"Hunger Games",
                image: './images/hgames3.jpg',
                vidLink:'https://www.youtube.com/embed/zdMIft77FEY',
            },
        
            {
                id: 4,
                title:"Hunger Games",
                image: './images/hgames5.jpg',
                vidLink:'https://www.youtube.com/embed/nbzjLhsmVXc',
            },
        
            {
                id: 5,
                title:"Naruto Shippuden",
                image: './images/naruto.jpg',
                vidLink:'https://www.youtube.com/embed/qzZ4Qooh4GI',
            },
        
            {
                id: 6,
                title:"Red Notice",
                image: './images/rednot.jpeg',
                vidLink:'https://www.youtube.com/embed/xrtrnLbWTZ8',
            },
        
            {
                id: 7,
                title:"Red Sparrow",
                image: './images/redspa.jpg',
                vidLink:'https://www.youtube.com/embed/JCTHIovjZVw',
            },
        
            {
                id: 8,
                title:"xXx",
                image: "./images/xXx.jpg",
                vidLink:'https://www.youtube.com/embed/04LbFxhswrY',
            },

            {
                id: 9,
                title:"Ibiza",
                image: "./images/ibiza.jpg",
                vidLink:'https://www.youtube.com/embed/nqwqd7iBYXo',
            },
    ],

    film : {
        id: "",
        title: "",
        image : "",
        vidLink: "",
    }
}

function rootReducer(state = initialState, action ) {
    switch (action.type) {
        case 'fetch-all-films':{
            return {
                films : (action.payload)
            }
        }
        

        case 'get-single-film' : {
            return {
                film: (action.payload)
            }
        }

        case '': {
            return {
                title : (action.payload)
            }
        }

        default : return state;
    }

}

export default rootReducer;

