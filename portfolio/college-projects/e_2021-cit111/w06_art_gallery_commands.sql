USE w06_art_gallery;

-- artist
SELECT * FROM artist;
DELETE FROM artist;

INSERT INTO artist (artist_id, fname, mname, lname, dob, dod, country, local_artist) VALUES
	(DEFAULT, 'Vincent', DEFAULT, 'van Gogh', 1853, 1890, 'France', 'n'),
	(DEFAULT, 'Rembrandt', 'Harmenszoon', 'VAN Rijn', 1606, 1669, 'Netherlands', 'n'),
	(DEFAULT, 'Leonardo', DEFAULT, 'da Vinci', 1452, 1519, 'Italy', 'n'),
	(DEFAULT, 'Venture', 'Lonzo', 'Coy', 1965, DEFAULT, 'United States', 'y'),
	(DEFAULT, 'Deborah', DEFAULT, 'Gill', 1970, DEFAULT, 'United States', 'y'),
	(DEFAULT, 'Claude', DEFAULT, 'Monet', 1840, 1926, 'France', 'n'),
	(DEFAULT, 'Pablo', DEFAULT, 'Picasso', 1904, 1973, 'Spain', 'n'),
	(DEFAULT, 'Michelangelo', 'di Lodovico', 'Simoni', 1475, 1564, 'Italy', 'n')
  ;

-- artwork
SELECT * FROM artwork;
DELETE FROM artwork;

INSERT INTO artwork (artwork_id, title, artyear, period, arttype, artfile, artist_id) VALUES
	(DEFAULT, 'Irises', 1889, 'Impressionism', 'Oil', 'irises.jpg', (SELECT artist_id FROM artist WHERE fname = 'Vincent')),
	(DEFAULT, 'The Starry Night', 1889, 'Post-Impressionism', 'Oil', 'starrynight.jpg', (SELECT artist_id FROM artist WHERE fname = 'Vincent')),
	(DEFAULT, 'Sunflowers', 1888, 'Post-impressionism', 'Oil', 'sunflowers.jpg', (SELECT artist_id FROM artist WHERE fname = 'Vincent')),
	(DEFAULT, 'Night Watch', 1642, 'Baroque', 'Oil', 'nightwatch.jpg', (SELECT artist_id FROM artist WHERE fname = 'Rembrandt')),
	(DEFAULT, 'Storm in the Sea of Galilee', 1633, 'Dutch Golden Age', 'Oil', 'stormgalilee.jpg', (SELECT artist_id FROM artist WHERE fname = 'Rembrandt')),
	(DEFAULT, 'Head of a Woman', 1508, 'High Renaissance', 'Oil', '.jpg', (SELECT artist_id FROM artist WHERE fname = 'Leonardo')),
	(DEFAULT, 'Last Supper', 1498, 'Renaissance', 'Tempra', '.jpg', (SELECT artist_id FROM artist WHERE fname = 'Leonardo')),
	(DEFAULT, 'Mona Lisa', 1517, 'Renaissance', 'Oil', '.jpg', (SELECT artist_id FROM artist WHERE fname = 'Leonardo')),
	(DEFAULT, 'Hillside Stream', 2005, 'Modern', 'Oil', 'hillsidestream.jpg', (SELECT artist_id FROM artist WHERE fname = 'Venture')),
	(DEFAULT, 'Old Barn', 1992, 'Modern', 'Oil', 'oldbarn.jpg', (SELECT artist_id FROM artist WHERE fname = 'Venture')),
	(DEFAULT, 'Beach Baby', 1999, 'Modern', 'Watercolor', 'beachbaby.jpg', (SELECT artist_id FROM artist WHERE fname = 'Deborah')),
	(DEFAULT, 'Women in the Garden', 1866, 'Impressionism', 'Oil', 'womengarden.jpg', (SELECT artist_id FROM artist WHERE fname = 'Claude')),
	(DEFAULT, 'Old Guitarist', 1904, 'Modern', 'Oil', 'guitarist.jpg', (SELECT artist_id FROM artist WHERE fname = 'Pablo'))
	;
	

    
-- keyword
SELECT * FROM keyword;
DELETE FROM keyword;

INSERT INTO keyword (keyword_id, keyword) VALUES
	(DEFAULT, 'flowers'),
	(DEFAULT, 'blue'),
	(DEFAULT, 'landscape'),
	(DEFAULT, 'girl'),
	(DEFAULT, 'people'),
	(DEFAULT, 'battle'),
	(DEFAULT, 'boat'),
	(DEFAULT, 'water'),
	(DEFAULT, 'people'),
	(DEFAULT, 'Christ'),
	(DEFAULT, 'food'),
	(DEFAULT, 'water'),
	(DEFAULT, 'baby'),
	(DEFAULT, 'blue');
    

-- artwork_has_keyword
SELECT * FROM artwork_has_keyword;
DELETE FROM artwork_has_keyword;

INSERT INTO artwork_has_keyword VALUES
	(1, 1), (2, 2), (2, 3), (3, 1), (4, 4), (4, 5), (4, 6), (5, 5), (5, 7),
	(5, 8), (5, 9), (6, 4), (6, 5), (7, 5), (7, 9), (7, 10), (8, 4), (8, 5),
	(9, 3), (9, 8), (10, 3), (11, 5), (11, 8), (11, 11), (12, 1), (12, 3),
	(12, 5), (13, 2), (13, 5);
