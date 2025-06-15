sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/fioriapp1/fioriapp1/test/integration/FirstJourney',
		'com/fioriapp1/fioriapp1/test/integration/pages/BooksList',
		'com/fioriapp1/fioriapp1/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/fioriapp1/fioriapp1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);