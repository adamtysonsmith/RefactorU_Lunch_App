$(document).ready(function(){
    
    var restaurants = [
        {
            name: 'Native Foods',
            category: 'American'
        },
        {
            name: 'Pica\'s Taqueria',
            category: 'Mexican'
        },
        {
            name: 'Efrain\'s',
            category: 'Mexican'
        },
        {
            name: 'Moto Maki',
            category: 'Asian'
        },
        {
            name: 'Chipotle',
            category: 'Mexican'
        },
        {
            name: 'Smashburger',
            category: 'American'
        },
        {
            name: 'Vina (Pho)',
            category: 'Asian'
        },
        {
            name: 'Curry n\' Kebab',
            category: 'Indian'
        },
        {
            name: 'Katmandu',
            category: 'Indian'
        },
        {
            name: 'Blackbelly',
            category: 'Deli'
        },
        {
            name: 'Five Guys',
            category: 'American'
        },
        {
            name: 'Clay Oven',
            category: 'Indian'
        },
        {
            name: 'Cup of Peace',
            category: 'Mystery'
        },
        {
            name: 'California Pizza Kitchen',
            category: 'Pizza'
        },
        {
            name: 'Noodles & Co.',
            category: 'American'
        },
        {
            name: 'Rio Grande',
            category: 'Mexican'
        },
        {
            name: 'Cheese Course',
            category: 'Deli'
        },
        {
            name: 'Snarfs',
            category: 'Deli'
        },
        {
            name: 'Aloy Thai Cuisine',
            category: 'Asian'
        },
        {
            name: 'Larkburger',
            category: 'American'
        },
        {
            name: 'Pizzeria Da Lupo',
            category: 'Pizza'
        },
        {
            name: 'Zolo Southwestern Grill',
            category: 'Mexican'
        },
        {
            name: 'Mountain Sun',
            category: 'American'
        },
        {
            name: 'II Pastaio',
            category: 'Italian'
        },
        {
            name: 'Jimmy Johns',
            category: 'Deli'
        },
        {
            name: 'Hoaway Chinese Cafe',
            category: 'Asian'
        }
    ];
    
    
    $('#button-random').on('click', function() {
        // Clear the list content
        $('#result-category-list').html('');
        
        var random = _.sample(restaurants);
        $('#result-name').text(random.name);
        $('#result-category').text(random.category);
    });
    
    // Not working
    $('.category').on('click', function() {
        var selection = $(this).val().toString();
        
        var filtered = _.filter(restaurants, function(r) {
            return r.category === selection;
        });
        
        // Clear the random result, list content & then repopulate
        $('#result-name, #result-category').html('');
        $('#result-category-list').html('');
        filtered.forEach(function(r) {
            $('#result-category-list').append(
                '<li><h2>'+ r.name +'<h2><h4>'+ r.category +'</h4><hr></li>'
            );
        });
    });
    
    $('#available').text('There are ' + restaurants.length + ' restaurants available.')
});