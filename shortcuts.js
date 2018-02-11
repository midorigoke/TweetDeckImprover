'use strict';

addEventListener('keydown', event => {

    if (event.ctrlKey && event.keyCode >= 49 && event.keyCode <= 57){
        //Ctrl + 1..9

        for (const element of document.querySelectorAll('.js-account-item.is-selected')){
            document.querySelector('.js-account-item.is-selected').click();
        }

        const isModalOpened = document.querySelector('.mdl') !== null;

        const account = document.querySelectorAll((isModalOpened ? '.mdl' : '.js-account-list') + ' .js-account-item')[event.keyCode - 49];

        if (account !== undefined){
            account.click();
        }

        if (!isModalOpened){
            document.querySelector('.js-show-drawer.tweet-button').click();
        }
    }
    
    if (event.keyCode === 27){
        //Esc

        document.querySelector('.js-hide-drawer.tweet-button').click();
    }

    if (event.keyCode === 13){
        //Enter

        const rtButton = document.querySelector('.js-retweet-button');

        if (rtButton !== null){
            rtButton.click();
        }
    }

    if (event.keyCode === 71){
        //g

        const selected = document.querySelector('.is-selected-tweet');

        if (selected !== null){
            selected.closest('.column-panel').querySelector('header').click();
        }
    }
});
