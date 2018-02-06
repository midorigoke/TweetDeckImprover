'use strict';

addEventListener('keydown', event => {
    if (event.ctrlKey && event.keyCode >= 49 && event.keyCode <= 57){
        for (const element of document.querySelectorAll('.js-account-item.is-selected')){
            document.querySelector('.js-account-item.is-selected').click();
        }

        const account = document.querySelectorAll('.js-account-list .js-account-item')[event.keyCode - 49];

        if (account !== undefined){
            account.click();
        }

        document.querySelector('.js-show-drawer.tweet-button').click();
    }
    
    if (event.keyCode === 27){
        document.querySelector('.js-hide-drawer.tweet-button').click();
    }
});
