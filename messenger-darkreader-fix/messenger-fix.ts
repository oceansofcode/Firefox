new MutationObserver((mutationList: MutationRecord[], observer: MutationObserver): void => {
    mutationList.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node instanceof HTMLDivElement && node.style.left === '9007200000000000px') {
                node.setAttribute('style', '');
                observer.disconnect();
            }
        });
    });
}).observe(document.querySelector('body'), { attributes: false, childList: true, subtree: false, attributeOldValue: false, characterDataOldValue: false });