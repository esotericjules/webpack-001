import './hello-world-button.scss';

class helloWorldButton {
    buttonCssClass = 'hello-world-button';
    
    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');

        button.innerHTML = 'Hello World';
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }

        button.classList.add(this.buttonCssClass);
        body.appendChild(button);
    }
}

export default helloWorldButton;