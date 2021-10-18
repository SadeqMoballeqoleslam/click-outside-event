function initClickOutsideEvent() {
    let elements = document.querySelectorAll('*[onclickoutside]');

    elements.forEach($el => {
        window.addEventListener('click', $event => {
            let target = $event.target;
            if ($el != target && !$el.contains(target))
                eval($el.getAttribute('onclickoutside'));
        })
    })
}

module.exports.initClickOutsideEvent = initClickOutsideEvent;