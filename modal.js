/**
 * options is an Object
 * {
 *    template: ''
 * }
 */
function ModalService (options) {
    this.options = options;
    this.open = function() {
        var modal = document.getElementsByClassName('modal')[0];
        modal.innerHTML = this.options.template;
        modal.setAttribute('style', 'top: 35%');
        var closeIcon = document.createElement('i');
        closeIcon.classList.add('material-icons');
        closeIcon.classList.add('remove-card');
        closeIcon.innerText = 'clear';
        closeIcon.onclick = this.close.bind(this);
        modal.appendChild(closeIcon);
    };

    this.close = function () {
        var modal = document.getElementsByClassName('modal')[0];
        this.options.template = '';
        modal.innerHTML = this.options.template;
        modal.setAttribute('style', 'top: -35%');
    }
};