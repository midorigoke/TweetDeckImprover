'use strict';

const addEvent = () => {
    const textarea = document.querySelector('.compose-content .compose-text');

    if (textarea === null){
        setTimeout(addEvent, 1000);
    }else{
        let hashtags = [];

        textarea.addEventListener('input', event => {
            const temp = event.target.value.match(/(^|\s)#\S+/g);
            hashtags = temp !== null ? temp.map(e => e.replace(/^\s/, '')) : [];
        });

        const appContent = document.querySelector('.app-content');

        const observer = new MutationObserver(record => {
            if (hashtags.length !== 0 && ((record[0].target === textarea && !textarea.disabled) || (record[0].target === appContent && !appContent.classList.contains('is-open')))){
                textarea.value = '\n' + hashtags.join(' ');

                textarea.selectionStart = textarea.selectionEnd = 0;
            }
        });

        observer.observe(textarea, {
            attributes: true,
            attributeFilter: [ 'disabled' ]
        });

        observer.observe(appContent, {
            attributes: true,
            attributeFilter: [ 'class' ]
        });
    }
};

addEvent();
